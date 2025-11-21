"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
} from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

const invoices = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { invoice: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { invoice: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
];

const projects = [
  { name: "Research Governance", owner: "Logan Johns", status: "Active", updated: "Jul 15" },
  { name: "Education Program", owner: "Maria Keyes", status: "Paused", updated: "Jul 11" },
  { name: "Conflict Framework", owner: "Lucia Park", status: "Draft", updated: "Jul 09" },
];

export default function TablePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Table</h1>
        <p className="text-lg text-muted-foreground">
          A responsive table component for displaying tabular data. Tables organize information in rows and columns for easy scanning and comparison.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use tables for displaying structured, comparable data",
            "Include clear column headers that describe the data",
            "Right-align numeric data for easy comparison",
            "Use consistent formatting within each column",
            "Add captions to provide context about the table data",
            "Consider striped rows for tables with many rows",
          ]}
          donts={[
            "Don't use tables for layout purposes",
            "Don't include too many columns that require horizontal scrolling",
            "Don't mix data types within the same column",
            "Don't use tables for content that isn't truly tabular",
            "Don't hide important actions in table rows without indication",
            "Don't omit column headers or use ambiguous labels",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic table with headers and data rows.
        </p>
        <CodePreview
          code={`const invoices = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
];

<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>{invoice.status}</TableCell>
        <TableCell>{invoice.method}</TableCell>
        <TableCell className="text-right">{invoice.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
        >
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>{invoice.method}</TableCell>
                  <TableCell className="text-right">{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CodePreview>
      </section>

      {/* With Status Badges */}
      <section className="space-y-4">
        <h2 id="with-badges" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Status Badges
        </h2>
        <p className="text-muted-foreground">
          Table cells can contain other components like badges.
        </p>
        <CodePreview
          code={`const projects = [
  { name: "Research Governance", owner: "Logan Johns", status: "Active", updated: "Jul 15" },
  { name: "Education Program", owner: "Maria Keyes", status: "Paused", updated: "Jul 11" },
  { name: "Conflict Framework", owner: "Lucia Park", status: "Draft", updated: "Jul 09" },
];

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Owner</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Updated</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {projects.map((project) => (
      <TableRow key={project.name}>
        <TableCell className="font-medium">{project.name}</TableCell>
        <TableCell>{project.owner}</TableCell>
        <TableCell>
          <Badge
            variant="secondary"
            className={
              project.status === "Active"
                ? "bg-emerald-50 text-emerald-700"
                : project.status === "Paused"
                  ? "bg-amber-50 text-amber-700"
                  : "bg-muted text-muted-foreground"
            }
          >
            {project.status}
          </Badge>
        </TableCell>
        <TableCell className="text-right text-muted-foreground">
          {project.updated}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.name}>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.owner}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        project.status === "Active"
                          ? "bg-emerald-50 text-emerald-700"
                          : project.status === "Paused"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-muted text-muted-foreground"
                      }
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {project.updated}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CodePreview>
      </section>

      {/* Striped Rows */}
      <section className="space-y-4">
        <h2 id="striped" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Striped Rows
        </h2>
        <p className="text-muted-foreground">
          Alternate row colors for better readability.
        </p>
        <CodePreview
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice, index) => (
      <TableRow key={invoice.invoice} className={index % 2 === 0 ? "bg-muted/50" : ""}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>{invoice.status}</TableCell>
        <TableCell>{invoice.method}</TableCell>
        <TableCell className="text-right">{invoice.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice, index) => (
                <TableRow key={invoice.invoice} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>{invoice.method}</TableCell>
                  <TableCell className="text-right">{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CodePreview>
      </section>

      {/* Compact */}
      <section className="space-y-4">
        <h2 id="compact" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Compact
        </h2>
        <p className="text-muted-foreground">
          Reduce padding for denser data display.
        </p>
        <CodePreview
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="h-8">Invoice</TableHead>
      <TableHead className="h-8">Status</TableHead>
      <TableHead className="h-8 text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.slice(0, 3).map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="py-2 font-medium">{invoice.invoice}</TableCell>
        <TableCell className="py-2">{invoice.status}</TableCell>
        <TableCell className="py-2 text-right">{invoice.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="h-8">Invoice</TableHead>
                <TableHead className="h-8">Status</TableHead>
                <TableHead className="h-8 text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 3).map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="py-2 font-medium">{invoice.invoice}</TableCell>
                  <TableCell className="py-2">{invoice.status}</TableCell>
                  <TableCell className="py-2 text-right">{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
                <th className="p-3 text-left font-medium">Component</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">Table</td>
                <td className="p-3 text-xs">The root table element wrapper</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">TableHeader</td>
                <td className="p-3 text-xs">Container for table header rows</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">TableBody</td>
                <td className="p-3 text-xs">Container for table body rows</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">TableRow</td>
                <td className="p-3 text-xs">A single table row</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">TableHead</td>
                <td className="p-3 text-xs">A header cell element</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">TableCell</td>
                <td className="p-3 text-xs">A standard data cell element</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">TableCaption</td>
                <td className="p-3 text-xs">A caption providing context for the table</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
