import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FieldValues, useForm } from "react-hook-form"
import { MdClear } from 'react-icons/md'
import { mutate } from 'swr'

import Button from '@/components/Button'
import EmptyState from '@/components/EmptyState'
import IsError from '@/components/IsError'
import Loading from '@/components/Loading'
import MovieBox, { MovieType } from '@/components/MovieBox'
import SearchInput from '@/components/SearchInput'
import searchMovies from '@/queries/searchMovies'
import axios from '@/utils/axios'
import { getBroweserId } from '@/utils/helpers'

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState<string | string[] | null | undefined>(undefined)
  const { register, handleSubmit, setValue } = useForm();
  const { search } = router.query

  const { moviesList, isLoading, isError } = searchMovies(searchTerm, getBroweserId())

  const onSubmit = ({ searchTerm }: FieldValues) => {
    router.push(`/?search=${searchTerm}`)
  }

  const handleFavoriteAction = async (e: React.MouseEvent<HTMLDivElement>, movieId: number, type: string) => {
    e.stopPropagation()

    if (type === 'favorite') {
      favoriteMovie(movieId)
      return
    } else {
      unfavoriteMovie(movieId)
    }
  }

  const favoriteMovie = async (movieId: number) => {
    try {
      await axios.post(`/api/movies/${movieId}/favorite`, null)

      mutate(`/api/movies/search?searchTerm=${searchTerm}`)
    } catch (error) {
      console.error(error)
    }
  }

  const unfavoriteMovie = async (movieId: number) => {
    try {
      await axios.post(`/api/movies/${movieId}/unfavorite`, null)

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
              {moviesList?.map((movie: MovieType) => {
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

export default Home
