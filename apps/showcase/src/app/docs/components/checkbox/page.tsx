"use client";

import * as React from "react";
import { Checkbox, Label } from "@reluna-ui/ui";

export default function CheckboxPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          A control that allows the user to toggle between checked and not checked states. Checkboxes are ideal for multiple selections or binary choices.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic checkbox that can be toggled.
        </p>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-text" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Description
        </h2>
        <p className="text-muted-foreground">
          Add descriptive text for additional context.
        </p>
        <div className="items-top flex space-x-2">
          <Checkbox id="newsletter" />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            <p className="text-sm text-muted-foreground">
              You agree to receive marketing emails from us.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="multiple" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Multiple Options
        </h2>
        <p className="text-muted-foreground">
          Use multiple checkboxes for selecting several options.
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="email-notif" defaultChecked />
            <Label htmlFor="email-notif">Email notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="push-notif" />
            <Label htmlFor="push-notif">Push notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sms-notif" />
            <Label htmlFor="sms-notif">SMS notifications</Label>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled checkboxes to prevent interaction.
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-unchecked" disabled />
            <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
              Disabled unchecked
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled-checked" disabled checked />
            <Label htmlFor="disabled-checked" className="text-muted-foreground">
              Disabled checked
            </Label>
          </div>
        </div>
      </section>
    </div>
  );
}
