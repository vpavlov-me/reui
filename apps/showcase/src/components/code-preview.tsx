"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "@reluna-ui/ui";
import { Check, Copy } from "lucide-react";

interface CodePreviewProps {
  children: React.ReactNode;
  code: string;
  className?: string;
  highlightedCode?: string;
}

export function CodePreview({ children, code, className, highlightedCode }: CodePreviewProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg border", className)}>
      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between border-b px-4">
          <TabsList className="h-10 bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Code
            </TabsTrigger>
          </TabsList>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-4 w-4 text-primary" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            <span className="sr-only">Copy code</span>
          </Button>
        </div>
        <TabsContent value="preview" className="p-6 m-0">
          <div className="flex flex-wrap gap-3 items-center">
            {children}
          </div>
        </TabsContent>
        <TabsContent value="code" className="m-0">
          {highlightedCode ? (
            <div
              className="overflow-x-auto text-sm [&_pre]:p-4 [&_pre]:m-0 [&_pre]:bg-muted/50 [&_code]:bg-transparent"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          ) : (
            <pre className="overflow-x-auto p-4 text-sm bg-muted/50">
              <code>{code}</code>
            </pre>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface UsageGuidelinesProps {
  dos: string[];
  donts: string[];
}

export function UsageGuidelines({ dos, donts }: UsageGuidelinesProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-3">
        <h4 className="font-medium text-sm flex items-center gap-2 text-green-600 dark:text-green-400">
          <Check className="h-4 w-4" />
          Do
        </h4>
        <ul className="space-y-2">
          {dos.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-green-600 dark:text-green-400 mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-3">
        <h4 className="font-medium text-sm flex items-center gap-2 text-red-600 dark:text-red-400">
          <span className="font-bold">✕</span>
          Don&apos;t
        </h4>
        <ul className="space-y-2">
          {donts.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-red-600 dark:text-red-400 mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
