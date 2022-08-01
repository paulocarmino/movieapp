import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import formatDate from '@/utils/formatDate'

export type MovieType = {
  id: number
  poster_path?: string
  title: string
  release_date: string
  isFavorited: boolean
}

export type MovieBoxProps = {
  movie: MovieType
  handleFavoriteAction?: (e: React.MouseEvent<HTMLDivElement>, movie: any, type: string) => void
  handleBoxClick?: (movieId: number) => void
}

const MovieBox = ({ movie, handleFavoriteAction = () => { }, handleBoxClick = () => { } }: MovieBoxProps) => {
  return (
    <div className="relative z-0 w-[180px] h-[267px] cursor-pointer">

      <div onClick={() => handleBoxClick(movie.id)} data-testid="moviebox-action" className='group flex flex-col justify-between p-2 h-full hover:bg-slate-200/80 rounded-lg'>
        <div>
          {movie?.isFavorited && (
            <div onClick={(e: React.MouseEvent<HTMLDivElement>) => handleFavoriteAction(e, movie.id, 'unfavorite')}>
              <AiFillHeart
                className='text-red-600 opacity-100 cursor-pointer'
                size={26}
                data-testid="favorited-icon"
              />
            </div>
          )}

          {!movie?.isFavorited && (
            <div onClick={(e: React.MouseEvent<HTMLDivElement>) => handleFavoriteAction(e, movie.id, 'favorite')}>
              <AiOutlineHeart
                className='text-red-600 opacity-0 group-hover:opacity-100 cursor-pointer'
                size={26}
                data-testid="forFavorite-icon"
              />
            </div>
          )}
        </div>

        <div className='text-gray-900 opacity-0 group-hover:opacity-100'>
          <h2 className='text-2xl font-semibold'>{movie?.title}</h2>
          <p className='text-sm'>{movie?.release_date && formatDate(movie?.release_date)}</p>
        </div>
      </div>

      {!movie?.poster_path && <div data-testid="whitout-poster" className='flex absolute top-0 left-0 -z-10 justify-center items-center w-full h-full text-3xl text-center text-gray-700 bg-gray-800 rounded-lg'>WHITOUT POSTER</div>}
      {movie?.poster_path && <img src={`https://image.tmdb.org/t/p/w200/${movie?.poster_path}`} alt={movie?.title} className="absolute top-0 left-0 -z-10 w-full h-full rounded-lg" />}
    </div>
  )
}

export default MovieBox
