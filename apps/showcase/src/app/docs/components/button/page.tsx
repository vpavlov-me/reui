"use client";

import * as React from "react";
import { Button } from "@reluna-ui/ui";
import { Check, Settings, User, Mail, ArrowRight, Loader2 } from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground">
          Displays a button or a component that looks like a button. Buttons allow users to take actions and make choices with a single tap.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="variants" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Variants
        </h2>
        <p className="text-muted-foreground">
          Button comes with multiple visual variants to indicate different types of actions.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="sizes" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Sizes
        </h2>
        <p className="text-muted-foreground">
          Buttons are available in different sizes for various use cases.
        </p>
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-icon" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Icon
        </h2>
        <p className="text-muted-foreground">
          Combine buttons with icons to provide visual context for the action.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Login with Email
          </Button>
          <Button variant="secondary">
            Save
            <Check className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="icon-only" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Icon Only
        </h2>
        <p className="text-muted-foreground">
          Use icon-only buttons for compact interfaces or toolbar actions.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <User className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="loading" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Loading State
        </h2>
        <p className="text-muted-foreground">
          Show loading state to indicate that an action is in progress.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled buttons prevent user interaction and indicate unavailable actions.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Default</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="destructive" disabled>Destructive</Button>
          <Button variant="outline" disabled>Outline</Button>
        </div>
      </section>
    </div>
  );
}
