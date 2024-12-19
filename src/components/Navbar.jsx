import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from "../assets/camera-svgrepo-com.svg"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-start w-full py-5 px-10 absolute'>
        <div className='flex items-center font-semibold text-xl text-black'>    
            <img className='ml-auto mr-auto block h-14 w-auto' src={logoImage} alt="" />
            <div className=''>PhotoAlchemy</div>
        </div>

        <Link className='flex items-center font-semibold text-xl h-14 text-black'
        to="/"
        >
        Home
        </Link>
       
    </nav>
  )
}

export default Navbar