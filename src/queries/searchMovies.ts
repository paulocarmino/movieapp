import useSWR from 'swr'
import axios from '@/utils/axios'

export default function searchMovies(searchParam?: string | string[] | null | undefined, browserId?: string | null | undefined) {
  const fetcher = (url: string) => axios(url).then((r) => r.data)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isValidating } = useSWR(searchParam ? `/api/movies/search?searchTerm=${searchParam}` : null, fetcher)

  return {
    moviesList: data,
    isLoading: !data && isValidating,
    isError: error
  }
}
