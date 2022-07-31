import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { searchTerm } = req.query

  const tmdbUrl = 'https://api.themoviedb.org/3'
  const tmdbApiKey = 'fb60b2adcc7b6240727187c16031133e'

  const { data: tmdbData } = await axios.get(`${tmdbUrl}/search/movie?query=${searchTerm}&api_key=${tmdbApiKey}`)
  const searchResult = tmdbData.results

  if (searchResult.length <= 0) {
    return res.status(400).json({ error: 'LIST_MOVIES_ERROR', message: "LIST_MOVIES_ERROR" })
  }

  return res.status(200).json(searchResult)
}
