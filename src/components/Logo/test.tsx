import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('deve mostrar o nome do app', () => {
    const { container } = render(<Logo />)

    expect(screen.getByRole('heading', { name: /MovieApp/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('deve mostrar o nome do app com a cor correta', () => {
    render(<Logo />)

    expect(screen.getByRole('heading', { name: /MovieApp/i })).toHaveClass('text-white')
  })

  it('deve mostrar o icone da logo com a cor correta', () => {
    render(<Logo />)

    expect(screen.getByTestId('logo-icon')).toHaveClass('text-yellow-400')
  })
})
