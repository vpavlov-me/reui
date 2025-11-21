import { test, expect } from '@playwright/test'

test.describe('Visual Regression', () => {
  test('homepage visual', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      threshold: 0.2,
    })
  })

  test('docs page visual', async ({ page }) => {
    await page.goto('/docs')
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveScreenshot('docs.png', {
      fullPage: true,
      threshold: 0.2,
    })
  })

  test('button component visual', async ({ page }) => {
    await page.goto('/docs/components/button')
    await page.waitForLoadState('networkidle')

    // Scroll to variants section
    await page.locator('#variants').scrollIntoViewIfNeeded()

    await expect(page).toHaveScreenshot('button-variants.png', {
      threshold: 0.2,
    })
  })

  test('card component visual', async ({ page }) => {
    await page.goto('/docs/components/card')
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveScreenshot('card.png', {
      threshold: 0.2,
    })
  })

  test('dark mode visual', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Toggle dark mode
    await page.evaluate(() => {
      document.documentElement.classList.add('dark')
    })

    await expect(page).toHaveScreenshot('homepage-dark.png', {
      fullPage: true,
      threshold: 0.2,
    })
  })

  test('mobile viewport visual', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      fullPage: true,
      threshold: 0.2,
    })
  })

  test('enterprise data-table visual', async ({ page }) => {
    await page.goto('/docs/components/data-table')
    await page.waitForLoadState('networkidle')

    // Wait for table to render
    await page.locator('table').first().waitFor()

    await expect(page).toHaveScreenshot('data-table.png', {
      threshold: 0.2,
    })
  })

  test('enterprise stepper visual', async ({ page }) => {
    await page.goto('/docs/components/stepper')
    await page.waitForLoadState('networkidle')

    await expect(page).toHaveScreenshot('stepper.png', {
      threshold: 0.2,
    })
  })
})
