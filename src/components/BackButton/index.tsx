import { IoMdArrowBack } from 'react-icons/io'

export type BackButtonProps = {
  size: number
  onClick: () => void
}

const BackButton = ({ size, onClick }: BackButtonProps) => {
  return (
    <div onClick={() => onClick()}>
      <IoMdArrowBack className='hover:text-gray-600 cursor-pointer' size={size} />
    </div>
  )
}

export default BackButton
