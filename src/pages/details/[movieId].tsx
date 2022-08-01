import { useRouter } from 'next/router'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { GiStarsStack } from 'react-icons/gi'
import { MdOutlinePoll } from 'react-icons/md'
import { mutate } from 'swr'

import BackButton from '@/components/BackButton'
import Button from "@/components/Button"
import Loading from '@/components/Loading'
import StatGroup from '@/components/StatGroup'
import getMovieDetails from '@/queries/getMovieDetails'
import axios from '@/utils/axios'
import formatDate from '@/utils/formatDate'
import { getBroweserId } from '@/utils/helpers'

const DetailsPage = () => {
  const router = useRouter()
  const { movieId } = router.query

  const { movieDetails, isLoading } = getMovieDetails(movieId, getBroweserId())

  const handleFavoriteAction = async (type: string) => {
    if (type === 'favorite') {
      favoriteMovie(Number(movieId))
      return
    } else {
      unfavoriteMovie(Number(movieId))
    }
  }

  const favoriteMovie = async (movieId: number) => {
    try {
      await axios.post(`/api/movies/${movieId}/favorite`)

      mutate(`/api/movies/${movieId}`)
    } catch (error) {
      console.error(error)
    }
  }

  const unfavoriteMovie = async (movieId: number) => {
    try {
      await axios.post(`/api/movies/${movieId}/unfavorite`, null)

      mutate(`/api/movies/${movieId}`)
    } catch (error) {
      console.error(error)
    }
  }

  if (!movieDetails || isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className='flex items-center my-4 h-8'>
        <BackButton size={26} action={() => router.back()} />
      </div>

      <div className="flex flex-col-reverse max-h-[1000px] lg:flex-row">
        <div className="flex-1 pr-20">
          <div>
            <div className="block mb-2">
              <span className="mr-4">{movieDetails?.runtime} min</span>
              <span className="mr-4">{formatDate(movieDetails?.release_date)}</span>
            </div>

            <h1 className="mb-6 text-5xl font-extrabold tracking-tight">{movieDetails?.original_title}</h1>
            <div className='flex'>
              {!movieDetails?.isFavorited && <Button onClick={() => handleFavoriteAction('favorite')} icon={<AiOutlineHeart size={16} />}>Add to Favorites</Button>}
              {movieDetails?.isFavorited && <Button onClick={() => handleFavoriteAction('unfavorite')} icon={<AiFillHeart size={16} />}>Favorited</Button>}

              <div className='ml-2'>
                <StatGroup icon={<MdOutlinePoll size={20} />} title="Vote Average" value={Number(movieDetails?.vote_average).toFixed(1)} />
              </div>

              <div className='ml-2'>
                <StatGroup icon={<GiStarsStack size={20} />} title="Popularity" value={Number(movieDetails?.popularity).toFixed()} />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <span className="text-xs tracking-wider text-gray-400 uppercase">Plot</span>

            <p className="text-base">{movieDetails?.overview}</p>
          </div>

          <div className="flex justify-between mt-6 w-full">
            <div>
              <span className="text-xs tracking-wider text-gray-400 uppercase">Cast</span>

              <div>
                {movieDetails?.cast.map((castMember: any, index: number) => (
                  <p key={index} className="text-base">{castMember.name}</p>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs tracking-wider text-gray-400 uppercase">Genre</span>

              <div>
                {movieDetails?.genres.map((genre: any, index: number) => (
                  <p key={index} className="text-base">{genre.name}</p>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs tracking-wider text-gray-400 uppercase">Director</span>

              <div>
                {movieDetails?.directors.map((director: any, index: number) => (
                  <p key={index} className="text-base">{director.name}</p>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="relative mb-4 w-[230px] lg:mb-0 lg:w-[400px]">
          {!movieDetails?.poster_path && <div className='flex absolute top-0 left-0 -z-10 justify-center items-center w-full h-full text-3xl text-center text-gray-700 bg-gray-800 rounded-lg'>WHITOUT POSTER</div>}
          {movieDetails?.poster_path && <img src={`https://image.tmdb.org/t/p/w400/${movieDetails?.poster_path}`} alt={movieDetails?.title} className="object-contain absolute top-0 left-0 -z-10 w-full h-full rounded-lg" />}
        </div>
      </div>
    </>
  )
}

export default DetailsPage
