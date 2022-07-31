export const findFavoriteMovies = (favoritesMoviesIds: any, moviesList: any) => {
  const favoritedMovies = favoritesMoviesIds.map((movieId: number) => {
    return moviesList.filter((movie: any) => movie.id === movieId)[0]
  })

  return favoritedMovies
}
