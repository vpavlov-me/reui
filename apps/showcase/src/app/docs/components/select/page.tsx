"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Label,
} from "@reluna-ui/ui";

export default function SelectPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Select</h1>
        <p className="text-lg text-muted-foreground">
          Displays a dropdown list of options for the user to pick from. Selects provide a compact way to choose from predefined options.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic select dropdown with simple options.
        </p>
        <div className="max-w-xs">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-label" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Label
        </h2>
        <p className="text-muted-foreground">
          Pair select with a label for accessibility.
        </p>
        <div className="max-w-xs space-y-2">
          <Label>Role</Label>
          <Select defaultValue="member">
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="editor">Editor</SelectItem>
              <SelectItem value="member">Member</SelectItem>
              <SelectItem value="viewer">Viewer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-groups" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Groups
        </h2>
        <p className="text-muted-foreground">
          Organize options into labeled groups.
        </p>
        <div className="max-w-xs">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="est">Eastern Time (EST)</SelectItem>
                <SelectItem value="cst">Central Time (CST)</SelectItem>
                <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                <SelectItem value="pst">Pacific Time (PST)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                <SelectItem value="cet">Central European Time (CET)</SelectItem>
                <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled select to prevent user interaction.
        </p>
        <div className="max-w-xs">
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="disabled-items" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled Items
        </h2>
        <p className="text-muted-foreground">
          Individual items can be disabled.
        </p>
        <div className="max-w-xs">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="pro">Pro</SelectItem>
              <SelectItem value="enterprise" disabled>Enterprise (Coming Soon)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>
    </div>
  );
}
