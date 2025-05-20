import { test, expect } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()

  expect(page.getByText('-5%compared to yesterday')).toBeVisible()

  //await page.waitForTimeout(2000)
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200', { exact: true })).toBeVisible()

  expect(page.getByText('+7%compared to last month')).toBeVisible()

  //await page.waitForTimeout(2000)
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('5', { exact: true })).toBeVisible()

  expect(page.getByText('-5%compared to last month')).toBeVisible()

  //await page.waitForTimeout(2000)
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('$200.00')).toBeVisible()

  expect(page.getByText('+10%compared to last month')).toBeVisible()

  //await page.waitForTimeout(2000)
})