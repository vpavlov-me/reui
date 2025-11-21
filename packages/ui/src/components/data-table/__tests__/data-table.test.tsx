import { describe, it, expect, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataTable } from '../data-table'

interface TestData {
  id: string
  name: string
  email: string
  age: number
}

const mockData: TestData[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', age: 30 },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', age: 25 },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', age: 35 },
]

const mockColumns = [
  { id: 'name', header: 'Name', accessorKey: 'name' as const, sortable: true },
  { id: 'email', header: 'Email', accessorKey: 'email' as const },
  { id: 'age', header: 'Age', accessorKey: 'age' as const, sortable: true },
]

describe('DataTable', () => {
  it('renders table with data', () => {
    render(<DataTable data={mockData} columns={mockColumns} />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('jane@example.com')).toBeInTheDocument()
    expect(screen.getByText('35')).toBeInTheDocument()
  })

  it('renders column headers', () => {
    render(<DataTable data={mockData} columns={mockColumns} />)

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Age')).toBeInTheDocument()
  })

  it('shows empty message when no data', () => {
    render(<DataTable data={[]} columns={mockColumns} />)

    expect(screen.getByText('No results found.')).toBeInTheDocument()
  })

  it('shows custom empty message', () => {
    render(
      <DataTable
        data={[]}
        columns={mockColumns}
        emptyMessage="No users available"
      />
    )

    expect(screen.getByText('No users available')).toBeInTheDocument()
  })

  it('renders search input when searchable', () => {
    render(<DataTable data={mockData} columns={mockColumns} searchable />)

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('hides search input when not searchable', () => {
    render(<DataTable data={mockData} columns={mockColumns} searchable={false} />)

    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument()
  })

  it('filters data on search', async () => {
    const user = userEvent.setup()
    render(<DataTable data={mockData} columns={mockColumns} searchable />)

    const searchInput = screen.getByPlaceholderText('Search...')
    await user.type(searchInput, 'Jane')

    // Jane should be visible
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    // Others should be filtered out
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument()
    expect(screen.queryByText('Bob Johnson')).not.toBeInTheDocument()
  })

  it('clears search when clicking clear button', async () => {
    const user = userEvent.setup()
    render(<DataTable data={mockData} columns={mockColumns} searchable />)

    const searchInput = screen.getByPlaceholderText('Search...')
    await user.type(searchInput, 'John')

    const clearButton = screen.getByRole('button', { name: /clear search/i })
    await user.click(clearButton)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Bob Johnson')).toBeInTheDocument()
  })

  it('sorts data when clicking sortable column', async () => {
    const user = userEvent.setup()
    render(<DataTable data={mockData} columns={mockColumns} />)

    // Click Age column to sort ascending
    const ageHeader = screen.getByText('Age').closest('th')
    if (ageHeader) {
      await user.click(ageHeader)
    }

    const rows = screen.getAllByRole('row')
    // First row is header, so check data rows
    const firstDataRow = rows[1]
    expect(within(firstDataRow).getByText('Jane Smith')).toBeInTheDocument()
  })

  it('handles pagination', () => {
    render(<DataTable data={mockData} columns={mockColumns} pageSize={2} />)

    expect(screen.getByText('Page 1 of 2')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.queryByText('Bob Johnson')).not.toBeInTheDocument()
  })

  it('navigates to next page', async () => {
    const user = userEvent.setup()
    render(<DataTable data={mockData} columns={mockColumns} pageSize={2} />)

    const nextButton = screen.getByRole('button', { name: /next page/i })
    await user.click(nextButton)

    expect(screen.getByText('Page 2 of 2')).toBeInTheDocument()
    expect(screen.getByText('Bob Johnson')).toBeInTheDocument()
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument()
  })

  it('calls onRowClick when clicking a row', async () => {
    const user = userEvent.setup()
    const onRowClick = vi.fn()
    render(
      <DataTable
        data={mockData}
        columns={mockColumns}
        onRowClick={onRowClick}
      />
    )

    await user.click(screen.getByText('John Doe'))

    expect(onRowClick).toHaveBeenCalledWith(mockData[0])
  })

  it('applies custom className', () => {
    const { container } = render(
      <DataTable
        data={mockData}
        columns={mockColumns}
        className="custom-table"
      />
    )

    expect(container.firstChild).toHaveClass('custom-table')
  })
})
