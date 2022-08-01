export const findFavoriteMovies = (favoritesMoviesIds: any, moviesList: any) => {
  const favoritedMovies = favoritesMoviesIds.map((movieId: number) => {
    return moviesList.filter((movie: any) => movie.id === movieId)[0]
  })

  return favoritedMovies
}

export const getBroweserId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem('movieapp-browser-id')
  }
}
