import type { NextApiRequest, NextApiResponse } from 'next'
import axios from '@/utils/axios'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query
  const browserId = req.headers['browser-id']

  const tmdbUrl = 'https://api.themoviedb.org/3'
  const tmdbApiKey = 'fb60b2adcc7b6240727187c16031133e'

  const { data: movieDetails } = await axios.get(`${tmdbUrl}/movie/${movieId}?api_key=${tmdbApiKey}`)
  const { data: movieCredits } = await axios.get(`${tmdbUrl}/movie/${movieId}/credits?api_key=${tmdbApiKey}`)

  const directors = movieCredits.crew.filter((crewMember: any) => crewMember.job === 'Director')
  const cast = movieCredits.cast.slice(0, 6)

  const browserFavoritedMovies = await prisma.browser.findUnique({
    where: {
      browserId: String(browserId)
    },
    include: {
      favoritedMovies: true
    }
  })
  const favoritedMoviesIds = browserFavoritedMovies?.favoritedMovies.map(movie => Number(movie.tmdbId))
  const isFavorited = favoritedMoviesIds?.filter((id: number) => id === movieDetails.id)[0]

  const movie = {
    ...movieDetails,
    isFavorited: !!isFavorited,
    directors,
    cast
  }

  if (!movie) {
    return res.status(400).json({ error: 'GET_MOVIE_DETAILS_ERROR', message: "GET_MOVIE_DETAILS_ERROR" })
  }

  return res.status(200).json(movie)
}
