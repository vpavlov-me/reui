"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table"
import { Button } from "../button"
import { Input } from "../input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select"
import { cn } from "../../lib/utils"
import { ArrowUpDown, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search, X } from "lucide-react"

interface DataTableColumn<T> {
  id: string
  header: string
  accessorKey?: keyof T
  accessorFn?: (row: T) => React.ReactNode
  sortable?: boolean
  filterable?: boolean
  cell?: (row: T) => React.ReactNode
  className?: string
}

interface DataTableProps<T> {
  data: T[]
  columns: DataTableColumn<T>[]
  pageSize?: number
  pageSizeOptions?: number[]
  searchable?: boolean
  searchPlaceholder?: string
  className?: string
  emptyMessage?: string
  onRowClick?: (row: T) => void
  getRowId?: (row: T) => string
  "aria-label"?: string
  "aria-describedby"?: string
}

type SortDirection = "asc" | "desc" | null

function DataTableInner<T>(
  {
    data,
    columns,
    pageSize: initialPageSize = 10,
    pageSizeOptions = [10, 20, 50, 100],
    searchable = true,
    searchPlaceholder = "Search...",
    className,
    emptyMessage = "No results found.",
    onRowClick,
    getRowId,
    "aria-label": ariaLabel = "Data table",
    "aria-describedby": ariaDescribedby,
  }: DataTableProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [sortColumn, setSortColumn] = React.useState<string | null>(null)
  const [sortDirection, setSortDirection] = React.useState<SortDirection>(null)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1)
  const [pageSize, setPageSize] = React.useState(initialPageSize)

  // Get cell value for sorting/filtering
  const getCellValue = React.useCallback(
    (row: T, column: DataTableColumn<T>): string => {
      let value: unknown
      if (column.accessorFn) {
        value = column.accessorFn(row)
      } else if (column.accessorKey) {
        value = row[column.accessorKey]
      } else {
        value = ""
      }
      return String(value ?? "")
    },
    []
  )

  // Filter data
  const filteredData = React.useMemo(() => {
    if (!searchQuery) return data

    const query = searchQuery.toLowerCase()
    return data.filter((row) => {
      return columns.some((column) => {
        if (column.filterable === false) return false
        const value = getCellValue(row, column)
        return value.toLowerCase().includes(query)
      })
    })
  }, [data, searchQuery, columns, getCellValue])

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sortColumn || !sortDirection) return filteredData

    const column = columns.find((col) => col.id === sortColumn)
    if (!column) return filteredData

    return [...filteredData].sort((a, b) => {
      const aValue = getCellValue(a, column)
      const bValue = getCellValue(b, column)

      // Try numeric comparison first
      const aNum = parseFloat(aValue)
      const bNum = parseFloat(bValue)

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortDirection === "asc" ? aNum - bNum : bNum - aNum
      }

      // Fall back to string comparison
      const comparison = aValue.localeCompare(bValue)
      return sortDirection === "asc" ? comparison : -comparison
    })
  }, [filteredData, sortColumn, sortDirection, columns, getCellValue])

  // Paginate data
  const paginatedData = React.useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return sortedData.slice(start, start + pageSize)
  }, [sortedData, currentPage, pageSize])

  const totalPages = Math.ceil(sortedData.length / pageSize)

  // Reset to page 1 when data or filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, sortColumn, sortDirection, pageSize])

  const handleSort = (columnId: string) => {
    const column = columns.find((col) => col.id === columnId)
    if (!column?.sortable) return

    if (sortColumn !== columnId) {
      setSortColumn(columnId)
      setSortDirection("asc")
    } else if (sortDirection === "asc") {
      setSortDirection("desc")
    } else {
      setSortColumn(null)
      setSortDirection(null)
    }
  }

  const renderSortIcon = (columnId: string) => {
    if (sortColumn !== columnId) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />
    }
    if (sortDirection === "asc") {
      return <ArrowUp className="ml-2 h-4 w-4" />
    }
    return <ArrowDown className="ml-2 h-4 w-4" />
  }

  const renderCell = (row: T, column: DataTableColumn<T>) => {
    if (column.cell) {
      return column.cell(row)
    }
    if (column.accessorFn) {
      return column.accessorFn(row)
    }
    if (column.accessorKey) {
      const value = row[column.accessorKey]
      return value as React.ReactNode
    }
    return null
  }

  return (
    <div ref={ref} className={cn("space-y-4", className)} aria-label={ariaLabel} aria-describedby={ariaDescribedby}>
      {/* Search */}
      {searchable && (
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
            aria-label="Search table"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </button>
          )}
        </div>
      )}

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.id}
                  className={cn(
                    column.sortable && "cursor-pointer select-none",
                    column.className
                  )}
                  onClick={() => column.sortable && handleSort(column.id)}
                >
                  <div className="flex items-center">
                    {column.header}
                    {column.sortable && renderSortIcon(column.id)}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row, index) => {
                const rowId = getRowId ? getRowId(row) : index
                return (
                  <TableRow
                    key={rowId}
                    onClick={() => onRowClick?.(row)}
                    className={cn(onRowClick && "cursor-pointer")}
                  >
                    {columns.map((column) => (
                      <TableCell key={column.id} className={column.className}>
                        {renderCell(row, column)}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>Rows per page:</span>
          <Select
            value={String(pageSize)}
            onValueChange={(value) => setPageSize(Number(value))}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={String(size)}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages || 1}
          </span>
          <div className="flex items-center space-x-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeft className="h-4 w-4" />
              <span className="sr-only">First page</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage >= totalPages}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage >= totalPages}
            >
              <ChevronsRight className="h-4 w-4" />
              <span className="sr-only">Last page</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Use type assertion for forwardRef with generics
const DataTable = React.forwardRef(DataTableInner) as <T>(
  props: DataTableProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement

export { DataTable }
export type { DataTableColumn, DataTableProps }
