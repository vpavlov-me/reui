import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../card'

describe('Card', () => {
  it('renders basic card', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('renders with all sections', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('applies custom className to Card', () => {
    const { container } = render(<Card className="custom-card">Test</Card>)
    expect(container.firstChild).toHaveClass('custom-card')
  })

  it('applies custom className to CardHeader', () => {
    render(
      <Card>
        <CardHeader className="custom-header">Header</CardHeader>
      </Card>
    )
    expect(screen.getByText('Header')).toHaveClass('custom-header')
  })

  it('applies custom className to CardContent', () => {
    render(
      <Card>
        <CardContent className="custom-content">Content</CardContent>
      </Card>
    )
    expect(screen.getByText('Content')).toHaveClass('custom-content')
  })

  it('applies custom className to CardFooter', () => {
    render(
      <Card>
        <CardFooter className="custom-footer">Footer</CardFooter>
      </Card>
    )
    expect(screen.getByText('Footer')).toHaveClass('custom-footer')
  })
})
