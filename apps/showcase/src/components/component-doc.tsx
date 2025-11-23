'use client';

import { Badge } from '@reluna-ui/ui';

interface PropItem {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface ComponentDocProps {
  name: string;
  description: string;
  category: string;
  props: PropItem[];
  example: string;
  usage: string;
}

export function ComponentDoc({
  name,
  description,
  category,
  props,
  example,
  usage,
}: ComponentDocProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4 border-b pb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-medium">{name}</h1>
          <Badge variant="secondary">{category}</Badge>
        </div>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      {/* Usage Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation & Usage</h2>
        <div className="rounded-lg bg-muted p-4">
          <pre className="overflow-x-auto">
            <code className="text-sm font-mono">{usage}</code>
          </pre>
        </div>
      </section>

      {/* Example Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Example</h2>
        <div className="rounded-lg bg-muted p-4">
          <pre className="overflow-x-auto">
            <code className="text-sm font-mono">{example}</code>
          </pre>
        </div>
      </section>

      {/* Props Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Prop</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-left font-semibold">Default</th>
                <th className="px-4 py-3 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop) => (
                <tr key={prop.name} className="border-b hover:bg-muted/50">
                  <td className="px-4 py-3">
                    <code className="rounded bg-muted px-2 py-1 font-mono text-xs">
                      {prop.name}
                    </code>
                    {prop.required && (
                      <span className="ml-2 inline-block">
                        <Badge variant="destructive" className="text-xs">
                          Required
                        </Badge>
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <code className="font-mono text-xs text-muted-foreground">
                      {prop.type}
                    </code>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {prop.default ? (
                      <code className="font-mono text-xs">{prop.default}</code>
                    ) : (
                      <span>—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="space-y-4 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950">
        <h2 className="text-xl font-semibold text-green-900 dark:text-green-100">
          ♿ Accessibility
        </h2>
        <p className="text-sm text-green-800 dark:text-green-200">
          This component is fully WCAG 2.1 AA compliant with keyboard navigation, screen reader support, and proper focus management.
        </p>
      </section>
    </div>
  );
}
