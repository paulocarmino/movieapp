import { IoMdArrowBack } from 'react-icons/io'

export type BackButtonProps = {
  size: number
  action?: () => void
}

const BackButton = ({ size, action = () => { } }: BackButtonProps) => {
  return (
    <div data-testid="back-icon" onClick={() => action()}>
      <IoMdArrowBack className='hover:text-gray-600 cursor-pointer' size={size} />
    </div>
  )
}

export default BackButton
