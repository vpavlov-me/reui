"use client";

import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@reluna-ui/ui";

export default function InputOTPPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Input OTP</h1>
        <p className="text-lg text-muted-foreground">
          Accessible one-time password component with copy paste functionality.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          Basic OTP input with 6 digits.
        </p>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </section>

      <section className="space-y-4">
        <h2 id="with-separator" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Separator
        </h2>
        <p className="text-muted-foreground">
          OTP input with visual separator.
        </p>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </section>

      <section className="space-y-4">
        <h2 id="pattern" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Numeric Pattern
        </h2>
        <p className="text-muted-foreground">
          OTP input that only accepts numbers.
        </p>
        <InputOTP maxLength={4} pattern="^[0-9]+$">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </section>
    </div>
  );
}
