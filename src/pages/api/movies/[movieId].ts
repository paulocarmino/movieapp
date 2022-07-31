import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query

  const tmdbUrl = 'https://api.themoviedb.org/3'
  const tmdbApiKey = 'fb60b2adcc7b6240727187c16031133e'

  const { data: movieDetails } = await axios.get(`${tmdbUrl}/movie/${movieId}?api_key=${tmdbApiKey}`)
  const { data: movieCredits } = await axios.get(`${tmdbUrl}/movie/${movieId}/credits?api_key=${tmdbApiKey}`)

  const directors = movieCredits.crew.filter((crewMember: any) => crewMember.job === 'Director')
  const cast = movieCredits.cast.slice(0, 6)

  const movie = {
    ...movieDetails,
    directors,
    cast
  }

  if (!movie) {
    return res.status(400).json({ error: 'GET_MOVIE_DETAILS_ERROR', message: "GET_MOVIE_DETAILS_ERROR" })
  }

  return res.status(200).json(movie)
}
