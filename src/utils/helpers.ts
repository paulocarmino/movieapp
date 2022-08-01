import { HeadersDefaults } from 'axios';
import { uuid } from 'uuidv4';
import axios from './axios';

interface HeaderPropertiesWithBrowserId extends HeadersDefaults {
  ['browser-id']: string
}

export const findFavoriteMovies = (favoritesMoviesIds: any, moviesList: any) => {
  const favoritedMovies = favoritesMoviesIds.map((movieId: number) => {
    return moviesList.filter((movie: any) => movie.id === movieId)[0]
  })

  return favoritedMovies
}

export const getBroweserId = () => {
  if (typeof window !== "undefined") {
    const browserId = localStorage.getItem('movieapp-browser-id')

    axios.defaults.headers = {
      ['browser-id']: browserId
    } as HeaderPropertiesWithBrowserId

    return browserId
  }
}

export const setBrowserId = () => {
  if (typeof window !== "undefined") {
    const generatedUuid = uuid()
    localStorage.setItem('movieapp-browser-id', generatedUuid)

    axios.defaults.headers = {
      ['browser-id']: generatedUuid
    } as HeaderPropertiesWithBrowserId
  }
}
