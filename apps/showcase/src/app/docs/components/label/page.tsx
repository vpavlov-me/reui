"use client";

import * as React from "react";
import { Label, Input, Checkbox, RadioGroup, RadioGroupItem } from "@reluna-ui/ui";

export default function LabelPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Label</h1>
        <p className="text-lg text-muted-foreground">
          Renders an accessible label associated with form controls. Labels improve usability by clearly identifying form fields and making them clickable.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          Basic label associated with an input field.
        </p>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email address" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-checkbox" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Checkbox
        </h2>
        <p className="text-muted-foreground">
          Label paired with checkbox control.
        </p>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-radio" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Radio Group
        </h2>
        <p className="text-muted-foreground">
          Labels for radio button options.
        </p>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </section>

      <section className="space-y-4">
        <h2 id="required" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Required Field
        </h2>
        <p className="text-muted-foreground">
          Indicate required fields with an asterisk.
        </p>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input id="name" required />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-description" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Description
        </h2>
        <p className="text-muted-foreground">
          Label with additional helper text.
        </p>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="johndoe" />
          <p className="text-sm text-muted-foreground">
            This will be your public display name.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled State
        </h2>
        <p className="text-muted-foreground">
          Label styling for disabled inputs.
        </p>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="disabled" className="text-muted-foreground">
            Disabled field
          </Label>
          <Input id="disabled" disabled placeholder="Cannot edit" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="form-example" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Form Example
        </h2>
        <p className="text-muted-foreground">
          Multiple labeled fields in a form layout.
        </p>
        <div className="max-w-sm space-y-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="form-email">Email</Label>
            <Input id="form-email" type="email" placeholder="john@example.com" />
          </div>
        </div>
      </section>
    </div>
  );
}
