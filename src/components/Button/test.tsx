import { render, screen } from '@testing-library/react'
import { AiOutlineHeart } from 'react-icons/ai'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    const { container } = render(<Button>Login</Button>)

    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('deve mostrar o icone quando passado como prop', () => {
    render(<Button icon={<AiOutlineHeart />}>Login</Button>)

    expect(screen.getByTestId('icon-button')).toBeInTheDocument()
  })
})
