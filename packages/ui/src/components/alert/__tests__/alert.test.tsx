import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Alert, AlertTitle, AlertDescription } from '../alert'

describe('Alert', () => {
  it('renders with default variant', () => {
    render(
      <Alert>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description</AlertDescription>
      </Alert>
    )
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('renders destructive variant', () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong</AlertDescription>
      </Alert>
    )
    expect(screen.getByRole('alert')).toHaveClass('text-destructive')
  })

  it('renders with only title', () => {
    render(
      <Alert>
        <AlertTitle>Only Title</AlertTitle>
      </Alert>
    )
    expect(screen.getByText('Only Title')).toBeInTheDocument()
  })

  it('renders with only description', () => {
    render(
      <Alert>
        <AlertDescription>Only Description</AlertDescription>
      </Alert>
    )
    expect(screen.getByText('Only Description')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Alert className="custom-alert">
        <AlertTitle>Test</AlertTitle>
      </Alert>
    )
    expect(screen.getByRole('alert')).toHaveClass('custom-alert')
  })
})
