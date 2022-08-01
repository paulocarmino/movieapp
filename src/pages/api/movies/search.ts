import type { NextApiRequest, NextApiResponse } from 'next'

import { MovieType } from '@/components/MovieBox'
import axios from '@/utils/axios'
import { findFavoriteMovies } from '@/utils/helpers'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { searchTerm } = req.query
  const browserId = req.headers['browser-id']

  const tmdbUrl = 'https://api.themoviedb.org/3'
  const tmdbApiKey = process.env.TMDB_API

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
      .map((movie: MovieType) => {
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
