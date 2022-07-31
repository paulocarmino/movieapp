import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export type MovieBoxProps = {
  cover: string
  title: string
  year: number
  isFavorited: boolean
}

const MovieBox = ({ cover, title, year, isFavorited }: MovieBoxProps) => {
  return (
    <div className="relative w-[180px] h-[267px] cursor-pointer">
      <div className='group flex flex-col justify-between p-2 h-full hover:bg-slate-500/70'>
        <div>
          {isFavorited && (
            <AiFillHeart
              className='text-white opacity-100 cursor-pointer'
              size={26}
              data-testid="favorited-icon"
            />
          )}

          {!isFavorited && (
            <AiOutlineHeart
              className='text-white opacity-0 group-hover:opacity-100 cursor-pointer'
              size={26}
              data-testid="forFavorite-icon"
            />
          )}
        </div>

        <div className='text-white opacity-0 group-hover:opacity-100'>
          <h2 className='font-semibold text-1xl'>{title}</h2>
          <p className='text-sm'>{year}</p>
        </div>
      </div>

      {!!cover && <img src={`https://image.tmdb.org/t/p/w500/${cover}`} alt={title} className="absolute top-0 left-0 -z-10 rounded-lg" />}
      {!cover && <div className='flex absolute top-0 left-0 -z-10 justify-center items-center w-full h-full text-3xl text-center text-gray-700 bg-gray-800 rounded-lg'>WHITOUT POSTER</div>}
    </div>
  )
}

export default MovieBox
