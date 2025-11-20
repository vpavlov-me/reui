"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@reluna-ui/ui";
import { BellRing, Check } from "lucide-react";

export default function CardPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Card</h1>
        <p className="text-lg text-muted-foreground">
          A container component that groups related content and actions. Cards create clear visual boundaries and organize information into digestible chunks.
        </p>
      </div>

      <section className="space-y-4">
        <h2 id="default" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Default
        </h2>
        <p className="text-muted-foreground">
          A basic card with header, content, and footer.
        </p>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Card content. This is where your main content goes.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Action</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 id="form" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Form Card
        </h2>
        <p className="text-muted-foreground">
          Card containing a form with inputs.
        </p>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 id="notification" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Notification Card
        </h2>
        <p className="text-muted-foreground">
          Card for displaying notifications or alerts.
        </p>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <BellRing className="h-5 w-5 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Push Notifications</p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Mark all as read
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 id="metrics" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Metrics Card
        </h2>
        <p className="text-muted-foreground">
          Card for displaying statistics and metrics.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-3xl">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Revenue</CardDescription>
              <CardTitle className="text-3xl">$45,231.89</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Subscriptions</CardDescription>
              <CardTitle className="text-3xl">+2,350</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Now</CardDescription>
              <CardTitle className="text-3xl">+573</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
