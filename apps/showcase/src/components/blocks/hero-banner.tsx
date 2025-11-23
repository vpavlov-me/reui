"use client";

import * as React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@reluna-ui/ui";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroBannerStat {
  icon?: React.ComponentType<{ className?: string }>;
  value: number | string;
  label: string;
}

export interface HeroBannerProps {
  greeting?: string;
  user: {
    name: string;
    avatar?: string;
    initials?: string;
  };
  stats?: HeroBannerStat[];
  backgroundImage?: string;
  className?: string;
}

const defaultStats: HeroBannerStat[] = [
  { icon: CalendarDays, value: 3, label: "Meetings" },
  { icon: CheckCircle2, value: 2, label: "Tasks" },
  { value: "3", label: "Pending Decisions" },
];

export function HeroBanner({
  greeting = "Welcome Back,",
  user,
  stats = defaultStats,
  backgroundImage,
  className,
}: HeroBannerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[10px] bg-gradient-to-r from-primary/90 to-primary",
        className
      )}
    >
      {/* Background decorative image */}
      {backgroundImage && (
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Default decorative element if no image */}
      {!backgroundImage && (
        <div className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden">
          <svg
            className="absolute -right-10 -top-10 h-[200%] w-auto text-white/10"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path d="M100 0C44.772 0 0 44.772 0 100s44.772 100 100 100 100-44.772 100-100S155.228 0 100 0zm0 180c-44.112 0-80-35.888-80-80s35.888-80 80-80 80 35.888 80 80-35.888 80-80 80z" />
            <path d="M100 40c-33.137 0-60 26.863-60 60s26.863 60 60 60 60-26.863 60-60-26.863-60-60-60zm0 100c-22.091 0-40-17.909-40-40s17.909-40 40-40 40 17.909 40 40-17.909 40-40 40z" />
          </svg>
        </div>
      )}

      <div className="relative px-6 py-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-white">
          <span className="text-lg">{greeting}</span>

          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6 border-2 border-white/50">
              {user.avatar && (
                <AvatarImage src={user.avatar} alt={user.name} />
              )}
              <AvatarFallback className="text-xs bg-white/20 text-white">
                {user.initials}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium">{user.name}</span>
          </div>

          <span className="hidden sm:inline">You Have</span>

          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-1.5">
                {stat.icon && <stat.icon className="h-4 w-4" />}
                {!stat.icon && index === stats.length - 1 && (
                  <span className="text-sm">✦</span>
                )}
                <span className="font-medium">
                  {stat.value} {stat.label}
                </span>
              </div>
              {index < stats.length - 1 && (
                <span className="hidden sm:inline text-white/70">,</span>
              )}
            </React.Fragment>
          ))}

          <span className="hidden sm:inline">today.</span>
        </div>
      </div>
    </div>
  );
}
