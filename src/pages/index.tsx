import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from "react-hook-form"

import MovieBox from '@/components/MovieBox'
import SearchInput from '@/components/SearchInput'
import searchMovies from '@/queries/searchMovies'

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [searchTerm, setSearchTerm] = useState(null)

  const { moviesList } = searchMovies(searchTerm)
  const router = useRouter()

  const onSubmit = ({ searchTerm }: any) => setSearchTerm(searchTerm)

  return (
    <div className="flex flex-col w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchInput
          {...register("searchTerm")}
        />
      </form>

      <div className='m-auto' >
        <div className='grid grid-cols-5 grid-flow-row gap-6 mt-4'>

          {moviesList?.map((movie: any) => {
            return (
              <div key={movie.id} onClick={() => router.push(`/details/${movie.id}`)}>
                <MovieBox
                  cover={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  title={movie.original_title}
                  year={movie.release_date}
                  isFavorited={false}
                />
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}
