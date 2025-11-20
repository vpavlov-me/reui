"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@reluna-ui/ui";

export default function AvatarPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          An image element with a fallback for representing the user. Avatars help personalize the interface and identify users visually.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          Avatar with image and fallback.
        </p>
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </section>

      <section className="space-y-4">
        <h2 id="fallback" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Fallback
        </h2>
        <p className="text-muted-foreground">
          When no image is available, initials are displayed.
        </p>
        <div className="flex gap-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="sizes" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Sizes
        </h2>
        <p className="text-muted-foreground">
          Avatars can be sized using className.
        </p>
        <div className="flex items-center gap-4">
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=24&h=24&fit=crop&crop=face" />
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=56&h=56&fit=crop&crop=face" />
            <AvatarFallback className="text-lg">LG</AvatarFallback>
          </Avatar>
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face" />
            <AvatarFallback className="text-xl">XL</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="group" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Avatar Group
        </h2>
        <p className="text-muted-foreground">
          Display multiple avatars in a stacked group.
        </p>
        <div className="flex -space-x-4">
          <Avatar className="border-2 border-background">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" />
            <AvatarFallback>A1</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" />
            <AvatarFallback>A2</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" />
            <AvatarFallback>A3</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarFallback>+3</AvatarFallback>
          </Avatar>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="with-name" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          With Name
        </h2>
        <p className="text-muted-foreground">
          Avatar paired with user information.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Sofia Clark</p>
              <p className="text-xs text-muted-foreground">sofia@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Jackson Davis</p>
              <p className="text-xs text-muted-foreground">jackson@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
