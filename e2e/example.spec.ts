import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('./')

  await expect(page).toHaveTitle(/Hugging Face – The AI community building the future./)
})
