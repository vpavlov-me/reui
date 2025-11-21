import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { FileUpload } from '../file-upload'

describe('FileUpload', () => {
  it('renders with default props', () => {
    render(<FileUpload />)
    expect(screen.getByText('Drop files here or click to upload')).toBeInTheDocument()
  })

  it('shows file type restrictions', () => {
    render(<FileUpload accept=".pdf,.doc" />)
    expect(screen.getByText(/Accepted: .pdf,.doc/)).toBeInTheDocument()
  })

  it('shows max file size', () => {
    render(<FileUpload maxSize={5 * 1024 * 1024} />)
    expect(screen.getByText(/Max size: 5 MB/)).toBeInTheDocument()
  })

  it('shows max files for multiple upload', () => {
    render(<FileUpload multiple maxFiles={5} />)
    expect(screen.getByText(/Max files: 5/)).toBeInTheDocument()
  })

  it('can be disabled', () => {
    render(<FileUpload disabled />)
    const input = document.querySelector('input[type="file"]') as HTMLInputElement
    expect(input).toBeDisabled()
  })

  it('handles drag over state', () => {
    const { container } = render(<FileUpload />)
    const dropZone = container.querySelector('[class*="border-dashed"]')

    if (dropZone) {
      fireEvent.dragOver(dropZone)
      expect(dropZone).toHaveClass('border-primary')
    }
  })

  it('handles drag leave state', () => {
    render(<FileUpload />)
    const dropZone = screen.getByText('Drop files here or click to upload').parentElement?.parentElement

    if (dropZone) {
      fireEvent.dragOver(dropZone)
      fireEvent.dragLeave(dropZone)
      expect(dropZone).not.toHaveClass('border-primary')
    }
  })

  it('calls onFilesChange when files are selected', () => {
    const onFilesChange = vi.fn()
    render(<FileUpload onFilesChange={onFilesChange} />)

    const input = document.querySelector('input[type="file"]') as HTMLInputElement
    const file = new File(['test'], 'test.txt', { type: 'text/plain' })

    Object.defineProperty(input, 'files', {
      value: [file],
    })

    fireEvent.change(input)
    expect(onFilesChange).toHaveBeenCalled()
  })

  it('applies custom className', () => {
    render(<FileUpload className="custom-upload" />)
    const container = screen.getByText('Drop files here or click to upload').closest('.custom-upload')
    expect(container).toBeInTheDocument()
  })
})
