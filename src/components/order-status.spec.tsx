/// <reference types='vitest/globals' />

import { render } from '@testing-library/react'
import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text when order status is pending', () => {
    /* Pending */
    const wrapper = render(<OrderStatus status='pending' />)

    //wrapper.debug()

    const statusText = wrapper.getByText('Pending')
    //const statusText = wrapper.getByText('Canceled') //error: (<OrderStatus status='pending' />)
    const badgeElement = wrapper.getByTestId('badge')

    //console.log(badgeElement.outerHTML)

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text when order status is canceled', () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status='canceled' />)

    const statusText = wrapper.getByText('Canceled')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text when order status is delivering', () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status='delivering' />)

    const statusText = wrapper.getByText('Out for delivery')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is processing', () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status='processing' />)

    const statusText = wrapper.getByText('Processing')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text when order status is delivered', () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status='delivered' />)

    const statusText = wrapper.getByText('Delivered')
    const badgeElement = wrapper.getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})

// test('1 + 1 equals 2', () => {
//   expect(1 + 1).toEqual(2)
// })