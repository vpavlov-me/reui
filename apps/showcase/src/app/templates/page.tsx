"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@reluna-ui/ui";
import { LayoutDashboard, User, ArrowRight, ScrollText } from "lucide-react";

const templates = [
  {
    title: "Dashboard",
    description: "Family governance dashboard with overview cards, meetings, activities, and quick actions",
    href: "/templates/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    description: "User profile page with tabs, contact info, personal details, and edit profile sheet modal",
    href: "/templates/profile",
    icon: User,
  },
  {
    title: "Constitution",
    description: "Family constitution workspace with sections, quick actions, and governance guidance",
    href: "/templates/constitution",
    icon: ScrollText,
  },
];

export default function TemplatesPage() {
  return (
    <div className="container py-10">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-medium">Page Templates</h1>
        <p className="text-muted-foreground">
          Example pages built with reui components for a Family Governance Portal
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <Link key={template.href} href={template.href}>
            <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <template.icon className="h-5 w-5" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="mt-4">{template.title}</CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
