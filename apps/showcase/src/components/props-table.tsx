import * as React from "react";

interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description?: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="rounded-lg border overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="p-3 text-left font-medium">Prop</th>
            <th className="p-3 text-left font-medium">Type</th>
            <th className="p-3 text-left font-medium">Default</th>
            <th className="p-3 text-left font-medium hidden md:table-cell">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr key={prop.name} className={index < props.length - 1 ? "border-b" : ""}>
              <td className="p-3">
                <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">
                  {prop.name}
                </code>
                {prop.required && (
                  <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-destructive text-destructive-foreground">
                    Required
                  </span>
                )}
              </td>
              <td className="p-3">
                <code className="text-xs font-mono text-muted-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="p-3">
                {prop.default ? (
                  <code className="text-xs font-mono text-muted-foreground">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </td>
              <td className="p-3 text-muted-foreground text-sm hidden md:table-cell">
                {prop.description || "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface ComponentPropsTableProps {
  title?: string;
  props: PropDefinition[];
}

export function ComponentPropsTable({ title, props }: ComponentPropsTableProps) {
  return (
    <div className="space-y-3">
      {title && (
        <h3 className="text-lg font-semibold">{title}</h3>
      )}
      <PropsTable props={props} />
    </div>
  );
}
