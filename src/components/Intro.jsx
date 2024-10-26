import React from 'react'

const Intro = () => {
  return (

    
    <section className='h-auto sm:grid sm:grid-cols-2  bg-gray-100'>
       
            <div className='px-10  h-1/2 text-center flex flex-col items-center justify-center gap-2 py-24
                sm:h-full
                '>
                    <div className='text-5xl font-bold'>Explore Photography</div>
                    <div className='text-2xl'>Learn to take photos like a professional</div>
            </div>
            <div className='h-1/2'>
                <img className='' src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Woman clicking photo" />
            </div>

    </section>
    )
}

export default Intro