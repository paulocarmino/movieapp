import { render, screen } from '@testing-library/react'

import MovieBox from '.'

describe('<MovieBox />', () => {
  it('deve renderizar o component', () => {
    const movie = {
      id: 438148,
      poster_path: 'https://image.tmdb.org/t/p/w200//wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
      title: 'Minions: The Rise of Gru',
      release_date: '2019-09-02',
      isFavorited: false
    }

    const { container } = render(
      <MovieBox
        movie={movie}
      />
    )

    expect(screen.getByRole('heading', { name: /Minions/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('deve mostrar o icone preenchida quando o filme for favorito', () => {
    const movie = {
      id: 438148,
      poster_path: 'https://image.tmdb.org/t/p/w200//wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
      title: 'Minions: The Rise of Gru',
      release_date: '2019-09-02',
      isFavorited: true
    }

    render(
      <MovieBox
        movie={movie}
      />
    )

    expect(screen.getByTestId('favorited-icon')).toBeInTheDocument()
  })
})
