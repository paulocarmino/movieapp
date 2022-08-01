import { fireEvent, render, screen } from '@testing-library/react'

import MovieBox from '.'

describe('<MovieBox />', () => {
  it('should render the component', () => {
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

  it('should show the filled icon when the movie is favorite', () => {
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

  it('should trigger action when click in favorite button', () => {
    const actionMock = jest.fn();
    const movie = {
      id: 438148,
      poster_path: 'https://image.tmdb.org/t/p/w200//wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
      title: 'Minions: The Rise of Gru',
      release_date: '2019-09-02',
      isFavorited: false
    }

    const { getByTestId } = render(
      <MovieBox
        movie={movie}
        handleFavoriteAction={actionMock}
      />
    )

    fireEvent.click(getByTestId('forFavorite-icon'))
    expect(actionMock).toBeCalled()
  })

  it('should trigger action when click in unfavorite button', () => {
    const actionMock = jest.fn();
    const movie = {
      id: 438148,
      poster_path: 'https://image.tmdb.org/t/p/w200//wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
      title: 'Minions: The Rise of Gru',
      release_date: '2019-09-02',
      isFavorited: true
    }

    const { getByTestId } = render(
      <MovieBox
        movie={movie}
        handleFavoriteAction={actionMock}
      />
    )

    fireEvent.click(getByTestId('favorited-icon'))
    expect(actionMock).toBeCalled()
  })

  it('should trigger action when click in MovieBox', () => {
    const actionMock = jest.fn();
    const movie = {
      id: 438148,
      poster_path: 'https://image.tmdb.org/t/p/w200//wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
      title: 'Minions: The Rise of Gru',
      release_date: '2019-09-02',
      isFavorited: false
    }

    const { getByTestId } = render(
      <MovieBox
        movie={movie}
        handleBoxClick={actionMock}
      />
    )

    fireEvent.click(getByTestId('moviebox-action'))
    expect(actionMock).toBeCalled()
  })

  it('should trigger action when click in MovieBox', () => {
    const actionMock = jest.fn();
    const movie = {
      id: 438148,
      poster_path: undefined,
      title: 'Minions: The Rise of Gru',
      release_date: '2019-09-02',
      isFavorited: false
    }

    const { container } = render(
      <MovieBox
        movie={movie}
      />
    )

    expect(screen.getByTestId('whitout-poster')).toBeInTheDocument()
  })
})
