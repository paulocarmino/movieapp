import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { MdClear } from 'react-icons/md'

import { mutate } from 'swr'
import Button from '@/components/Button'
import EmptyState from '@/components/EmptyState'
import IsError from '@/components/IsError'
import Loading from '@/components/Loading'
import MovieBox from '@/components/MovieBox'
import SearchInput from '@/components/SearchInput'
import searchMovies from '@/queries/searchMovies'

const getBroweserId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem('movieapp-browser-id')
  }
}

export default function Home() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState<string | string[] | null | undefined>(undefined)
  const { register, handleSubmit, setValue } = useForm();
  const { search } = router.query

  const { moviesList, isLoading, isError } = searchMovies(searchTerm, getBroweserId())

  const onSubmit = ({ searchTerm }: any) => {
    router.push(`/?search=${searchTerm}`)
  }

  const handleFavoriteAction = async (e: React.MouseEvent<HTMLDivElement>, movie: any, type: string) => {
    e.stopPropagation()

    if (type === 'favorite') {
      try {
        await axios.post(`/api/movies/${movie.id}/favorite`, null, { headers: { 'Browser-Id': String(getBroweserId()) } })

        mutate(`/api/movies/search?searchTerm=${searchTerm}`)
      } catch (error) {
        console.error(error)
      }
      return
    }

    try {
      await axios.post(`/api/movies/${movie.id}/unfavorite`, null, { headers: { 'Browser-Id': String(getBroweserId()) } })

      mutate(`/api/movies/search?searchTerm=${searchTerm}`)
    } catch (error) {
      console.error(error)
    }
  }

  const handleBoxClick = (movieId: number) => {
    router.push(`/details/${movieId}`)
  }

  const clearResults = () => {
    setSearchTerm(null)
    setValue('searchTerm', '')
  }

  useEffect(() => {
    if (search) {
      setSearchTerm(search)
      setValue('searchTerm', search)
      return
    }

    clearResults()
  }, [search])

  return (
    <div className="flex flex-col w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchInput
          {...register("searchTerm")}
        />
      </form>

      <div className='mx-auto'>
        {!searchTerm && (
          <EmptyState />
        )}

        {isLoading && (
          <Loading />
        )}

        {isError && (
          <IsError action={clearResults} />
        )}

        {moviesList && (
          <div>
            <div className='flex justify-center items-center my-4 h-8'>
              <Button onClick={() => clearResults()} icon={<MdClear size={16} />}>Clear results</Button>
            </div>

            <div className='grid grid-cols-2 grid-flow-row gap-6 mt-8 md:grid-cols-3 lg:grid-cols-5'>
              {moviesList?.map((movie: any) => {
                return (
                  <div key={movie.id}>
                    <MovieBox
                      movie={movie}
                      handleFavoriteAction={handleFavoriteAction}
                      handleBoxClick={handleBoxClick}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
