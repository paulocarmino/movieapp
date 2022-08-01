import { render, screen } from '@testing-library/react'

import Badge from '.'

describe('<Badge />', () => {
  it('should render the component', () => {
    const { container } = render(<Badge>Example</Badge>)

    expect(screen.getByText('Example')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
