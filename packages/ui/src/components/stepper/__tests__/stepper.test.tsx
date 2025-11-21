import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Stepper } from '../stepper'

const mockSteps = [
  { id: '1', title: 'Step 1', description: 'First step' },
  { id: '2', title: 'Step 2', description: 'Second step' },
  { id: '3', title: 'Step 3', description: 'Third step' },
]

describe('Stepper', () => {
  it('renders all steps', () => {
    render(<Stepper steps={mockSteps} currentStep={0} />)

    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
    expect(screen.getByText('Step 3')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<Stepper steps={mockSteps} currentStep={0} />)

    expect(screen.getByText('First step')).toBeInTheDocument()
    expect(screen.getByText('Second step')).toBeInTheDocument()
    expect(screen.getByText('Third step')).toBeInTheDocument()
  })

  it('shows step numbers for incomplete steps', () => {
    render(<Stepper steps={mockSteps} currentStep={0} />)

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('marks completed steps with check icon', () => {
    render(<Stepper steps={mockSteps} currentStep={2} />)

    // Steps 1 and 2 should be completed (index 0 and 1)
    const checkIcons = document.querySelectorAll('[class*="lucide-check"]')
    expect(checkIcons.length).toBe(2)
  })

  it('handles step click when onStepClick is provided', async () => {
    const user = userEvent.setup()
    const onStepClick = vi.fn()

    render(<Stepper steps={mockSteps} currentStep={1} onStepClick={onStepClick} />)

    await user.click(screen.getByText('Step 1'))
    expect(onStepClick).toHaveBeenCalledWith(0)
  })

  it('renders in vertical orientation', () => {
    render(<Stepper steps={mockSteps} currentStep={0} orientation="vertical" />)

    const container = screen.getByText('Step 1').closest('.flex-col')
    expect(container).toBeInTheDocument()
  })

  it('shows optional label for optional steps', () => {
    const stepsWithOptional = [
      { id: '1', title: 'Step 1' },
      { id: '2', title: 'Step 2', optional: true },
      { id: '3', title: 'Step 3' },
    ]

    render(<Stepper steps={stepsWithOptional} currentStep={0} />)
    expect(screen.getByText('(Optional)')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <Stepper steps={mockSteps} currentStep={0} className="custom-stepper" />
    )
    expect(container.firstChild).toHaveClass('custom-stepper')
  })
})
