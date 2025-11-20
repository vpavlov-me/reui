"use client";

import * as React from "react";
import { Input, Label, Button } from "@reluna-ui/ui";
import { Search, Mail, Eye, EyeOff } from "lucide-react";

export default function InputPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Input</h1>
        <p className="text-lg text-muted-foreground">
          Displays a form input field for collecting user data. Input components are the foundation of forms and can be customized for various data types.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          The default input field for text entry.
        </p>
        <div className="max-w-sm">
          <Input placeholder="Enter text..." />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-label" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Label
        </h2>
        <p className="text-muted-foreground">
          Pair inputs with labels for accessibility and clarity.
        </p>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="types" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Input Types
        </h2>
        <p className="text-muted-foreground">
          Different input types for specific data formats.
        </p>
        <div className="grid gap-4 max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="text">Text</Label>
            <Input id="text" type="text" placeholder="Enter text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-type">Email</Label>
            <Input id="email-type" type="email" placeholder="email@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="number">Number</Label>
            <Input id="number" type="number" placeholder="0" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-icon" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Icon
        </h2>
        <p className="text-muted-foreground">
          Add icons to inputs for visual context.
        </p>
        <div className="space-y-4 max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search..." />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-10" type="email" placeholder="Email address" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-button" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Button
        </h2>
        <p className="text-muted-foreground">
          Combine input with button for form actions.
        </p>
        <div className="flex max-w-md gap-2">
          <Input placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled inputs prevent user interaction.
        </p>
        <div className="max-w-sm">
          <Input disabled placeholder="Disabled input" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="file" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          File Input
        </h2>
        <p className="text-muted-foreground">
          File input for uploading documents.
        </p>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="file">Upload file</Label>
          <Input id="file" type="file" />
        </div>
      </section>
    </div>
  );
}
