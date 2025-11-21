import { test, expect } from '@playwright/test'

test.describe('Performance', () => {
  test('homepage loads within performance budget', async ({ page }) => {
    const startTime = Date.now()

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const loadTime = Date.now() - startTime

    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000)
  })

  test('docs page loads within performance budget', async ({ page }) => {
    const startTime = Date.now()

    await page.goto('/docs')
    await page.waitForLoadState('networkidle')

    const loadTime = Date.now() - startTime

    // Docs should load within 5 seconds
    expect(loadTime).toBeLessThan(5000)
  })

  test('component page loads within performance budget', async ({ page }) => {
    const startTime = Date.now()

    await page.goto('/docs/components/button')
    await page.waitForLoadState('networkidle')

    const loadTime = Date.now() - startTime

    // Component page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000)
  })

  test('LCP is within acceptable range', async ({ page }) => {
    await page.goto('/')

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')

    // Get LCP using Performance API
    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          resolve(lastEntry.startTime)
        }).observe({ type: 'largest-contentful-paint', buffered: true })

        // Fallback timeout
        setTimeout(() => resolve(0), 5000)
      })
    })

    // LCP should be under 2.5 seconds for good UX
    expect(lcp).toBeLessThan(2500)
  })

  test('no layout shifts after load', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Wait a bit for any late content
    await page.waitForTimeout(1000)

    // Get CLS
    const cls = await page.evaluate(() => {
      return new Promise((resolve) => {
        let clsValue = 0
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          }
          resolve(clsValue)
        }).observe({ type: 'layout-shift', buffered: true })

        // Fallback
        setTimeout(() => resolve(clsValue), 2000)
      })
    })

    // CLS should be under 0.1 for good UX
    expect(cls).toBeLessThan(0.1)
  })

  test('no excessive DOM nodes', async ({ page }) => {
    await page.goto('/docs/components/button')
    await page.waitForLoadState('networkidle')

    const nodeCount = await page.evaluate(() => {
      return document.querySelectorAll('*').length
    })

    // Should have reasonable DOM size
    expect(nodeCount).toBeLessThan(3000)
  })

  test('JavaScript bundle size check', async ({ page }) => {
    const responses: { url: string; size: number }[] = []

    page.on('response', async (response) => {
      const url = response.url()
      if (url.includes('.js') && !url.includes('node_modules')) {
        try {
          const buffer = await response.body()
          responses.push({ url, size: buffer.length })
        } catch {
          // Ignore errors for redirects, etc.
        }
      }
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const totalJsSize = responses.reduce((sum, r) => sum + r.size, 0)

    // Total JS should be under 1MB
    expect(totalJsSize).toBeLessThan(1024 * 1024)
  })

  test('images are optimized', async ({ page }) => {
    const imageResponses: { url: string; size: number }[] = []

    page.on('response', async (response) => {
      const url = response.url()
      if (url.match(/\.(png|jpg|jpeg|gif|webp|svg)$/i)) {
        try {
          const buffer = await response.body()
          imageResponses.push({ url, size: buffer.length })
        } catch {
          // Ignore errors
        }
      }
    })

    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Check each image is reasonably sized
    for (const img of imageResponses) {
      // Individual images should be under 500KB
      expect(img.size).toBeLessThan(500 * 1024)
    }
  })
})

test.describe('Interaction Performance', () => {
  test('button click is responsive', async ({ page }) => {
    await page.goto('/docs/components/button')
    await page.waitForLoadState('networkidle')

    const button = page.locator('button:has-text("Default")').first()
    await button.waitFor()

    const startTime = Date.now()
    await button.click()
    const clickTime = Date.now() - startTime

    // Click should respond within 100ms
    expect(clickTime).toBeLessThan(100)
  })

  test('navigation is responsive', async ({ page }) => {
    await page.goto('/docs')
    await page.waitForLoadState('networkidle')

    const link = page.locator('a:has-text("Button")').first()
    await link.waitFor()

    const startTime = Date.now()
    await link.click()
    await page.waitForURL(/button/)
    const navTime = Date.now() - startTime

    // Navigation should complete within 2 seconds
    expect(navTime).toBeLessThan(2000)
  })

  test('dialog opens quickly', async ({ page }) => {
    await page.goto('/docs/components/dialog')
    await page.waitForLoadState('networkidle')

    const trigger = page.locator('button:has-text("Open")').first()
    if (await trigger.isVisible()) {
      const startTime = Date.now()
      await trigger.click()

      const dialog = page.locator('[role="dialog"]')
      await dialog.waitFor()

      const openTime = Date.now() - startTime

      // Dialog should open within 300ms
      expect(openTime).toBeLessThan(300)
    }
  })
})
