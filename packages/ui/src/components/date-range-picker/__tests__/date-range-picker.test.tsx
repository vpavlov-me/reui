import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DateRangePicker } from '../date-range-picker'

describe('DateRangePicker', () => {
  it('renders with default placeholder', () => {
    render(<DateRangePicker />)

    expect(screen.getByText('Pick a date range')).toBeInTheDocument()
  })

  it('renders with custom placeholder', () => {
    render(<DateRangePicker placeholder="Select dates" />)

    expect(screen.getByText('Select dates')).toBeInTheDocument()
  })

  it('has button with correct id', () => {
    render(<DateRangePicker />)

    expect(screen.getByRole('button')).toHaveAttribute('id', 'date')
  })

  it('displays selected date range', () => {
    const startDate = new Date(2024, 0, 15)
    const endDate = new Date(2024, 0, 20)

    render(
      <DateRangePicker
        value={{ from: startDate, to: endDate }}
      />
    )

    expect(screen.getByText(/Jan 15, 2024/)).toBeInTheDocument()
    expect(screen.getByText(/Jan 20, 2024/)).toBeInTheDocument()
  })

  it('displays single date when only from is selected', () => {
    const startDate = new Date(2024, 0, 15)

    render(
      <DateRangePicker
        value={{ from: startDate }}
      />
    )

    expect(screen.getByText('Jan 15, 2024')).toBeInTheDocument()
  })

  it('can be disabled', () => {
    render(<DateRangePicker disabled />)

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('calls onValueChange when date is selected', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    render(<DateRangePicker onValueChange={onValueChange} />)

    await user.click(screen.getByRole('button'))

    // Click on a day in the calendar
    const dayButtons = screen.getAllByRole('gridcell')
    const selectableDay = dayButtons.find(
      (button) => !button.hasAttribute('disabled') && button.textContent === '15'
    )

    if (selectableDay) {
      await user.click(selectableDay)
      expect(onValueChange).toHaveBeenCalled()
    }
  })

  it('works as controlled component', () => {
    const startDate = new Date(2024, 0, 10)
    const endDate = new Date(2024, 0, 15)

    const { rerender } = render(
      <DateRangePicker
        value={{ from: startDate, to: endDate }}
      />
    )

    expect(screen.getByText(/Jan 10, 2024/)).toBeInTheDocument()
    expect(screen.getByText(/Jan 15, 2024/)).toBeInTheDocument()

    const newStart = new Date(2024, 1, 1)
    const newEnd = new Date(2024, 1, 14)

    rerender(
      <DateRangePicker
        value={{ from: newStart, to: newEnd }}
      />
    )

    expect(screen.getByText(/Feb 01, 2024/)).toBeInTheDocument()
    expect(screen.getByText(/Feb 14, 2024/)).toBeInTheDocument()
  })

  it('works as uncontrolled component with defaultValue', () => {
    const startDate = new Date(2024, 5, 1)
    const endDate = new Date(2024, 5, 30)

    render(
      <DateRangePicker
        defaultValue={{ from: startDate, to: endDate }}
      />
    )

    expect(screen.getByText(/Jun 01, 2024/)).toBeInTheDocument()
    expect(screen.getByText(/Jun 30, 2024/)).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <DateRangePicker className="custom-picker" />
    )

    expect(container.firstChild).toHaveClass('custom-picker')
  })

  it('shows calendar icon', () => {
    render(<DateRangePicker />)

    // The calendar icon should be present
    const button = screen.getByRole('button')
    expect(button.querySelector('svg')).toBeInTheDocument()
  })
})
