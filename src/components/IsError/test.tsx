import { fireEvent, render, screen } from '@testing-library/react'

import IsError from '.'

describe('<IsError />', () => {
  it('should render the component', () => {
    const { container } = render(<IsError />)

    expect(screen.getByRole('heading', { name: /Error while searching!/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should trigger action when click in button', () => {
    const actionMock = jest.fn();
    const { getByTestId } = render(<IsError action={actionMock} />)

    fireEvent.click(getByTestId('action-button'))
    expect(actionMock).toBeCalled()
  })
})
