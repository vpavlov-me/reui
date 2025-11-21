import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from '../checkbox'

describe('Checkbox', () => {
  it('renders unchecked by default', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('renders checked when defaultChecked is true', () => {
    render(<Checkbox defaultChecked />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(<Checkbox onCheckedChange={handleChange} />)

    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)

    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it('can be disabled', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(<Checkbox disabled onCheckedChange={handleChange} />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()

    await user.click(checkbox)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('supports controlled checked state', () => {
    const { rerender } = render(<Checkbox checked={false} />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()

    rerender(<Checkbox checked={true} />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('applies custom className', () => {
    render(<Checkbox className="custom-class" />)
    expect(screen.getByRole('checkbox')).toHaveClass('custom-class')
  })
})
