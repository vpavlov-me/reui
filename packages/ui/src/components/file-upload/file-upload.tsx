"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { Upload, X, File, Image, FileText, FileArchive, FileAudio, FileVideo } from "lucide-react"
import { Button } from "../button"
import { Progress } from "../progress"

export interface FileUploadFile {
  id: string
  file: File
  progress: number
  status: "pending" | "uploading" | "success" | "error"
  error?: string
}

export interface FileUploadProps {
  accept?: string
  multiple?: boolean
  maxSize?: number // in bytes
  maxFiles?: number
  disabled?: boolean
  className?: string
  onFilesChange?: (files: FileUploadFile[]) => void
  onUpload?: (files: File[]) => Promise<void>
  children?: React.ReactNode
  "aria-label"?: string
}

function getFileIcon(file: File) {
  const type = file.type
  if (type.startsWith("image/")) return <Image className="h-4 w-4" />
  if (type.startsWith("video/")) return <FileVideo className="h-4 w-4" />
  if (type.startsWith("audio/")) return <FileAudio className="h-4 w-4" />
  if (type.includes("pdf") || type.includes("document")) return <FileText className="h-4 w-4" />
  if (type.includes("zip") || type.includes("archive") || type.includes("compressed")) return <FileArchive className="h-4 w-4" />
  return <File className="h-4 w-4" />
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      accept,
      multiple = false,
      maxSize = 10 * 1024 * 1024, // 10MB default
      maxFiles = 10,
      disabled = false,
      className,
      onFilesChange,
      onUpload,
      children,
    },
    ref
  ) => {
    const [files, setFiles] = React.useState<FileUploadFile[]>([])
    const [isDragging, setIsDragging] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleFiles = React.useCallback(
      (newFiles: FileList | null) => {
        if (!newFiles || disabled) return

        const fileArray = Array.from(newFiles)
        const validFiles: FileUploadFile[] = []

        for (const file of fileArray) {
          // Check max files
          if (files.length + validFiles.length >= maxFiles) {
            break
          }

          // Check file size
          if (file.size > maxSize) {
            validFiles.push({
              id: generateId(),
              file,
              progress: 0,
              status: "error",
              error: `File size exceeds ${formatFileSize(maxSize)}`,
            })
            continue
          }

          validFiles.push({
            id: generateId(),
            file,
            progress: 0,
            status: "pending",
          })
        }

        const updatedFiles = multiple ? [...files, ...validFiles] : validFiles.slice(0, 1)
        setFiles(updatedFiles)
        onFilesChange?.(updatedFiles)

        // Auto upload if handler provided
        if (onUpload) {
          const filesToUpload = validFiles
            .filter((f) => f.status === "pending")
            .map((f) => f.file)
          if (filesToUpload.length > 0) {
            handleUpload(filesToUpload, updatedFiles)
          }
        }
      },
      [files, maxFiles, maxSize, multiple, disabled, onFilesChange, onUpload]
    )

    const handleUpload = async (filesToUpload: File[], currentFiles: FileUploadFile[]) => {
      if (!onUpload) return

      // Update status to uploading
      const uploadingFiles = currentFiles.map((f) =>
        filesToUpload.some((uf) => uf === f.file)
          ? { ...f, status: "uploading" as const, progress: 0 }
          : f
      )
      setFiles(uploadingFiles)

      try {
        // Simulate progress
        const progressInterval = setInterval(() => {
          setFiles((prev) =>
            prev.map((f) =>
              f.status === "uploading" && f.progress < 90
                ? { ...f, progress: f.progress + 10 }
                : f
            )
          )
        }, 200)

        await onUpload(filesToUpload)

        clearInterval(progressInterval)

        // Update status to success
        setFiles((prev) =>
          prev.map((f) =>
            filesToUpload.some((uf) => uf === f.file)
              ? { ...f, status: "success" as const, progress: 100 }
              : f
          )
        )
      } catch (error) {
        // Update status to error
        setFiles((prev) =>
          prev.map((f) =>
            filesToUpload.some((uf) => uf === f.file)
              ? {
                  ...f,
                  status: "error" as const,
                  error: error instanceof Error ? error.message : "Upload failed",
                }
              : f
          )
        )
      }
    }

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      if (!disabled) {
        setIsDragging(true)
      }
    }

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      handleFiles(e.dataTransfer.files)
    }

    const handleClick = () => {
      if (!disabled) {
        inputRef.current?.click()
      }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files)
      // Reset input value to allow selecting same file again
      e.target.value = ""
    }

    const removeFile = (id: string) => {
      const updatedFiles = files.filter((f) => f.id !== id)
      setFiles(updatedFiles)
      onFilesChange?.(updatedFiles)
    }

    return (
      <div ref={ref} className={cn("space-y-4", className)}>
        {/* Drop zone */}
        <div
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors cursor-pointer",
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={handleInputChange}
            className="sr-only"
          />

          {children || (
            <>
              <Upload className="h-10 w-10 text-muted-foreground mb-4" />
              <p className="text-sm font-medium">
                Drop files here or click to upload
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {accept ? `Accepted: ${accept}` : "All file types accepted"}
              </p>
              <p className="text-xs text-muted-foreground">
                Max size: {formatFileSize(maxSize)}
                {multiple && ` • Max files: ${maxFiles}`}
              </p>
            </>
          )}
        </div>

        {/* File list */}
        {files.length > 0 && (
          <div className="space-y-2" role="list" aria-label="Uploaded files">
            {files.map((fileItem) => (
              <div
                key={fileItem.id}
                className={cn(
                  "flex items-center gap-3 rounded-lg border p-3",
                  fileItem.status === "error" && "border-destructive bg-destructive/5"
                )}
              >
                <div className="flex-shrink-0 text-muted-foreground">
                  {getFileIcon(fileItem.file)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {fileItem.file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(fileItem.file.size)}
                  </p>
                  {fileItem.status === "uploading" && (
                    <div aria-live="polite" aria-atomic="true">
                      <Progress value={fileItem.progress} className="h-1 mt-2" />
                      <span className="sr-only">Upload progress: {fileItem.progress}%</span>
                    </div>
                  )}
                  {fileItem.status === "error" && fileItem.error && (
                    <p className="text-xs text-destructive mt-1">{fileItem.error}</p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 flex-shrink-0"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeFile(fileItem.id)
                  }}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove file</span>
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)
FileUpload.displayName = "FileUpload"

export { FileUpload, formatFileSize }
