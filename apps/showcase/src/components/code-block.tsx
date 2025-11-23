"use client";

import * as React from "react";
import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";
import { Button } from "@reluna-ui/ui";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = "tsx",
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [html, setHtml] = React.useState<string>("");
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    async function highlight() {
      const highlighted = await codeToHtml(code.trim(), {
        lang: language,
        theme: "github-dark",
      });
      setHtml(highlighted);
    }
    highlight();
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative group", className)}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        <span className="sr-only">Copy code</span>
      </Button>
      {html ? (
        <div
          className={cn(
            "rounded-[10px] overflow-hidden text-sm [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:m-0",
            showLineNumbers && "[&_.line]:before:content-[counter(line)] [&_.line]:before:mr-4 [&_.line]:before:text-muted-foreground [&_.line]:counter-increment-[line] [&_pre]:counter-reset-[line]"
          )}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="bg-zinc-950 text-zinc-50 p-4 rounded-[10px] overflow-x-auto text-sm">
          <code>{code.trim()}</code>
        </pre>
      )}
    </div>
  );
}
