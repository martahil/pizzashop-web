import { test, expect } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Business name').fill('Pizza Shop')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Email address').fill('johndoe@example.com')
  await page.getByLabel('Phone number').fill('123456789')

  await page.getByRole('button', { name: 'Finish sign-up' }).click()

  const toast = page.getByText(
    'Restaurant successfully registered!'
  )

  await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Business name').fill('Invalid Name')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Email address').fill('johndoe@example.com')
  await page.getByLabel('Phone number').fill('123456789')

  await page.getByRole('button', { name: 'Finish sign-up' }).click()

  const toast = page.getByText(
    'Error registering restaurant.'
  )

  await expect(toast).toBeVisible()
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Log in' }).click()

  expect(page.url()).toContain('/sign-in')
})


