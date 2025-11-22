"use client";

import * as React from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function ContextMenuPage() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Context Menu</h1>
        <p className="text-lg text-muted-foreground">
          Displays a menu to the user on right-click, typically with a list of actions.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
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
            "Use for contextual actions on specific elements",
            "Include commonly used actions for quick access",
            "Group related actions together",
            "Provide keyboard shortcuts for power users",
            "Use submenus for related nested actions",
            "Include checkbox/radio items for toggleable options",
          ]}
          donts={[
            "Don't use as the only way to access actions",
            "Don't include too many items (keep it focused)",
            "Don't hide critical functionality in context menus",
            "Don't use for mobile-only interfaces",
            "Don't nest submenus too deeply",
            "Don't forget to provide alternative access methods",
          ]}
        />
      </section>

      {/* Default */}
      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic context menu with common actions. Right-click on the area to open.
        </p>
        <CodePreview
          code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem inset>
      Back
      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset disabled>
      Forward
      <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset>
      Reload
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem inset>
      Save Page As...
      <ContextMenuShortcut>⌘S</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset>Print...</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem inset>
                Back
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset disabled>
                Forward
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>
                Reload
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem inset>
                Save Page As...
                <ContextMenuShortcut>⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem inset>Print...</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </CodePreview>
      </section>

      {/* With Submenus */}
      <section className="space-y-4">
        <h2 id="with-submenus" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Submenus
        </h2>
        <p className="text-muted-foreground">
          Context menu with nested submenus for grouped actions.
        </p>
        <CodePreview
          code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuSub>
      <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>
          Save Page As...
          <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
        <ContextMenuItem>Name Window...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuSub>
                <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>
                    Save Page As...
                    <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                  <ContextMenuItem>Name Window...</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Developer Tools</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
            </ContextMenuContent>
          </ContextMenu>
        </CodePreview>
      </section>

      {/* With Checkboxes and Radio Items */}
      <section className="space-y-4">
        <h2 id="with-checkboxes" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Checkboxes and Radio Items
        </h2>
        <p className="text-muted-foreground">
          Context menu with toggleable options.
        </p>
        <CodePreview
          code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuCheckboxItem
      checked={bookmarksChecked}
      onCheckedChange={setBookmarksChecked}
    >
      Show Bookmarks
      <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem
      checked={urlsChecked}
      onCheckedChange={setUrlsChecked}
    >
      Show Full URLs
    </ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuLabel inset>People</ContextMenuLabel>
    <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
      <ContextMenuRadioItem value="pedro">
        Pedro Duarte
      </ContextMenuRadioItem>
      <ContextMenuRadioItem value="colm">
        Colm Tuite
      </ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>`}
        >
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuCheckboxItem
                checked={bookmarksChecked}
                onCheckedChange={setBookmarksChecked}
              >
                Show Bookmarks
                <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={urlsChecked}
                onCheckedChange={setUrlsChecked}
              >
                Show Full URLs
              </ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuLabel inset>People</ContextMenuLabel>
              <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                <ContextMenuRadioItem value="pedro">
                  Pedro Duarte
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="colm">
                  Colm Tuite
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>
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
                <td className="p-3 font-mono text-xs">ContextMenu</td>
                <td className="p-3 text-xs">The root component</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ContextMenuTrigger</td>
                <td className="p-3 text-xs">The element that triggers the context menu on right-click</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ContextMenuContent</td>
                <td className="p-3 text-xs">Container for menu items</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ContextMenuItem</td>
                <td className="p-3 text-xs">A clickable menu item</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ContextMenuCheckboxItem</td>
                <td className="p-3 text-xs">A toggleable checkbox item</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ContextMenuRadioGroup</td>
                <td className="p-3 text-xs">Groups radio items together</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ContextMenuRadioItem</td>
                <td className="p-3 text-xs">A radio option item</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ContextMenuLabel</td>
                <td className="p-3 text-xs">A label for grouping items</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ContextMenuSeparator</td>
                <td className="p-3 text-xs">A visual separator</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ContextMenuShortcut</td>
                <td className="p-3 text-xs">Displays keyboard shortcut</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ContextMenuSub</td>
                <td className="p-3 text-xs">Container for a submenu</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">ContextMenuSubTrigger</td>
                <td className="p-3 text-xs">Triggers the submenu</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">ContextMenuSubContent</td>
                <td className="p-3 text-xs">Content of the submenu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
