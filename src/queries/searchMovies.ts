import axios from 'axios'
import useSWR from 'swr'

export default function searchMovies(searchParam?: string | null) {
  const fetcher = (url: string) => axios(url).then((r) => r.data)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(searchParam ? `/api/movies/search?searchTerm=${searchParam}` : null, fetcher)

  return {
    moviesList: data,
    isLoading: !error && !data,
    isError: !data
  }
}
