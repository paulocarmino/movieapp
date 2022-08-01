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

  const { movieDetails, isLoading } = getMovieDetails(movieId, getBroweserId())

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


  if (isLoading) {
    return (
      <div className='flex justify-center items-center my-10 w-full' role="status">
        <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 dark:text-gray-600 animate-spin fill-gray-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
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

        <div className="relative mb-4 w-[230px] lg:mb-0 lg:w-[400px]">
          {!movieDetails?.poster_path && <div className='flex absolute top-0 left-0 -z-10 justify-center items-center w-full h-full text-3xl text-center text-gray-700 bg-gray-800 rounded-lg'>WHITOUT POSTER</div>}
          {movieDetails?.poster_path && <img src={`https://image.tmdb.org/t/p/w400/${movieDetails?.poster_path}`} alt={movieDetails?.title} className="absolute top-0 left-0 -z-10 w-full h-full rounded-lg" />}
        </div>
      </div>
    </>
  )
}

export default DetailsPage
