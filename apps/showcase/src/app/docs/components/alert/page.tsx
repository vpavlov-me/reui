"use client";

import * as React from "react";
import { Alert, AlertDescription, AlertTitle } from "@reluna-ui/ui";
import { AlertCircle, CheckCircle, Info, AlertTriangle, Rocket } from "lucide-react";

export default function AlertPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Alert</h1>
        <p className="text-lg text-muted-foreground">
          Displays a callout for user attention. Alerts communicate important information, feedback, or guidance to users.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic alert with title and description.
        </p>
        <Alert className="max-w-lg">
          <Rocket className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 id="destructive" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Destructive
        </h2>
        <p className="text-muted-foreground">
          Use destructive variant for errors or critical warnings.
        </p>
        <Alert variant="destructive" className="max-w-lg">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again to continue.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 id="success" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Success
        </h2>
        <p className="text-muted-foreground">
          Custom styled alert for success messages.
        </p>
        <Alert className="max-w-lg border-emerald-200 bg-emerald-50 text-emerald-900 [&>svg]:text-emerald-600">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your changes have been saved successfully.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 id="warning" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Warning
        </h2>
        <p className="text-muted-foreground">
          Custom styled alert for warnings.
        </p>
        <Alert className="max-w-lg border-amber-200 bg-amber-50 text-amber-900 [&>svg]:text-amber-600">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            Your subscription will expire in 3 days. Please renew to avoid service interruption.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 id="info" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Info
        </h2>
        <p className="text-muted-foreground">
          Custom styled alert for informational messages.
        </p>
        <Alert className="max-w-lg border-blue-200 bg-blue-50 text-blue-900 [&>svg]:text-blue-600">
          <Info className="h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            This feature is currently in beta. Some functionality may change.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 id="no-icon" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Without Icon
        </h2>
        <p className="text-muted-foreground">
          Alerts can be used without icons.
        </p>
        <Alert className="max-w-lg">
          <AlertTitle>Update Available</AlertTitle>
          <AlertDescription>
            A new software update is available. Download version 2.0.4 now.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 id="description-only" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Description Only
        </h2>
        <p className="text-muted-foreground">
          Simple alert with just description text.
        </p>
        <Alert className="max-w-lg">
          <AlertDescription>
            Your trial ends in 7 days. Upgrade now to keep access to all features.
          </AlertDescription>
        </Alert>
      </section>
    </div>
  );
}
