import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Button } from '../button'
import { Input } from '../input'
import { Checkbox } from '../checkbox'
import { Switch } from '../switch'
import { Badge } from '../badge'
import { Alert, AlertTitle, AlertDescription } from '../alert'
import { Card, CardHeader, CardTitle, CardContent } from '../card'
import { Label } from '../label'

expect.extend(toHaveNoViolations)

describe('Accessibility', () => {
  it('Button has no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Input with Label has no accessibility violations', async () => {
    const { container } = render(
      <div>
        <Label htmlFor="test-input">Email</Label>
        <Input id="test-input" type="email" />
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Checkbox with Label has no accessibility violations', async () => {
    const { container } = render(
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms</Label>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Switch has no accessibility violations', async () => {
    const { container } = render(<Switch aria-label="Toggle" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Badge has no accessibility violations', async () => {
    const { container } = render(<Badge>Status</Badge>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Alert has no accessibility violations', async () => {
    const { container } = render(
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          This is an important message.
        </AlertDescription>
      </Alert>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Card has no accessibility violations', async () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>Card content</CardContent>
      </Card>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('Disabled Button has no accessibility violations', async () => {
    const { container } = render(<Button disabled>Disabled</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
