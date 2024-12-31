import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from "../assets/camera-svgrepo-com.svg"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-start w-full m-auto
    sm:py-0 px-5
    md:w-full md:py-0
    xl:w-2/3 xl:m-auto
    2xl:w-2/4
   '>

    
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