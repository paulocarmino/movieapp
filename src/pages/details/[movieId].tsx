import { useRouter } from 'next/router'
import { AiOutlineHeart } from 'react-icons/ai'
import BackButton from '@/components/BackButton'
import Button from "@/components/Button"
import getMovieDetails from '@/queries/getMovieDetails'
import formatDate from '@/utils/formatDate'

const DetailsPage = () => {
  const router = useRouter()
  const { movieId } = router.query

  const { movieDetails } = getMovieDetails(movieId)

  console.log(movieDetails)

  return (
    <>
      <div className='flex items-center my-4 h-8'>
        <BackButton size={26} onClick={() => router.back()} />
      </div>

      <div className="flex max-h-[1000px]">
        <div className="flex-1 pr-20">
          <div>
            <div className="block mb-2">
              {movieDetails?.runtime && <span className="mr-4">{movieDetails?.runtime} min</span>}
              {movieDetails?.release_date && <span className="mr-4">{formatDate(movieDetails?.release_date)}</span>}
            </div>

            <h1 className="mb-6 text-5xl font-extrabold tracking-tight">{movieDetails?.original_title}</h1>
            <Button icon={<AiOutlineHeart size={16} />}>Add aos favoritos</Button>
          </div>

          <div className="mt-6">
            <span className="text-xs tracking-wider text-gray-400 uppercase">Plot</span>

            <p className="text-base">{movieDetails?.overview}</p>
          </div>

          <div className="flex justify-between mt-6 w-full">
            <div>
              <span className="text-xs tracking-wider text-gray-400 uppercase">Cast</span>

              <div>
                <p className="text-base">TODO</p>
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
                <p className="text-base">TODO</p>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-[400px]">
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
            className="block rounded-lg"
          />
        </div>
      </div>
    </>
  )
}

export default DetailsPage
