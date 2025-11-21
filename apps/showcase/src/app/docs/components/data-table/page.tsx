"use client";

import * as React from "react";
import { DataTable } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

const sampleData: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: "4", name: "Alice Brown", email: "alice@example.com", role: "Editor", status: "Active" },
  { id: "5", name: "Charlie Wilson", email: "charlie@example.com", role: "User", status: "Pending" },
];

const columns = [
  { id: "name", header: "Name", accessorKey: "name" as const, sortable: true },
  { id: "email", header: "Email", accessorKey: "email" as const, sortable: true },
  { id: "role", header: "Role", accessorKey: "role" as const, sortable: true },
  { id: "status", header: "Status", accessorKey: "status" as const, sortable: true },
];

export default function DataTablePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Data Table</h1>
        <p className="text-lg text-muted-foreground">
          A powerful data table component with sorting, filtering, pagination, and search functionality.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { DataTable } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Enable sorting for relevant columns",
            "Provide search for large datasets",
            "Use pagination for better performance",
            "Show empty state when no results",
            "Make clickable rows obvious with cursor",
            "Use consistent column widths",
          ]}
          donts={[
            "Don't display too many columns on mobile",
            "Don't make every column sortable",
            "Don't hide pagination controls",
            "Don't use for small static lists",
            "Don't forget loading states",
            "Don't truncate important data",
          ]}
        />
      </section>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 id="basic" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Basic Usage
        </h2>
        <p className="text-muted-foreground">
          Simple table with sortable columns and search.
        </p>
        <CodePreview
          code={`const columns = [
  { id: "name", header: "Name", accessorKey: "name", sortable: true },
  { id: "email", header: "Email", accessorKey: "email", sortable: true },
  { id: "role", header: "Role", accessorKey: "role", sortable: true },
  { id: "status", header: "Status", accessorKey: "status", sortable: true },
];

<DataTable data={users} columns={columns} />`}
        >
          <DataTable data={sampleData} columns={columns} />
        </CodePreview>
      </section>

      {/* With Pagination */}
      <section className="space-y-4">
        <h2 id="pagination" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Pagination
        </h2>
        <p className="text-muted-foreground">
          Control page size and available page size options.
        </p>
        <CodePreview
          code={`<DataTable
  data={users}
  columns={columns}
  pageSize={3}
  pageSizeOptions={[3, 5, 10]}
/>`}
        >
          <DataTable
            data={sampleData}
            columns={columns}
            pageSize={3}
            pageSizeOptions={[3, 5, 10]}
          />
        </CodePreview>
      </section>

      {/* Without Search */}
      <section className="space-y-4">
        <h2 id="no-search" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Without Search
        </h2>
        <p className="text-muted-foreground">
          Disable the search input for simpler tables.
        </p>
        <CodePreview
          code={`<DataTable
  data={users}
  columns={columns}
  searchable={false}
/>`}
        >
          <DataTable
            data={sampleData}
            columns={columns}
            searchable={false}
          />
        </CodePreview>
      </section>

      {/* Clickable Rows */}
      <section className="space-y-4">
        <h2 id="clickable" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Clickable Rows
        </h2>
        <p className="text-muted-foreground">
          Add row click handler for navigation or actions.
        </p>
        <CodePreview
          code={`<DataTable
  data={users}
  columns={columns}
  onRowClick={(row) => alert(\`Clicked: \${row.name}\`)}
/>`}
        >
          <DataTable
            data={sampleData}
            columns={columns}
            onRowClick={(row) => alert(`Clicked: ${row.name}`)}
          />
        </CodePreview>
      </section>

      {/* Empty State */}
      <section className="space-y-4">
        <h2 id="empty" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Empty State
        </h2>
        <p className="text-muted-foreground">
          Custom message when no data is available.
        </p>
        <CodePreview
          code={`<DataTable
  data={[]}
  columns={columns}
  emptyMessage="No users found. Add your first user to get started."
/>`}
        >
          <DataTable
            data={[]}
            columns={columns}
            emptyMessage="No users found. Add your first user to get started."
          />
        </CodePreview>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 id="api" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          API Reference
        </h2>
        <div className="rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Prop</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Default</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">data</td>
                <td className="p-3 font-mono text-xs">T[]</td>
                <td className="p-3 font-mono text-xs">required</td>
                <td className="p-3">Array of data items</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">columns</td>
                <td className="p-3 font-mono text-xs">DataTableColumn[]</td>
                <td className="p-3 font-mono text-xs">required</td>
                <td className="p-3">Column definitions</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">pageSize</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">10</td>
                <td className="p-3">Items per page</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">searchable</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">true</td>
                <td className="p-3">Show search input</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onRowClick</td>
                <td className="p-3 font-mono text-xs">(row: T) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Row click handler</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">emptyMessage</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">"No results found."</td>
                <td className="p-3">Empty state message</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
