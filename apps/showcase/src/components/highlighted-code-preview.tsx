import { highlightCode } from "@/lib/highlight";
import { CodePreview } from "./code-preview";

interface HighlightedCodePreviewProps {
  children: React.ReactNode;
  code: string;
  className?: string;
  lang?: string;
}

export async function HighlightedCodePreview({
  children,
  code,
  className,
  lang = "tsx",
}: HighlightedCodePreviewProps) {
  const highlightedCode = await highlightCode(code, lang);

  return (
    <CodePreview code={code} className={className} highlightedCode={highlightedCode}>
      {children}
    </CodePreview>
  );
}
