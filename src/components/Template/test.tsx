import { fireEvent, render, screen } from '@testing-library/react'

import Template from '.'

describe('<MovieBox />', () => {
  it('should render the component', () => {
    const { container } = render(<Template><div>Oi</div></Template>)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
