import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query
  const browserId = req.headers['browser-id']

  try {
    await prisma.browser.update({
      where: {
        browserId: String(browserId)
      },
      data: {
        favoritedMovies: {
          delete: [
            { tmdbId: String(movieId) }
          ]
        }
      },
    })

    res.status(200).json({ deleted: 'ok' })
  } catch (error: any) {

    console.error(error)

    if (error?.code === 'P2017') {
      res.status(400).json({ error: 'MOVIE_NOT_FAVORITED', message: "MOVIE_NOT_FAVORITED" })
    }

    res.status(400).json({ error: 'UNFAVORITE_MOVIE_ERROR', message: "UNFAVORITE_MOVIE_ERROR" })
  }
}
