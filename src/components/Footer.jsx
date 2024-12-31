import React from 'react'
import { FaFacebook ,FaInstagram , FaPinterest , FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='
    justify-center w-full py-2 px-2 
    sm:flex-col  '>

      <div className='
      flex justify-between m-auto py-2 px-4
      sm:flex-col  
      md:flex-row  md:justify-between md:w-full md:px-6 
      lg:flex-row'>
          <div className='
          flex flex-col justify-start text-sm gap-1 
          sm:text-lg
          '>
                <div className='
                text-center font-semibold '>SIGN UP TO OUR NEWSLETTER</div>
                <div className=''>
                  <input className='
                  border-2 rounded-md px-5 py-1' type="email" placeholder='Email Address' />
                </div>
                <div className=''>
                    <button className='py-1 px-2 text-md rounded-md bg-blue-500 text-white hover:bg-blue-700'>Subscribe</button>
                </div>
                
          </div>

          <div className='
          flex flex-col font-semibold text-xs  
          sm:text-lg
          '>     
                <div className='
                text-center py-1 '>FOLLOW US </div>
                <div className='
                flex justify-evenly w-full py-1 gap-3'>
                  <div><FaFacebook /></div>
                  <div><FaInstagram /></div>
                  <div><FaPinterest /></div>
                  <div><FaTwitter /></div>
                </div>
          </div>

      </div>
      
      <div className='text-xs text-center py-1 
      sm:text-sm
      '>
        &#169; 2024 Copyright : PhotoAlchemy.com  
      </div>        
    </div>
  
  )
}

export default Footer