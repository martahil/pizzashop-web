import { test, expect } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  expect(page.getByRole('cell', { name: 'Customer 1', exact: true })).toBeVisible()

  expect(page.getByRole('cell', { name: 'Customer 10', exact: true })).toBeVisible()

  //await page.waitForTimeout(2000)
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Next page' }).click()

  expect(page.getByRole('cell', { name: 'Customer 11', exact: true })).toBeVisible()

  expect(page.getByRole('cell', { name: 'Customer 20', exact: true })).toBeVisible()

  await page.getByRole('button', { name: 'Last page' }).click()

  expect(page.getByRole('cell', { name: 'Customer 51', exact: true })).toBeVisible()

  expect(page.getByRole('cell', { name: 'Customer 60', exact: true })).toBeVisible()

  await page.getByRole('button', { name: 'Previous page' }).click()

  expect(page.getByRole('cell', { name: 'Customer 41', exact: true })).toBeVisible()

  expect(page.getByRole('cell', { name: 'Customer 50', exact: true })).toBeVisible()

  await page.getByRole('button', { name: 'First page' }).click()

  expect(page.getByRole('cell', { name: 'Customer 1', exact: true })).toBeVisible()

  expect(page.getByRole('cell', { name: 'Customer 10', exact: true })).toBeVisible()

  //await page.waitForTimeout(2000)
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Order Id').fill('order-11')
  await page.getByRole('button', { name: 'Filter results' }).click()

  expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Client name').fill('Customer 11')
  await page.getByRole('button', { name: 'Filter results' }).click()

  expect(page.getByRole('cell', { name: 'Customer 11' })).toBeVisible()
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()

  await page.getByLabel('Pending').click()

  await page.getByRole('button', { name: 'Filter results' }).click()

  await page.waitForTimeout(500) /*important for the expect(tableRows).toHaveLength(10) line to work correctly*/

  const tableRows = await page.getByRole('cell', { name: 'Pending' }).all()

  expect(tableRows).toHaveLength(10)
  //expect(tableRows).toHaveLength(2)

  await page.waitForTimeout(500)
})

