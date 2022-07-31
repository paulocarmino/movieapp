import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from "react-hook-form"

import MovieBox from '@/components/MovieBox'
import SearchInput from '@/components/SearchInput'
import searchMovies from '@/queries/searchMovies'
import formatDate from '@/utils/formatDate'

export default function Home() {
  const router = useRouter()
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const [searchTerm, setSearchTerm] = useState<string | string[] | null | undefined>(undefined)

  const { search } = router.query

  console.log(search)

  const { moviesList } = searchMovies(searchTerm)

  const onSubmit = ({ searchTerm }: any) => {
    router.push(`/?search=${searchTerm}`)
  }


  useEffect(() => {
    if (search) {
      setSearchTerm(search)
      setValue('searchTerm', search)
    }
  }, [search])

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
                  cover={movie.poster_path}
                  title={movie.original_title}
                  year={formatDate(movie.release_date)}
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
