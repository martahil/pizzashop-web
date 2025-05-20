import { test, expect } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('textbox', { name: 'Email address' }).fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Access Dashboard' }).click()

  const toast = page.getByText(
    'An authentication link has been sent to your email address.'
  )

  await expect(toast).toBeVisible()
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('textbox', { name: 'Email address' }).fill('wrong@example.com')
  await page.getByRole('button', { name: 'Access Dashboard' }).click()

  const toast = page.getByText(
    'Invalid credentials.'
  )

  await expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New establishment' }).click()

  expect(page.url()).toContain('/sign-up')
})


