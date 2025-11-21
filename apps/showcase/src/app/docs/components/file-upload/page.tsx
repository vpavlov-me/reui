"use client";

import * as React from "react";
import { FileUpload, type FileUploadFile } from "@reluna-ui/ui";
import { CodePreview, UsageGuidelines } from "@/components/code-preview";

export default function FileUploadPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_files, setFiles] = React.useState<FileUploadFile[]>([]);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">File Upload</h1>
        <p className="text-lg text-muted-foreground">
          A drag-and-drop file upload component with progress tracking, file validation, and preview support.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 id="installation" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Installation
        </h2>
        <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
          <code>{`import { FileUpload } from "@reluna-ui/ui";`}</code>
        </pre>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h2 id="guidelines" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Usage Guidelines
        </h2>
        <UsageGuidelines
          dos={[
            "Provide clear file type restrictions",
            "Show max file size before upload",
            "Display progress for large files",
            "Allow users to remove uploaded files",
            "Validate files before upload",
            "Support both drag-and-drop and click to upload",
          ]}
          donts={[
            "Don't accept unlimited file sizes",
            "Don't hide file type restrictions",
            "Don't auto-upload without user confirmation",
            "Don't remove files without confirmation",
            "Don't use for very large files without chunking",
            "Don't forget to handle upload errors",
          ]}
        />
      </section>

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 id="basic" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Basic Usage
        </h2>
        <p className="text-muted-foreground">
          Simple file upload with default settings.
        </p>
        <CodePreview
          code={`<FileUpload onFilesChange={(files) => console.log(files)} />`}
        >
          <FileUpload onFilesChange={setFiles} />
        </CodePreview>
      </section>

      {/* File Type Restrictions */}
      <section className="space-y-4">
        <h2 id="accept" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          File Type Restrictions
        </h2>
        <p className="text-muted-foreground">
          Restrict uploads to specific file types.
        </p>
        <CodePreview
          code={`<FileUpload
  accept=".pdf,.doc,.docx"
  onFilesChange={(files) => console.log(files)}
/>`}
        >
          <FileUpload accept=".pdf,.doc,.docx" onFilesChange={setFiles} />
        </CodePreview>
      </section>

      {/* Image Upload */}
      <section className="space-y-4">
        <h2 id="images" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Image Upload
        </h2>
        <p className="text-muted-foreground">
          Accept only image files with size restrictions.
        </p>
        <CodePreview
          code={`<FileUpload
  accept="image/*"
  maxSize={5 * 1024 * 1024} // 5MB
  onFilesChange={(files) => console.log(files)}
/>`}
        >
          <FileUpload
            accept="image/*"
            maxSize={5 * 1024 * 1024}
            onFilesChange={setFiles}
          />
        </CodePreview>
      </section>

      {/* Multiple Files */}
      <section className="space-y-4">
        <h2 id="multiple" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Multiple Files
        </h2>
        <p className="text-muted-foreground">
          Allow multiple file uploads with a maximum limit.
        </p>
        <CodePreview
          code={`<FileUpload
  multiple
  maxFiles={5}
  onFilesChange={(files) => console.log(files)}
/>`}
        >
          <FileUpload multiple maxFiles={5} onFilesChange={setFiles} />
        </CodePreview>
      </section>

      {/* Disabled State */}
      <section className="space-y-4">
        <h2 id="disabled" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          Disabled State
        </h2>
        <p className="text-muted-foreground">
          Disable the upload when not available.
        </p>
        <CodePreview
          code={`<FileUpload disabled />`}
        >
          <FileUpload disabled />
        </CodePreview>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 id="api" className="text-2xl font-semibold tracking-tight scroll-mt-20">
          API Reference
        </h2>
        <div className="rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Prop</th>
                <th className="p-3 text-left font-medium">Type</th>
                <th className="p-3 text-left font-medium">Default</th>
                <th className="p-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">onFilesChange</td>
                <td className="p-3 font-mono text-xs">(files: FileUploadFile[]) =&gt; void</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Callback when files are selected</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">accept</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Accepted file types</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">maxSize</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Maximum file size in bytes</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">multiple</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3">Allow multiple files</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">maxFiles</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 font-mono text-xs">-</td>
                <td className="p-3">Maximum number of files</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3">Disable the upload</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
