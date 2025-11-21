import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from '../switch'

describe('Switch', () => {
  it('renders unchecked by default', () => {
    render(<Switch />)
    expect(screen.getByRole('switch')).not.toBeChecked()
  })

  it('renders checked when defaultChecked is true', () => {
    render(<Switch defaultChecked />)
    expect(screen.getByRole('switch')).toBeChecked()
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(<Switch onCheckedChange={handleChange} />)

    const switchElement = screen.getByRole('switch')
    await user.click(switchElement)

    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it('can be disabled', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(<Switch disabled onCheckedChange={handleChange} />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toBeDisabled()

    await user.click(switchElement)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('supports controlled checked state', () => {
    const { rerender } = render(<Switch checked={false} />)
    expect(screen.getByRole('switch')).not.toBeChecked()

    rerender(<Switch checked={true} />)
    expect(screen.getByRole('switch')).toBeChecked()
  })

  it('applies custom className', () => {
    render(<Switch className="custom-switch" />)
    expect(screen.getByRole('switch')).toHaveClass('custom-switch')
  })
})
