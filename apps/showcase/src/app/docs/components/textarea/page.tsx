"use client";

import * as React from "react";
import { Textarea, Label, Button } from "@reluna-ui/ui";

export default function TextareaPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Textarea</h1>
        <p className="text-lg text-muted-foreground">
          Displays a multi-line text input field. Textareas are ideal for longer-form content like comments, descriptions, or messages.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic multi-line text input.
        </p>
        <div className="max-w-md">
          <Textarea placeholder="Type your message here..." />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-label" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Label
        </h2>
        <p className="text-muted-foreground">
          Pair textareas with labels for better accessibility.
        </p>
        <div className="max-w-md space-y-2">
          <Label htmlFor="message">Your Message</Label>
          <Textarea id="message" placeholder="Write your message..." />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-text" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Helper Text
        </h2>
        <p className="text-muted-foreground">
          Add helper text to provide additional context.
        </p>
        <div className="max-w-md space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself..." />
          <p className="text-sm text-muted-foreground">
            Your bio will be displayed on your public profile.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-button" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Button
        </h2>
        <p className="text-muted-foreground">
          Combine textarea with a submit button for forms.
        </p>
        <div className="max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="feedback">Feedback</Label>
            <Textarea id="feedback" placeholder="Share your feedback..." />
          </div>
          <Button>Send Feedback</Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled
        </h2>
        <p className="text-muted-foreground">
          Disabled textarea to prevent user input.
        </p>
        <div className="max-w-md">
          <Textarea disabled placeholder="This textarea is disabled" />
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="custom-height" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Custom Height
        </h2>
        <p className="text-muted-foreground">
          Adjust the height using className or style props.
        </p>
        <div className="max-w-md">
          <Textarea className="min-h-[200px]" placeholder="Large textarea..." />
        </div>
      </section>
    </div>
  );
}
