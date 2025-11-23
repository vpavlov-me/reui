"use client";

import * as React from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  Button,
} from "@reluna-ui/ui";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function CommandPage() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Command</h1>
        <p className="text-lg text-muted-foreground">
          Fast, composable, unstyled command menu for React. Built on top of cmdk.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Use for quick navigation and search functionality",
            "Group related commands together",
            "Include keyboard shortcuts for power users",
            "Provide clear feedback when no results are found",
            "Use as a command palette for power user features",
            "Include icons to help users quickly identify actions",
          ]}
          donts={[
            "Don't use for simple dropdown menus",
            "Don't overload with too many commands",
            "Don't hide essential actions in command menu only",
            "Don't use without search functionality",
            "Don't forget to handle empty states",
            "Don't nest command menus within each other",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic command menu with search and grouped items.
        </p>
        <CodePreview
          code={`<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <Smile className="mr-2 h-4 w-4" />
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem>
        <Calculator className="mr-2 h-4 w-4" />
        <span>Calculator</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CreditCard className="mr-2 h-4 w-4" />
        <span>Billing</span>
        <CommandShortcut>⌘B</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
        >
          <Command className="rounded-lg border shadow-md md:min-w-[450px]">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CodePreview>
      </section>

      {/* Dialog */}
      <section className="space-y-4">
        <h2 id="dialog" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Dialog
        </h2>
        <p className="text-muted-foreground">
          Command menu in a dialog. Press ⌘J to open.
        </p>
        <CodePreview
          code={`const [open, setOpen] = React.useState(false)

React.useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

<>
  <p className="text-sm text-muted-foreground">
    Press{" "}
    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
      <span className="text-xs">⌘</span>J
    </kbd>
  </p>
  <CommandDialog open={open} onOpenChange={setOpen}>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>Calendar</CommandItem>
        <CommandItem>Search Emoji</CommandItem>
        <CommandItem>Calculator</CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</>`}
        >
          <div>
            <p className="text-sm text-muted-foreground">
              Press{" "}
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>J
              </kbd>
            </p>
            <CommandDialog open={open} onOpenChange={setOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    Calendar
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    Search Emoji
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculator
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </div>
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
                <td className="p-3 font-mono text-xs">Command</td>
                <td className="p-3 text-xs">The root container for the command menu</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">CommandDialog</td>
                <td className="p-3 text-xs">Command menu wrapped in a dialog</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">CommandInput</td>
                <td className="p-3 text-xs">The search input field</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">CommandList</td>
                <td className="p-3 text-xs">Container for command items</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">CommandEmpty</td>
                <td className="p-3 text-xs">Shown when no results are found</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">CommandGroup</td>
                <td className="p-3 text-xs">Groups related command items</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">CommandItem</td>
                <td className="p-3 text-xs">A selectable command item</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">CommandSeparator</td>
                <td className="p-3 text-xs">Visual separator between groups</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">CommandShortcut</td>
                <td className="p-3 text-xs">Displays keyboard shortcut</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
