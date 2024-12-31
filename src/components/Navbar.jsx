import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from "../assets/camera-svgrepo-com.svg"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-start w-full px-2 absolute 
    sm:py-5 sm:px-5 
    md:px-5
    lg:justify-evenly '>
        <div className='flex items-center font-semibold text-xl text-black'>    
            <img className='ml-auto mr-auto block h-14 w-auto' src={logoImage} alt="" />
            <div className='hidden sm:block'>Alchemy</div>
        </div>

        <Link className='flex items-center font-semibold text-lg h-14 text-black  sm:text-xl'
        to="/"
        >
        Home
        </Link>
       
    </nav>
  )
}

export default Navbar