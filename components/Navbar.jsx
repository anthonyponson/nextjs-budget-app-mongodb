import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import Button from './Button'

function Navbar({ id }) {


  return (
    <>
      <div className='w-[80%] py-8 flex flex-row justify-between items-center mx-auto'>
        <Link
          href='/'
          className='flex items-center gap-1 bg-green-600 rounded-md px-3 py-1'
        >
          <AiFillHome /> Home
        </Link>

        <div>
          <Button id={id} />
        </div>
      </div>
    </>
  )
}

export default Navbar
