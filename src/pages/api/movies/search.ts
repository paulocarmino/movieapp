import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

import { findFavoriteMovies } from '@/utils/moviesHelpers'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { searchTerm } = req.query
  const browserId = req.headers['browser-id']

  const tmdbUrl = 'https://api.themoviedb.org/3'
  const tmdbApiKey = 'fb60b2adcc7b6240727187c16031133e'

  const { data: tmdbData } = await axios.get(`${tmdbUrl}/search/movie?query=${searchTerm}&api_key=${tmdbApiKey}`)
  const searchResultFromAPI = tmdbData.results

  const browserFavoritedMovies = await prisma.browser.upsert({
    where: {
      browserId: String(browserId)
    },
    create: {
      browserId: String(browserId)
    },
    update: {
      browserId: String(browserId)
    },
    include: {
      favoritedMovies: true
    }
  })
  const favoritedMoviesIds = browserFavoritedMovies?.favoritedMovies.map(movie => Number(movie.tmdbId))

  if (favoritedMoviesIds) {
    findFavoriteMovies(favoritedMoviesIds, searchResultFromAPI)
      .map((movie: any) => {
        if (movie) {
          return movie.isFavorited = true
        }
      })
  }

  if (searchResultFromAPI.length <= 0) {
    return res.status(400).json({ error: 'LIST_MOVIES_ERROR', message: "LIST_MOVIES_ERROR" })
  }

  return res.status(200).json(searchResultFromAPI)
}
