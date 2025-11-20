"use client";

import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Button,
  Input,
  Textarea,
  Separator,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@reluna-ui/ui";
import {
  Home,
  ChevronRight,
  Bell,
  Mail,
  Phone,
  MapPin,
  User,
  Users,
  Building2,
  Calendar,
  GraduationCap,
  Heart,
  Pencil,
  Camera,
  Trash2,
  X,
} from "lucide-react";

export default function ProfileTemplate() {
  const [isEditOpen, setIsEditOpen] = React.useState(false);

  return (
    <div className="bg-muted/40 py-8 sm:py-12">
      <div className="container space-y-6">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Template</p>
          <h1 className="text-3xl font-medium">Family Profile</h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Showcase a detailed family member record with timeline, tabs, and editable sheets
            inside an isolated frame.
          </p>
        </div>
        <div className="overflow-hidden rounded-[32px] border bg-background shadow-2xl ring-1 ring-black/5">
          <div className="min-h-[720px] bg-muted/30">
      {/* Top Navigation */}
      <div className="border-b bg-background">
        <div className="container max-w-[1048px] flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/templates/dashboard" className="font-medium text-xl flex items-center gap-1">
              <span className="text-primary">(RE:</span>
              <span>Family</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/templates/dashboard">
                <Button variant="ghost" size="sm">Dashboard</Button>
              </Link>
              <Button variant="ghost" size="sm">
                Governance <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm">
                Development <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm">
                Family Affairs <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm">
                Tools <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="User" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="border-b bg-background">
        <div className="container max-w-[1048px] flex h-12 items-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Home className="h-4 w-4" />
            <ChevronRight className="h-3 w-3" />
            <span>Page Name</span>
            <ChevronRight className="h-3 w-3" />
          </div>
        </div>
      </div>

      <div className="container max-w-[1048px] py-4">
        <h1 className="text-2xl font-medium mb-4">Profile</h1>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Tabs */}
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4 mt-4">
                {/* About Me */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">About Me</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      As the head of the family, I focus on long-term governance, ensuring that our values and legacy are preserved across generations. I oversee strategic decisions, mentor next-gen members, and lead discussions on wealth management and philanthropy.
                    </p>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Contact Information</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Mail className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Email</div>
                          <div className="text-sm font-medium">loganroy@sucession.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Phone className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Phone</div>
                          <div className="text-sm font-medium">+1 (234) 56-78</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Adress</div>
                          <div className="text-sm font-medium">123 Park Avenue, New York, NY 10022, USA</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Details */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Personal Details</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <User className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Full Name</div>
                          <div className="text-sm font-medium">Logan Roy</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Users className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Family</div>
                          <div className="text-sm font-medium">Roys</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Company</div>
                          <div className="text-sm font-medium">Reluna</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Birthdate</div>
                          <div className="text-sm font-medium">July 1, 2025</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Information */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Additional Information</CardTitle>
                    <Separator />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <GraduationCap className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Education</div>
                          <div className="text-sm font-medium">Harvard Business School (Executive Program)</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Heart className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Interests</div>
                          <div className="text-sm font-medium">Philanthropy, Traveling, Sailing</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="mt-4">
                <Card>
                  <CardContent className="py-10 text-center text-muted-foreground">
                    Security settings content...
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="mt-4">
                <Card>
                  <CardContent className="py-10 text-center text-muted-foreground">
                    Preferences content...
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="mt-4">
                <Card>
                  <CardContent className="py-10 text-center text-muted-foreground">
                    Activity history content...
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Profile Card */}
          <div>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face" alt="Logan Roy" />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-medium">Logan Roy</h3>
                  <p className="text-sm text-muted-foreground">Family Member · Roys</p>
                  <p className="text-sm text-muted-foreground">Member since July 2025</p>

                  <div className="w-full mt-6 space-y-2">
                    <Sheet open={isEditOpen} onOpenChange={setIsEditOpen}>
                      <SheetTrigger asChild>
                        <Button className="w-full" variant="default">
                          <Pencil className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
                        <SheetHeader className="pb-4">
                          <div className="flex items-center justify-between">
                            <SheetTitle className="text-xl">Edit Profile</SheetTitle>
                          </div>
                        </SheetHeader>

                        <div className="space-y-6">
                          {/* About Me Section */}
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-base">About Me</CardTitle>
                              <Separator />
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea
                                  id="bio"
                                  placeholder="Enter Text"
                                  className="min-h-[100px] resize-y"
                                />
                              </div>
                            </CardContent>
                          </Card>

                          {/* Contact Information */}
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-base">Contact Information</CardTitle>
                              <Separator />
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="email">
                                  Email <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                  id="email"
                                  type="email"
                                  defaultValue="loganroy@sucession.com"
                                  disabled
                                />
                                <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <div className="flex gap-2">
                                  <Select defaultValue="us">
                                    <SelectTrigger className="w-[100px]">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="us">+1</SelectItem>
                                      <SelectItem value="uk">+44</SelectItem>
                                      <SelectItem value="de">+49</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <Input
                                    id="phone"
                                    placeholder="(234) 45-67 988"
                                    defaultValue="(234) 45-67 988"
                                    className="flex-1"
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Textarea
                                  id="address"
                                  placeholder="Enter Address"
                                  className="min-h-[80px] resize-y"
                                />
                              </div>
                            </CardContent>
                          </Card>

                          {/* Personal Details */}
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-base">Personal Details</CardTitle>
                              <Separator />
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="firstName">First Name</Label>
                                  <Input id="firstName" placeholder="Enter Your Name" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="lastName">Last Name</Label>
                                  <Input id="lastName" placeholder="Enter Your Last Name" />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="birthdate">Birthdate</Label>
                                <div className="relative">
                                  <Input id="birthdate" placeholder="Enter Your Birthdate" />
                                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="family">Family</Label>
                                  <Input id="family" defaultValue="Reluna" disabled />
                                  <p className="text-xs text-muted-foreground">Family cannot be changed</p>
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="company">Company</Label>
                                  <Input id="company" defaultValue="Reluna" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Additional Information */}
                          <Card>
                            <CardHeader className="pb-3">
                              <CardTitle className="text-base">Additional Information</CardTitle>
                              <Separator />
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="education">Education</Label>
                                <Input id="education" placeholder="Enter Your Education" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="interests">Interests</Label>
                                <Input id="interests" placeholder="Enter Your Interests" />
                              </div>
                            </CardContent>
                          </Card>

                          {/* Save Button */}
                          <Button className="w-full" size="lg" onClick={() => setIsEditOpen(false)}>
                            Save
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>

                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <Camera className="h-4 w-4 mr-2" />
                        Change Photo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove Photo
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stay Updated */}
        <Card className="mt-4">
          <CardContent className="py-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Stay Updated</h3>
                <p className="text-sm text-muted-foreground">
                  Get insights and update on family governance best practices delivered every two weeks
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Your Email Address" className="max-w-xs" />
                  <Button>
                    Subscribe <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="w-32 h-24 bg-muted rounded-lg flex items-center justify-center">
                    <Mail className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-primary">1</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="pt-4 mt-4 border-t">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-medium text-lg mb-4 flex items-center gap-1">
                <span className="text-primary">(RE:</span>
                <span>Family</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Reluna Family platform for managing family wealth, governance, and knowledge transfer across generations.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Family Constitution</li>
                <li>Family Council</li>
                <li>Decision Making</li>
                <li>Conflict Resolution</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Education</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Learning Paths</li>
                <li>Mentorship</li>
                <li>Resources</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Data Processing</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <Separator className="mb-4" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>© 2025 Reluna Family. All rights reserved v0.1.3 Beta</span>
            <div className="flex items-center gap-2">
              <span>Sitemap</span>
              <span>·</span>
              <span>☼</span>
            </div>
          </div>
        </footer>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}
