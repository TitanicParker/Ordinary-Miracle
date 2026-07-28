const { test, expect } = require('@playwright/test');

test('mobile landing page renders compact contents and reading times', async ({ page }) => {
  await page.goto('/index.html', { waitUntil: 'networkidle' });

  await expect(page.locator('.cover h1')).toContainText('Completed Intelligibility');
  await expect(page.locator('.contents-part')).toHaveCount(8);
  await expect(page.locator('.contents-part[open]')).toHaveCount(1);
  await expect(page.locator('.contents-part').first()).toHaveAttribute('open', '');
  await expect(page.locator('.contents-reading-time')).toHaveCount(32);
  await expect(page.locator('.chapter-reading-time')).toHaveCount(32);

  const firstChapterTime = (await page.locator('.contents-reading-time').first().textContent()).trim();
  expect(firstChapterTime).toMatch(/^\d+ min$/);
  await expect(page.locator('.cover__actions a[href="#chapter-1"]')).toContainText(firstChapterTime);

  await page.locator('.contents-part').nth(1).locator('summary').click();
  await expect(page.locator('.contents-part').nth(1)).toHaveAttribute('open', '');

  await page.locator('.contents-part').nth(1).locator('a[href="#chapter-5"]').click();
  await expect(page).toHaveURL(/#chapter-5$/);
  await expect(page.locator('#chapter-5')).toBeInViewport();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);

  await page.screenshot({ path: 'test-results/mobile-landing.png', fullPage: true });
});
