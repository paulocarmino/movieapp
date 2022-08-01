import { render, screen } from '@testing-library/react'

import EmptyState from '.'

describe('<EmptyState />', () => {
  it('should render the heading', () => {
    const { container } = render(<EmptyState />)

    expect(screen.getByRole('heading', { name: /EmptyState/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
