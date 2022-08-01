import { fireEvent, render, screen } from '@testing-library/react'

import BackButton from '.'

describe('<Badge />', () => {
  it('should render the component', () => {
    const { container } = render(<BackButton size={24} />)

    expect(screen.getByTestId('back-icon')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should trigger action when passed', () => {
    const actionMock = jest.fn();
    const { getByTestId } = render(<BackButton size={24} action={actionMock} />)

    fireEvent.click(getByTestId('back-icon'))
    expect(actionMock).toBeCalled()
  })
})
