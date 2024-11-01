import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between w-full py-5 px-10'>
        <div className='font-semibold text-xl'>
            Logo
        </div>

        <Link className='font-semibold text-xl'
        to="/"
        >
        Home
        </Link>
       
    </nav>
  )
}

export default Navbar