'use client';

import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Input } from '@your-org/ui';
import { Heart, Share2, Settings, Mail } from '@your-org/icons';

export default function ComponentShowcase() {
  return (
    <div className="space-y-8">
      {/* Buttons Section */}
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>Different button variants and sizes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              With Icon
            </Button>
            <Button disabled>Disabled</Button>
          </div>
        </CardContent>
      </Card>

      {/* Inputs Section */}
      <Card>
        <CardHeader>
          <CardTitle>Inputs</CardTitle>
          <CardDescription>Form input components</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Input placeholder="Disabled" disabled />
        </CardContent>
      </Card>

      {/* Cards Section */}
      <Card>
        <CardHeader>
          <CardTitle>Cards</CardTitle>
          <CardDescription>Card component examples</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Feature 1</CardTitle>
                <CardDescription>A simple card example</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is a card with a title, description, and content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Feature 2</CardTitle>
                <CardDescription>Another card example</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cards can be used to organize content into sections.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Feature 3</CardTitle>
                <CardDescription>Yet another card</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  They work great in grid layouts like this one.
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Icons Section */}
      <Card>
        <CardHeader>
          <CardTitle>Icons</CardTitle>
          <CardDescription>Lucide icons integration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-6 items-center">
            <Heart className="h-6 w-6" />
            <Share2 className="h-6 w-6" />
            <Settings className="h-6 w-6" />
            <Mail className="h-6 w-6" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
