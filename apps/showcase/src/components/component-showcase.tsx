'use client';

import * as React from 'react';
import {
  // Form Controls
  Button,
  Input,
  Label,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Slider,
  Switch,
  Textarea,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,

  // Layout
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Separator,
  AspectRatio,
  ScrollArea,

  // Feedback
  Alert,
  AlertTitle,
  AlertDescription,
  Badge,
  Progress,
  Skeleton,

  // Navigation
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,

  // Overlay
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,

  // Data Display
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,

  // Date
  Calendar,
} from '@your-org/ui';

import {
  Heart,
  Share2,
  Settings,
  Mail,
  Bell,
  AlertCircle,
  Terminal,
  Check,
  ChevronDown,
  Bold,
  Italic,
  Underline,
  ChevronsUpDown,
  Plus,
  User,
  CreditCard,
  LogOut,
  Cloud,
  Github,
  Keyboard,
  LifeBuoy,
  MessageSquare,
} from '@your-org/icons';

export default function ComponentShowcase() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [progress, setProgress] = React.useState(45);
  const [isOpen, setIsOpen] = React.useState(false);

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

      {/* Form Controls Section */}
      <Card>
        <CardHeader>
          <CardTitle>Form Controls</CardTitle>
          <CardDescription>Input, checkbox, radio, select, and more</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="email@example.com" type="email" />
          </div>

          {/* Textarea */}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Type your message here..." />
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>

          {/* Radio Group */}
          <div className="space-y-2">
            <Label>Notification preferences</Label>
            <RadioGroup defaultValue="all">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mentions" id="mentions" />
                <Label htmlFor="mentions">Mentions only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="none" />
                <Label htmlFor="none">None</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Select */}
          <div className="space-y-2">
            <Label>Theme</Label>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Switch */}
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>

          {/* Slider */}
          <div className="space-y-2">
            <Label>Volume: {progress}%</Label>
            <Slider
              value={[progress]}
              onValueChange={(value) => setProgress(value[0])}
              max={100}
              step={1}
              className="w-[300px]"
            />
          </div>

          {/* Toggle */}
          <div className="flex gap-2">
            <Toggle aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>

          {/* Toggle Group */}
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>

      {/* Feedback Section */}
      <Card>
        <CardHeader>
          <CardTitle>Feedback</CardTitle>
          <CardDescription>Alerts, badges, progress, and skeleton</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Alerts */}
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <Label>Progress</Label>
            <Progress value={progress} className="w-[60%]" />
          </div>

          {/* Skeleton */}
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Section */}
      <Card>
        <CardHeader>
          <CardTitle>Navigation</CardTitle>
          <CardDescription>Tabs, breadcrumbs, pagination, and navigation menu</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Tabs */}
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="p-4">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password" className="p-4">
              Change your password here.
            </TabsContent>
            <TabsContent value="settings" className="p-4">
              Adjust your settings here.
            </TabsContent>
          </Tabs>

          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Components
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Examples
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Pagination */}
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>

      {/* Overlay Components Section */}
      <Card>
        <CardHeader>
          <CardTitle>Overlays</CardTitle>
          <CardDescription>Dialog, alert dialog, sheet, popover, tooltip, and dropdown</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          {/* Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Alert Dialog */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Open Alert</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="sheet-name" className="text-right">
                    Name
                  </Label>
                  <Input id="sheet-name" className="col-span-3" />
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Tooltip */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Hover Card */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">
                    The React Framework – created and maintained by @vercel.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Context Menu */}
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                Back
              </ContextMenuItem>
              <ContextMenuItem disabled>
                Forward
              </ContextMenuItem>
              <ContextMenuItem>
                Reload
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </CardContent>
      </Card>

      {/* Data Display Section */}
      <Card>
        <CardHeader>
          <CardTitle>Data Display</CardTitle>
          <CardDescription>Accordion, avatar, table, and collapsible</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Avatar */}
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>

          {/* Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>PayPal</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV003</TableCell>
                <TableCell>Unpaid</TableCell>
                <TableCell>Bank Transfer</TableCell>
                <TableCell className="text-right">$350.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Collapsible */}
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2"
          >
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">
                @peduarte starred 3 repositories
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @radix-ui/colors
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @stitches/react
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      {/* Calendar Section */}
      <Card>
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
          <CardDescription>Date picker component</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </CardContent>
      </Card>

      {/* Layout Components Section */}
      <Card>
        <CardHeader>
          <CardTitle>Layout</CardTitle>
          <CardDescription>Separator, aspect ratio, and scroll area</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Separator */}
          <div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
              <p className="text-sm text-muted-foreground">
                An open-source UI component library.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>

          {/* Aspect Ratio */}
          <div className="w-[300px]">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
              <div className="flex h-full w-full items-center justify-center">
                16:9 Aspect Ratio
              </div>
            </AspectRatio>
          </div>

          {/* Scroll Area */}
          <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {Array.from({ length: 50 }).map((_, i) => (
              <React.Fragment key={i}>
                <div className="text-sm">Tag {i + 1}</div>
                <Separator className="my-2" />
              </React.Fragment>
            ))}
          </ScrollArea>
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
              <CardFooter>
                <Button size="sm">Learn More</Button>
              </CardFooter>
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
              <CardFooter>
                <Button size="sm" variant="outline">View</Button>
              </CardFooter>
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
              <CardFooter>
                <Button size="sm" variant="secondary">Details</Button>
              </CardFooter>
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
          <div className="flex flex-wrap gap-6 items-center">
            <Heart className="h-6 w-6" />
            <Share2 className="h-6 w-6" />
            <Settings className="h-6 w-6" />
            <Mail className="h-6 w-6" />
            <Bell className="h-6 w-6" />
            <User className="h-6 w-6" />
            <CreditCard className="h-6 w-6" />
            <Cloud className="h-6 w-6" />
            <Github className="h-6 w-6" />
            <Keyboard className="h-6 w-6" />
            <LifeBuoy className="h-6 w-6" />
            <MessageSquare className="h-6 w-6" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
