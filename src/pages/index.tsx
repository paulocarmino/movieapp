import MovieBox from '@/components/MovieBox'
import SearchInput from '@/components/SearchInput'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <SearchInput />

      <div className='m-auto' >
        <div className='grid grid-cols-5 grid-flow-row gap-6 mt-4'>
          <MovieBox
            cover="https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg"
            title="Capitã Marvel"
            year={2019}
            isFavorited={true}
          />

          <MovieBox
            cover="https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg"
            title="Capitã Marvel"
            year={2019}
            isFavorited={true}
          />

          <MovieBox
            cover="https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg"
            title="Capitã Marvel"
            year={2019}
            isFavorited={true}
          />

          <MovieBox
            cover="https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg"
            title="Capitã Marvel"
            year={2019}
            isFavorited={true}
          />

          <MovieBox
            cover="https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg"
            title="Capitã Marvel"
            year={2019}
            isFavorited={true}
          />

          <MovieBox
            cover="https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg"
            title="Capitã Marvel"
            year={2019}
            isFavorited={true}
          />

          <MovieBox
            cover="https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg"
            title="Capitã Marvel"
            year={2019}
            isFavorited={true}
          />

          <MovieBox
            cover="https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg"
            title="Capitã Marvel"
            year={2019}
            isFavorited={true}
          />

          <MovieBox
            cover="https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg"
            title="Capitã Marvel"
            year={2019}
            isFavorited={true}
          />
        </div>
      </div>
    </div>
  )
}
