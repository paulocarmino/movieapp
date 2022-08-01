import useSWR from 'swr'
import axios from '@/utils/axios'

export default function getMovieDetails(movieId?: string | string[] | undefined, browserId?: string | null | undefined) {
  const fetcher = (url: string) => axios(url).then((r) => r.data)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isValidating } = useSWR(movieId ? `/api/movies/${movieId}` : null, fetcher)

  return {
    movieDetails: data,
    isLoading: !data && isValidating,
    isError: error
  }
}
