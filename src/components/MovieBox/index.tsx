import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export type MovieBoxProps = {
  cover: string
  title: string
  year: number
  isFavorited: boolean
}

const MovieBox = ({ cover, title, year, isFavorited }: MovieBoxProps) => {
  return (
    <div className="relative w-[180px] h-[267px]">
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

      <img src={cover} alt={title} className="absolute top-0 left-0 -z-10 rounded-lg" />
    </div>
  )
}

export default MovieBox
