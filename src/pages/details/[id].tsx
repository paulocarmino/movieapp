import { useRouter } from 'next/router'
import { AiOutlineHeart } from 'react-icons/ai'
import BackButton from '@/components/BackButton'
import Button from "@/components/Button"

const DetailsPage = () => {
  const router = useRouter()

  return (
    <>
      <div className='flex items-center my-4 h-8'>
        <BackButton size={26} onClick={() => router.back()} />
      </div>

      <div className="flex max-h-[1000px]">
        <div className="flex-1 pr-20">
          <div>
            <div className="block mb-2">
              <span className="mr-4">86 min</span>
              <span>2019</span>
            </div>

            <h1 className="mb-6 text-5xl font-extrabold tracking-tight">Capitã Marvel</h1>
            <Button icon={<AiOutlineHeart size={16} />}>Add aos favoritos</Button>
          </div>

          <div className="mt-6">
            <span className="text-xs tracking-wider text-gray-400 uppercase">Plot</span>

            <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida nec ligula ut efficitur. Vestibulum iaculis nisi feugiat sodales rutrum. Nulla commodo elit ac elit tempus dapibus. Ut molestie luctus est id auctor. Quisque pretium mi a rhoncus finibus. Nullam aliquam risus libero, vel pharetra eros lacinia in. </p>
          </div>

          <div className="flex justify-between w-full">
            <div className="mt-6">
              <span className="text-xs tracking-wider text-gray-400 uppercase">Genre</span>

              <div>
                <p className="text-base">Jemaine Clement</p>
                <p className="text-base">Cori Gonzales</p>
                <p className="text-base">Taika Waititi</p>
                <p className="text-base">Jonny Brugh</p>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-xs tracking-wider text-gray-400 uppercase">Genre</span>

              <div>
                <p className="text-base">Comedy</p>
                <p className="text-base">Horror</p>
              </div>
            </div>

            <div className="mt-6">
              <span className="text-xs tracking-wider text-gray-400 uppercase">Director</span>

              <div>
                <p className="text-base">Jemanine Clement</p>
                <p className="text-base">Taika Waititi</p>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-[400px]">
          <img src='https://img.elo7.com.br/product/zoom/23646C7/big-poster-filme-capita-marvel-tamanho-90x60-cm-presente-geek.jpg'
            className="block rounded-lg"
          />
        </div>
      </div>
    </>
  )
}

export default DetailsPage
