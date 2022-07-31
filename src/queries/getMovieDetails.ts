import axios from 'axios'
import useSWR from 'swr'

export default function getMovieDetails(movieId?: string | string[] | undefined) {
  const fetcher = (url: string) => axios(url).then((r) => r.data)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(movieId ? `/api/movies/${movieId}` : null, fetcher)

  return {
    movieDetails: data,
    isLoading: !error && !data,
    isError: !data
  }
}
