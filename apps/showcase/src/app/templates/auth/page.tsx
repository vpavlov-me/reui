"use client";

import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  Input,
  Label,
  Separator,
} from "@reluna-ui/ui";
import {
  ArrowLeft,
  User,
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react";

export default function AuthTemplate() {
  const [step, setStep] = React.useState(1);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      title: "Welcome to Reluna Family Governance",
      description: "Your guide to preserving your family's wealth, values, and harmony to thrive across generations.",
    },
    {
      title: "Secure Family Documents",
      description: "Store and manage your family constitution, agreements, and important documents in one secure place.",
    },
    {
      title: "Collaborative Decision Making",
      description: "Engage family members in transparent voting and decision-making processes.",
    },
    {
      title: "Next Generation Education",
      description: "Prepare the next generation with structured learning paths and mentorship programs.",
    },
    {
      title: "Family Meeting Management",
      description: "Schedule, organize, and document family council meetings with ease.",
    },
  ];

  return (
    <div className="bg-muted/40 py-8 sm:py-12">
      <div className="container space-y-6">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Template</p>
          <h1 className="text-3xl font-medium">Authentication</h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            A multi-step registration flow with social login options and an image carousel showcasing family governance features.
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] border bg-background shadow-2xl ring-1 ring-black/5">
          <div className="min-h-[720px] bg-[#F5F5F5] flex items-center justify-center p-8">
            <div className="grid lg:grid-cols-2 gap-6 w-full max-w-[1000px]">
              {/* Left Side - Form */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  {/* Back Button */}
                  <Button variant="ghost" size="icon" className="mb-6 -ml-2 rounded-full bg-muted">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-semibold mb-2">Create Account</h1>
                    <p className="text-sm text-muted-foreground">
                      You're about to create a new family<br />
                      as a Family Owner.
                    </p>
                  </div>

                  {/* Social Login */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Separator className="flex-1" />
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Sign up faster with</span>
                      <Separator className="flex-1" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <Button variant="outline" className="h-11">
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                          <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
                          <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
                          <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
                          <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7## 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
                        </svg>
                      </Button>
                      <Button variant="outline" className="h-11">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                      </Button>
                      <Button variant="outline" className="h-11">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#0A66C2">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </Button>
                    </div>
                  </div>

                  {/* OR Divider */}
                  <div className="flex items-center gap-3 mb-6">
                    <Separator className="flex-1" />
                    <span className="text-xs text-muted-foreground">OR</span>
                    <Separator className="flex-1" />
                  </div>

                  {/* Step Indicator */}
                  <div className="flex items-center justify-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        1
                      </div>
                      <span className={`text-sm ${step >= 1 ? 'text-foreground' : 'text-muted-foreground'}`}>Personal Info</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        2
                      </div>
                      <span className={`text-sm ${step >= 2 ? 'text-foreground' : 'text-muted-foreground'}`}>Account Setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        3
                      </div>
                      <span className={`text-sm ${step >= 3 ? 'text-foreground' : 'text-muted-foreground'}`}>Family Details</span>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="birthdate">Birthdate</Label>
                      <div className="relative">
                        <Input id="birthdate" placeholder="08/27/2025" />
                        <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-11">
                      Back
                    </Button>
                    <Button className="h-11" onClick={() => setStep(Math.min(step + 1, 3))}>
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Right Side - Image Carousel */}
              <div className="hidden lg:block">
                <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
                  {/* Background Image Placeholder */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=1000&fit=crop')",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <div className="text-white mb-8">
                      <h2 className="text-3xl font-semibold mb-3">
                        {slides[currentSlide].title}
                      </h2>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {slides[currentSlide].description}
                      </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-black/30 text-white hover:bg-black/50 hover:text-white"
                        onClick={() => setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1)}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>

                      {/* Dots */}
                      <div className="flex items-center gap-2">
                        {slides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all ${
                              index === currentSlide
                                ? 'w-6 bg-white'
                                : 'w-2 bg-white/50 hover:bg-white/70'
                            }`}
                          />
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full bg-black/30 text-white hover:bg-black/50 hover:text-white"
                        onClick={() => setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1)}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
