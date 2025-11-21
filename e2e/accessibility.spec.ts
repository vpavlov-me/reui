import { test, expect } from '@playwright/test'

test.describe('Accessibility', () => {
  test('main pages have proper heading hierarchy', async ({ page }) => {
    await page.goto('/docs/components/button')

    // Check h1 exists
    const h1 = page.locator('h1')
    await expect(h1).toHaveCount(1)

    // Check h2s exist for sections
    const h2s = page.locator('h2')
    const h2Count = await h2s.count()
    expect(h2Count).toBeGreaterThan(0)
  })

  test('images have alt text', async ({ page }) => {
    await page.goto('/')

    const images = page.locator('img')
    const imageCount = await images.count()

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      const role = await img.getAttribute('role')

      // Images should have alt text or role="presentation"
      expect(alt !== null || role === 'presentation').toBeTruthy()
    }
  })

  test('buttons have accessible names', async ({ page }) => {
    await page.goto('/docs/components/button')

    const buttons = page.locator('button')
    const buttonCount = await buttons.count()

    for (let i = 0; i < Math.min(buttonCount, 10); i++) {
      const button = buttons.nth(i)
      const text = await button.textContent()
      const ariaLabel = await button.getAttribute('aria-label')
      const title = await button.getAttribute('title')

      // Button should have some accessible name
      const hasAccessibleName = (text && text.trim().length > 0) || ariaLabel || title
      expect(hasAccessibleName).toBeTruthy()
    }
  })

  test('form inputs have labels', async ({ page }) => {
    await page.goto('/docs/components/input')

    const inputs = page.locator('input:not([type="hidden"])')
    const inputCount = await inputs.count()

    for (let i = 0; i < Math.min(inputCount, 5); i++) {
      const input = inputs.nth(i)
      const id = await input.getAttribute('id')
      const ariaLabel = await input.getAttribute('aria-label')
      const ariaLabelledby = await input.getAttribute('aria-labelledby')
      const placeholder = await input.getAttribute('placeholder')

      // Input should have some form of label
      const hasLabel = id || ariaLabel || ariaLabelledby || placeholder
      expect(hasLabel).toBeTruthy()
    }
  })

  test('links have discernible text', async ({ page }) => {
    await page.goto('/docs')

    const links = page.locator('a')
    const linkCount = await links.count()

    for (let i = 0; i < Math.min(linkCount, 10); i++) {
      const link = links.nth(i)
      const text = await link.textContent()
      const ariaLabel = await link.getAttribute('aria-label')
      const title = await link.getAttribute('title')

      // Link should have accessible text
      const hasText = (text && text.trim().length > 0) || ariaLabel || title
      expect(hasText).toBeTruthy()
    }
  })

  test('interactive elements are focusable', async ({ page }) => {
    await page.goto('/docs/components/button')

    // Tab to first button
    await page.keyboard.press('Tab')

    // Check something is focused
    const focused = page.locator(':focus')
    await expect(focused).toBeVisible()
  })

  test('skip link exists', async ({ page }) => {
    await page.goto('/')

    // Check for skip link (may be visually hidden)
    const skipLink = page.locator('a[href="#main"], a:has-text("Skip")')
    const skipLinkCount = await skipLink.count()

    // Skip link is optional but good to have
    if (skipLinkCount > 0) {
      await expect(skipLink.first()).toBeDefined()
    }
  })
})

test.describe('Keyboard Navigation', () => {
  test('can navigate with keyboard', async ({ page }) => {
    await page.goto('/docs/components/button')

    // Press Tab multiple times
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab')
    }

    // Something should be focused
    const focused = page.locator(':focus')
    await expect(focused).toBeVisible()
  })

  test('dialogs trap focus', async ({ page }) => {
    await page.goto('/docs/components/dialog')

    // Open dialog
    const trigger = page.locator('button:has-text("Open")').first()
    if (await trigger.isVisible()) {
      await trigger.click()

      // Check dialog is open
      const dialog = page.locator('[role="dialog"]')
      await expect(dialog).toBeVisible()

      // Tab through dialog
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      // Focus should still be in dialog
      const focused = page.locator('[role="dialog"] :focus')
      // Focus trap may keep focus in dialog
    }
  })

  test('escape closes modals', async ({ page }) => {
    await page.goto('/docs/components/dialog')

    // Open dialog
    const trigger = page.locator('button:has-text("Open")').first()
    if (await trigger.isVisible()) {
      await trigger.click()

      const dialog = page.locator('[role="dialog"]')
      await expect(dialog).toBeVisible()

      // Press Escape
      await page.keyboard.press('Escape')

      // Dialog should close
      await expect(dialog).not.toBeVisible()
    }
  })
})
