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

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic table with headers and data rows.
        </p>
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
      </section>

      <section className="space-y-4">
        <h2 id="with-badges" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Status Badges
        </h2>
        <p className="text-muted-foreground">
          Table cells can contain other components like badges.
        </p>
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
      </section>

      <section className="space-y-4">
        <h2 id="striped" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Striped Rows
        </h2>
        <p className="text-muted-foreground">
          Alternate row colors for better readability.
        </p>
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
      </section>

      <section className="space-y-4">
        <h2 id="compact" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Compact
        </h2>
        <p className="text-muted-foreground">
          Reduce padding for denser data display.
        </p>
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
      </section>
    </div>
  );
}
