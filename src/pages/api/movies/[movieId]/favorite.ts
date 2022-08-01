import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query
  const browserId = req.headers['browser-id']

  try {
    await prisma.movie.upsert({
      where: {
        tmdbId: String(movieId)
      },
      create: {
        tmdbId: String(movieId),
        browsers: {
          connect: {
            browserId: String(browserId)
          }
        }
      },
      update: {
        browsers: {
          connect: {
            browserId: String(browserId)
          }
        }
      }
    })

    res.status(200).json({ favorited: 'ok' })
  } catch (error) {
    console.error(error)

    res.status(400).json({ error: 'FAVORITE_MOVIE_ERROR', message: "FAVORITE_MOVIE_ERROR" })
  }
}
