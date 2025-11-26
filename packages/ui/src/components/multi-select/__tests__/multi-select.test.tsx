import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MultiSelect } from '../multi-select'

const mockOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
]

describe('MultiSelect', () => {
  it('renders with placeholder', () => {
    render(<MultiSelect options={mockOptions} placeholder="Select frameworks" />)

    expect(screen.getByText('Select frameworks')).toBeInTheDocument()
  })

  it('renders with default placeholder', () => {
    render(<MultiSelect options={mockOptions} />)

    expect(screen.getByText('Select options...')).toBeInTheDocument()
  })

  it('has combobox role', () => {
    render(<MultiSelect options={mockOptions} />)

    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('has aria-expanded attribute', () => {
    render(<MultiSelect options={mockOptions} />)

    expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false')
  })

  it('displays selected options as badges', async () => {
    render(<MultiSelect options={mockOptions} defaultValue={['react', 'vue']} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Vue')).toBeInTheDocument()
  })

  it('removes selected option when clicking X on badge', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    render(
      <MultiSelect
        options={mockOptions}
        defaultValue={['react', 'vue']}
        onValueChange={onValueChange}
      />
    )

    const removeButtons = screen.getAllByRole('button', { name: /remove/i })
    await user.click(removeButtons[0])

    expect(onValueChange).toHaveBeenCalledWith(['vue'])
  })

  it('clears all selected options', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    render(
      <MultiSelect
        options={mockOptions}
        defaultValue={['react', 'vue']}
        onValueChange={onValueChange}
      />
    )

    const clearButton = screen.getByRole('button', { name: /clear all/i })
    await user.click(clearButton)

    expect(onValueChange).toHaveBeenCalledWith([])
  })

  it('respects maxSelected limit when set via defaultValue', () => {
    render(
      <MultiSelect
        options={mockOptions}
        maxSelected={2}
        defaultValue={['react', 'vue']}
      />
    )

    // Both should be displayed
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Vue')).toBeInTheDocument()
  })

  it('can be disabled', () => {
    render(<MultiSelect options={mockOptions} disabled />)

    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  it('renders with custom search placeholder', () => {
    render(<MultiSelect options={mockOptions} searchPlaceholder="Find frameworks..." />)

    // The component should render without errors
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('works as controlled component', async () => {
    const onValueChange = vi.fn()
    const { rerender } = render(
      <MultiSelect
        options={mockOptions}
        value={['react']}
        onValueChange={onValueChange}
      />
    )

    expect(screen.getByText('React')).toBeInTheDocument()

    rerender(
      <MultiSelect
        options={mockOptions}
        value={['react', 'vue']}
        onValueChange={onValueChange}
      />
    )

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Vue')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <MultiSelect
        options={mockOptions}
        className="custom-select"
      />
    )

    expect(screen.getByRole('combobox')).toHaveClass('custom-select')
  })
})
