/// <reference types='vitest/globals' />

import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Pagination } from './pagination'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })

  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={console.log}
      />
    )

    expect(wrapper.getByText('Page 1 of 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total of 200 item(s)')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Next page'
    })

    await user.click(nextPageButton)

    //expect(onPageChangeCallback).toHaveBeenCalled()
    expect(onPageChangeCallback).toHaveBeenCalledWith(1)

    // expect(true).toBe(false)
  })

  it('should be able to navigate to the previous page', async () => {
    const user = userEvent.setup()

    //console.log(onPageChangeCallback.mock.calls)

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Previous page'
    })

    await user.click(nextPageButton)

    console.log(onPageChangeCallback.mock.calls)

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })

  it('should be able to navigate to the first page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'First page'
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
  })

  it('should be able to navigate to the last page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Last page'
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(19)
  })
})
