import React from 'react'
import { FaFacebook ,FaInstagram , FaPinterest , FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex-col justify-center w-full py-2 px-2 divide-y divide-slate-300'>

      <div className='flex-col justify-around divide-y divide-slate-300'>
          <div className='flex flex-col items-center font-semibold text-sm gap-2 py-2'>
                <div className='text-center'>SIGN UP TO OUR NEWSLETTER</div>
                <div className='m-auto'>
                  <input className='border-2 rounded-md px-5 py-2' type="email" placeholder='Email Address' />
                </div>
                <div className='self-center '>
                    <button className='py-2 px-2 rounded-md bg-blue-500 text-white hover:bg-blue-700'>SUBSCRIBE</button>
                </div>
                
          </div>

          <div className='flex font-semibold text-xs flex-col items-center py-3'>
                
                <div className='text-center py-1 '>FOLLOW US </div>
                <div className='flex justify-evenly w-full py-1'>
                  <div><FaFacebook /></div>
                  <div><FaInstagram /></div>
                  <div><FaPinterest /></div>
                  <div><FaTwitter /></div>
                </div>
          </div>

      </div>
      
      <div className='text-xs text-center py-1 '>
        &#169; 2024 Copyright : PhotoAlchemy.com  
      </div>        
    </div>
  
  )
}

export default Footer