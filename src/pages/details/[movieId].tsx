import axios from 'axios'
import { useRouter } from 'next/router'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { mutate } from 'swr'
import BackButton from '@/components/BackButton'
import Button from "@/components/Button"
import getMovieDetails from '@/queries/getMovieDetails'
import formatDate from '@/utils/formatDate'

const getBroweserId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem('movieapp-browser-id')
  }
}

const DetailsPage = () => {
  const router = useRouter()
  const { movieId } = router.query

  const { movieDetails } = getMovieDetails(movieId, getBroweserId())

  const handleFavoriteAction = async (type: string) => {
    if (type === 'favorite') {
      try {
        await axios.post(`/api/movies/${movieId}/favorite`, null, { headers: { 'Browser-Id': String(getBroweserId()) } })

        mutate(`/api/movies/${movieId}`)
      } catch (error) {
        console.error(error)
      }
      return
    }

    try {
      await axios.post(`/api/movies/${movieId}/unfavorite`, null, { headers: { 'Browser-Id': String(getBroweserId()) } })

      mutate(`/api/movies/${movieId}`)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className='flex items-center my-4 h-8'>
        <BackButton size={26} onClick={() => router.back()} />
      </div>

      <div className="flex flex-col-reverse max-h-[1000px] lg:flex-row">
        <div className="flex-1 pr-20">
          <div>
            <div className="block mb-2">
              {movieDetails?.runtime && <span className="mr-4">{movieDetails?.runtime} min</span>}
              {movieDetails?.release_date && <span className="mr-4">{formatDate(movieDetails?.release_date)}</span>}
            </div>

            <h1 className="mb-6 text-5xl font-extrabold tracking-tight">{movieDetails?.original_title}</h1>
            <div>
              {!movieDetails?.isFavorited && <Button onClick={() => handleFavoriteAction('favorite')} icon={<AiOutlineHeart size={16} />}>Add aos favoritos</Button>}
              {movieDetails?.isFavorited && <Button onClick={() => handleFavoriteAction('unfavorite')} icon={<AiFillHeart size={16} />}>Favorito</Button>}
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

        <div className="mb-4 max-w-[230px] lg:mb-0 lg:max-w-[400px]">
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
            className="block rounded-lg"
          />
        </div>
      </div>
    </>
  )
}

export default DetailsPage
