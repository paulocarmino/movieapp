import { render, screen } from '@testing-library/react'

import MovieBox from '.'

describe('<MovieBox />', () => {
  it('deve renderizar o component', () => {
    const { container } = render(
      <MovieBox
        cover="https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg"
        title="Capitã Marvel"
        year={2019}
        isFavorited={false}
      />
    )

    expect(screen.getByRole('heading', { name: /Capitã Marvel/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('deve mostrar o icone preenchida quando o filme for favorito', () => {
    render(
      <MovieBox
        cover="https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg"
        title="Capitã Marvel"
        year={2019}
        isFavorited={true}
      />
    )

    expect(screen.getByTestId('favorited-icon')).toBeInTheDocument()
  })
})
