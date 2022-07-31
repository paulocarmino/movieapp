import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query

  const tmdbUrl = 'https://api.themoviedb.org/3'
  const tmdbApiKey = 'fb60b2adcc7b6240727187c16031133e'

  const { data: movieDetails } = await axios.get(`${tmdbUrl}/movie/${movieId}?api_key=${tmdbApiKey}`)

  if (movieDetails.length <= 0) {
    return res.status(400).json({ error: 'GET_MOVIE_DETAILS_ERROR', message: "GET_MOVIE_DETAILS_ERROR" })
  }

  return res.status(200).json(movieDetails)
}
