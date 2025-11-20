"use client";

import * as React from "react";
import { Switch, Label } from "@reluna-ui/ui";

export default function SwitchPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
        <p className="text-lg text-muted-foreground">
          A control that allows users to toggle between on and off states. Switches are ideal for immediate binary settings.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic toggle switch.
        </p>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="checked" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default Checked
        </h2>
        <p className="text-muted-foreground">
          Switch with default checked state.
        </p>
        <div className="flex items-center space-x-2">
          <Switch id="wifi" defaultChecked />
          <Label htmlFor="wifi">WiFi</Label>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-description" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Description
        </h2>
        <p className="text-muted-foreground">
          Add descriptive text for context.
        </p>
        <div className="flex items-center justify-between rounded-lg border p-4 max-w-md">
          <div className="space-y-0.5">
            <Label htmlFor="notifications">Push Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive notifications on your device.
            </p>
          </div>
          <Switch id="notifications" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="settings-list" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Settings List
        </h2>
        <p className="text-muted-foreground">
          Common pattern for settings pages.
        </p>
        <div className="space-y-4 max-w-md">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="email-notif">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive email updates.
              </p>
            </div>
            <Switch id="email-notif" defaultChecked />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="marketing">Marketing Emails</Label>
              <p className="text-sm text-muted-foreground">
                Receive marketing content.
              </p>
            </div>
            <Switch id="marketing" />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="security">Security Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get notified about security events.
              </p>
            </div>
            <Switch id="security" defaultChecked />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled switches to prevent interaction.
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Switch id="disabled-off" disabled />
            <Label htmlFor="disabled-off" className="text-muted-foreground">
              Disabled off
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="disabled-on" disabled checked />
            <Label htmlFor="disabled-on" className="text-muted-foreground">
              Disabled on
            </Label>
          </div>
        </div>
      </section>
    </div>
  );
}
