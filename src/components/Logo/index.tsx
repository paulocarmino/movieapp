import { FaRegPlayCircle } from 'react-icons/fa'

const Logo = () => (
  <div className='flex items-center'>
    <div className='text-2xl'>
      <FaRegPlayCircle data-testid="logo-icon" size={26} className="mr-2 text-yellow-400" />
    </div>
    <h1 className='font-medium text-white'>MovieApp</h1>
  </div>
)

export default Logo
