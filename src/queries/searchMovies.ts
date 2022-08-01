import axios from 'axios'
import useSWR from 'swr'

export default function searchMovies(searchParam?: string | string[] | null | undefined, browserId?: string | null | undefined) {
  const fetcher = (url: string) => axios(url, { headers: { 'Browser-Id': String(browserId) } }).then((r) => r.data)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isValidating } = useSWR(searchParam ? `/api/movies/search?searchTerm=${searchParam}` : null, fetcher)

  console.log('data', data)
  console.log('error', error)

  return {
    moviesList: data,
    isLoading: !data && isValidating,
    isError: error
  }
}
