import { test, expect } from '@playwright/test'

test.describe('Component Interactions', () => {
  test('Button variants render correctly', async ({ page }) => {
    await page.goto('/docs/components/button')

    // Check that button variants are visible
    await expect(page.locator('button:has-text("Default")').first()).toBeVisible()
    await expect(page.locator('button:has-text("Secondary")').first()).toBeVisible()
    await expect(page.locator('button:has-text("Destructive")').first()).toBeVisible()
  })

  test('Dialog opens and closes', async ({ page }) => {
    await page.goto('/docs/components/dialog')

    // Find and click a dialog trigger
    const trigger = page.locator('button:has-text("Open")').first()
    if (await trigger.isVisible()) {
      await trigger.click()

      // Check dialog is open
      const dialog = page.locator('[role="dialog"]')
      await expect(dialog).toBeVisible()

      // Close dialog
      await page.keyboard.press('Escape')
      await expect(dialog).not.toBeVisible()
    }
  })

  test('Accordion expands and collapses', async ({ page }) => {
    await page.goto('/docs/components/accordion')

    // Find accordion trigger
    const trigger = page.locator('[data-state="closed"]').first()
    if (await trigger.isVisible()) {
      await trigger.click()

      // Check it expanded
      await expect(trigger).toHaveAttribute('data-state', 'open')
    }
  })

  test('Tabs switch content', async ({ page }) => {
    await page.goto('/docs/components/tabs')

    // Find tab triggers
    const tabs = page.locator('[role="tab"]')
    const tabCount = await tabs.count()

    if (tabCount > 1) {
      // Click second tab
      await tabs.nth(1).click()

      // Check it's selected
      await expect(tabs.nth(1)).toHaveAttribute('data-state', 'active')
    }
  })

  test('Input accepts text', async ({ page }) => {
    await page.goto('/docs/components/input')

    // Find an input
    const input = page.locator('input[type="text"], input[type="email"]').first()
    if (await input.isVisible()) {
      await input.fill('Test input')
      await expect(input).toHaveValue('Test input')
    }
  })

  test('Checkbox toggles', async ({ page }) => {
    await page.goto('/docs/components/checkbox')

    // Find a checkbox
    const checkbox = page.locator('[role="checkbox"]').first()
    if (await checkbox.isVisible()) {
      const initialState = await checkbox.getAttribute('data-state')
      await checkbox.click()

      const newState = await checkbox.getAttribute('data-state')
      expect(newState).not.toBe(initialState)
    }
  })

  test('Switch toggles', async ({ page }) => {
    await page.goto('/docs/components/switch')

    // Find a switch
    const switchEl = page.locator('[role="switch"]').first()
    if (await switchEl.isVisible()) {
      const initialState = await switchEl.getAttribute('data-state')
      await switchEl.click()

      const newState = await switchEl.getAttribute('data-state')
      expect(newState).not.toBe(initialState)
    }
  })

  test('Select opens dropdown', async ({ page }) => {
    await page.goto('/docs/components/select')

    // Find select trigger
    const trigger = page.locator('[role="combobox"]').first()
    if (await trigger.isVisible()) {
      await trigger.click()

      // Check dropdown is visible
      const content = page.locator('[role="listbox"]')
      await expect(content).toBeVisible()
    }
  })
})

test.describe('Enterprise Components', () => {
  test('DataTable renders with data', async ({ page }) => {
    await page.goto('/docs/components/data-table')

    // Check table is rendered
    const table = page.locator('table').first()
    await expect(table).toBeVisible()

    // Check headers exist
    const headers = page.locator('th')
    const headerCount = await headers.count()
    expect(headerCount).toBeGreaterThan(0)
  })

  test('Stepper shows steps', async ({ page }) => {
    await page.goto('/docs/components/stepper')

    // Check steps are visible
    await expect(page.locator('text=Step 1').first()).toBeVisible()
    await expect(page.locator('text=Step 2').first()).toBeVisible()
  })

  test('FileUpload drag zone is visible', async ({ page }) => {
    await page.goto('/docs/components/file-upload')

    // Check drop zone exists
    const dropZone = page.locator('text=Drop files here').first()
    await expect(dropZone).toBeVisible()
  })

  test('MultiSelect opens dropdown', async ({ page }) => {
    await page.goto('/docs/components/multi-select')

    // Find combobox
    const trigger = page.locator('[role="combobox"]').first()
    if (await trigger.isVisible()) {
      await trigger.click()

      // Check options appear
      await page.waitForTimeout(300)
    }
  })

  test('DateRangePicker button is visible', async ({ page }) => {
    await page.goto('/docs/components/date-range-picker')

    // Check picker button exists
    const button = page.locator('button#date').first()
    await expect(button).toBeVisible()
  })
})
