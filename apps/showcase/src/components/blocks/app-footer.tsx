"use client";

import Link from "next/link";
import {
  Badge,
  Button,
  Card,
  Input,
  Separator,
} from "@reluna-ui/ui";
import { Mail, Moon, Send, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface AppFooterProps {
  logo?: React.ReactNode;
  description?: string;
  columns?: FooterColumn[];
  newsletter?: {
    title: string;
    description: string;
    onSubscribe?: (email: string) => void;
  };
  copyright?: string;
  version?: string;
  showThemeToggle?: boolean;
  className?: string;
}

const defaultLogo = (
  <svg className="h-10 w-auto" viewBox="0 0 127 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46.6857 10.0846C40.1027 3.09614 30.189 0.12264 20.7416 2.30298C11.2941 4.48331 3.77699 11.4796 1.06912 20.6123C-1.63874 29.745 0.882305 39.5989 7.66672 46.4L10.3064 43.979C1.45768 34.8436 1.84245 20.4091 11.1658 11.7388C20.4891 3.0684 35.2204 3.44542 44.0691 12.5809L46.6857 10.0846Z" className="fill-foreground" />
    <path d="M11.2455 35.6786V19.671H18.9213C20.1705 19.671 21.2617 19.8884 22.1949 20.323C23.143 20.7577 23.873 21.3722 24.3847 22.1666C24.9115 22.961 25.1749 23.8828 25.1749 24.932C25.1749 25.7863 24.9792 26.5657 24.5879 27.2701C24.2116 27.9596 23.6849 28.5217 23.0076 28.9563C22.3454 29.391 21.5853 29.6608 20.7274 29.7657L20.5468 29.7882L25.6941 35.6786H21.4047L16.7992 30.058H14.9931V35.6786H11.2455ZM18.4247 27.4275C19.3428 27.4275 20.0727 27.2102 20.6145 26.7755C21.1714 26.3259 21.4498 25.7188 21.4498 24.9544C21.4498 24.205 21.1714 23.613 20.6145 23.1783C20.0577 22.7287 19.3277 22.5038 18.4247 22.5038H14.9931V27.4275H18.4247Z" className="fill-foreground" />
    <path d="M39.8146 35.6786H27.7365V19.671H39.5889V22.6837H31.3938V26.2135H38.9793V28.8439H31.3938V32.666H39.8146V35.6786Z" className="fill-foreground" />
    <path d="M46.0585 25.8302C45.4865 25.8302 45.02 25.6578 44.6588 25.3131C44.2976 24.9534 44.1169 24.4962 44.1169 23.9416C44.1169 23.4021 44.2976 22.9599 44.6588 22.6152C45.035 22.2554 45.5016 22.0756 46.0585 22.0756C46.6153 22.0756 47.0744 22.2554 47.4356 22.6152C47.8119 22.9599 48 23.4021 48 23.9416C48 24.4962 47.8194 24.9534 47.4582 25.3131C47.097 25.6578 46.6304 25.8302 46.0585 25.8302ZM46.0585 33.6316C45.4865 33.6316 45.02 33.4593 44.6588 33.1145C44.2976 32.7548 44.1169 32.2977 44.1169 31.7431C44.1169 31.1885 44.2976 30.7389 44.6588 30.3941C45.02 30.0344 45.4865 29.8546 46.0585 29.8546C46.6304 29.8546 47.097 30.0344 47.4582 30.3941C47.8194 30.7389 48 31.1885 48 31.7431C48 32.2977 47.8194 32.7548 47.4582 33.1145C47.097 33.4593 46.6304 33.6316 46.0585 33.6316Z" className="fill-foreground" />
    <path d="M57.497 36H53.656V19.624H65.386V22.89H57.497V26.501H64.397V29.491H57.497V36ZM70.5039 36.299C69.2772 36.299 68.2882 36 67.5369 35.402C66.8009 34.7887 66.4329 33.9607 66.4329 32.918C66.4329 30.6947 68.2882 29.353 71.9989 28.893L74.5059 28.594V28.111C74.5059 27.5437 74.3142 27.0913 73.9309 26.754C73.5629 26.4013 73.0415 26.225 72.3669 26.225C71.7382 26.225 71.2322 26.3937 70.8489 26.731C70.4655 27.053 70.2815 27.5053 70.2969 28.088H66.9619C66.9619 26.8 67.4525 25.7727 68.4339 25.006C69.4305 24.2393 70.7569 23.856 72.4129 23.856C74.0842 23.856 75.4182 24.2547 76.4149 25.052C77.4115 25.834 77.9099 26.892 77.9099 28.226V36H74.5059V34.505H74.2759C73.9079 35.0877 73.3942 35.5323 72.7349 35.839C72.0909 36.1457 71.3472 36.299 70.5039 36.299ZM71.6309 34.068C72.4742 34.068 73.1642 33.8227 73.7009 33.332C74.2375 32.8413 74.5059 32.228 74.5059 31.492V30.664L72.0909 30.963C71.2935 31.055 70.7032 31.2543 70.3199 31.561C69.9519 31.8523 69.7679 32.2127 69.7679 32.642C69.7679 33.0867 69.9289 33.4393 70.2509 33.7C70.5882 33.9453 71.0482 34.068 71.6309 34.068ZM80.331 36V24.224H83.712V25.972H83.942C84.2793 25.328 84.747 24.8143 85.345 24.431C85.943 24.0477 86.61 23.856 87.346 23.856C88.1126 23.856 88.8256 24.063 89.485 24.477C90.1596 24.8757 90.6503 25.4123 90.957 26.087H91.187C91.555 25.397 92.0533 24.8603 92.682 24.477C93.326 24.0783 94.062 23.879 94.89 23.879C95.7486 23.879 96.5153 24.086 97.19 24.5C97.8646 24.8987 98.3936 25.466 98.777 26.202C99.1603 26.938 99.352 27.7737 99.352 28.709V36H95.948V29.284C95.948 28.5633 95.741 27.973 95.327 27.513C94.913 27.0377 94.384 26.7923 93.74 26.777C93.0806 26.777 92.5363 27.0147 92.107 27.49C91.693 27.95 91.486 28.548 91.486 29.284V36H88.059V29.284C88.059 28.5173 87.8673 27.9117 87.484 27.467C87.1006 27.007 86.587 26.777 85.943 26.777C85.2683 26.777 84.7316 27.007 84.333 27.467C83.9343 27.927 83.735 28.5327 83.735 29.284V36H80.331ZM103.599 22.591C103.001 22.591 102.51 22.407 102.127 22.039C101.743 21.6557 101.552 21.1727 101.552 20.59C101.552 20.0073 101.743 19.532 102.127 19.164C102.51 18.7807 103.001 18.589 103.599 18.589C104.197 18.589 104.687 18.7807 105.071 19.164C105.454 19.532 105.646 20.0073 105.646 20.59C105.646 21.1727 105.454 21.6557 105.071 22.039C104.687 22.407 104.197 22.591 103.599 22.591ZM105.301 36H101.897V24.224H105.301V36ZM111.407 36H108.003V18.934H111.407V36ZM116.553 41.313C116.17 41.313 115.748 41.2747 115.288 41.198C114.828 41.1213 114.437 41.0217 114.115 40.899L114.138 38.162C114.384 38.2693 114.667 38.3537 114.989 38.415C115.327 38.4763 115.626 38.507 115.886 38.507C116.546 38.507 117.052 38.3 117.404 37.886C117.757 37.472 118.087 36.8817 118.393 36.115L112.85 24.224H116.507L119.658 31.745H119.888L122.441 24.224H125.983L121.429 36.414C120.816 38.0547 120.141 39.2813 119.405 40.094C118.685 40.9067 117.734 41.313 116.553 41.313Z" className="fill-foreground" />
  </svg>
);

const defaultColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Family Constitution", href: "/templates/constitution" },
      { label: "Family Council", href: "#" },
      { label: "Decision Making", href: "#" },
    ],
  },
  {
    title: "Education",
    links: [
      { label: "Learning Paths", href: "#" },
      { label: "Mentorship", href: "#" },
      { label: "Resources", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Data Processing", href: "#" },
    ],
  },
];

export function AppFooter({
  logo = defaultLogo,
  description = "Reluna Family platform for managing family wealth, governance, and knowledge transfer across generations.",
  columns = defaultColumns,
  newsletter = {
    title: "Stay Updated",
    description: "Get insights and updates on family governance best practices delivered every two weeks",
  },
  copyright = `© ${new Date().getFullYear()} Reluna Family. All rights reserved.`,
  version = "v0.1.3",
  showThemeToggle = true,
  className,
}: AppFooterProps) {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container max-w-[1048px]">
        {newsletter && (
          <section className="py-8">
            <Card className="bg-card">
              <div className="flex flex-col md:flex-row gap-4 items-start p-5">
                <div className="flex-1 space-y-3">
                  <div>
                    <h2 className="text-base font-medium">{newsletter.title}</h2>
                    <p className="text-sm text-muted-foreground">{newsletter.description}</p>
                  </div>
                  <form className="flex flex-col sm:flex-row gap-2 max-w-sm">
                    <Input type="email" placeholder="Your email address" className="flex-1" />
                    <div className="bg-primary/5 flex gap-1 h-10 items-center px-3 rounded-[10px] border border-primary/10">
                      <Button variant="ghost" size="sm" className="h-auto p-0 text-primary hover:bg-transparent">
                        Subscribe
                      </Button>
                      <Send className="w-4 h-4 text-primary" />
                    </div>
                  </form>
                </div>
                <div className="hidden md:flex items-center justify-center bg-muted rounded-[10px] w-[200px] h-[80px]">
                  <Mail className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
            </Card>
          </section>
        )}

        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 py-8">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center mb-4">
              {logo}
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
          </div>
          {columns.map((column) => (
            <nav key={column.title} className="col-span-1 md:col-span-2">
              <h3 className="font-normal text-sm mb-3">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 gap-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <p className="text-xs text-muted-foreground">{copyright}</p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{version}</span>
              <Badge variant="secondary" className="text-xs">Beta</Badge>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
              Sitemap
            </Link>
            {showThemeToggle && (
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
