import { render, screen } from '@testing-library/react'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the heading', () => {
    const { container } = render(<Loading />)

    expect(screen.getByTestId('loading-icon')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
