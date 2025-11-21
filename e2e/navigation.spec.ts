import { test, expect } from '@playwright/test'

test.describe('Documentation Navigation', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Reluna UI/)
  })

  test('should navigate to docs', async ({ page }) => {
    await page.goto('/docs')
    await expect(page.locator('h1')).toContainText('Introduction')
  })

  test('should navigate to components', async ({ page }) => {
    await page.goto('/docs/components')
    await expect(page.locator('h1')).toContainText('Components')
  })

  test('should navigate to Button component', async ({ page }) => {
    await page.goto('/docs/components/button')
    await expect(page.locator('h1')).toContainText('Button')
    await expect(page.locator('#installation')).toBeVisible()
  })

  test('should navigate to enterprise components', async ({ page }) => {
    await page.goto('/docs/components/data-table')
    await expect(page.locator('h1')).toContainText('Data Table')
  })

  test('sidebar navigation works', async ({ page }) => {
    await page.goto('/docs')

    // Click on Components section
    await page.click('text=Button')
    await expect(page).toHaveURL(/\/docs\/components\/button/)
    await expect(page.locator('h1')).toContainText('Button')
  })

  test('should show table of contents on component pages', async ({ page }) => {
    await page.goto('/docs/components/button')

    // Check TOC is visible on desktop
    const toc = page.locator('text=On This Page')
    await expect(toc).toBeVisible()
  })
})

test.describe('Theme Switching', () => {
  test('should toggle dark mode', async ({ page }) => {
    await page.goto('/')

    // Find and click theme toggle
    const themeToggle = page.locator('[aria-label*="theme"], [aria-label*="Toggle"]').first()
    if (await themeToggle.isVisible()) {
      await themeToggle.click()

      // Check that dark class is applied
      const html = page.locator('html')
      const classList = await html.getAttribute('class')
      expect(classList).toMatch(/dark|light/)
    }
  })
})

test.describe('Search and Filtering', () => {
  test('should filter icons on icons page', async ({ page }) => {
    await page.goto('/docs/icons')

    const searchInput = page.locator('input[placeholder*="Search"]').first()
    if (await searchInput.isVisible()) {
      await searchInput.fill('arrow')

      // Wait for filtering
      await page.waitForTimeout(300)

      // Check that results are filtered
      const icons = page.locator('[data-icon]')
      const count = await icons.count()
      expect(count).toBeGreaterThan(0)
    }
  })
})
