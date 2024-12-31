import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <Link to={`/posts/${post.id}`}>
        <div className='
        flex flex-col place-items-start border-2 m-auto mb-2 rounded-lg pb-2 shadow-xl  
        sm:w-60  
        md:w-60 md:h-80
        lg:w-60 lg:h-80'>
            <div className='h-45 w-full p-2'>
                <img className='h-50 w-full' src={post.imageUrl} alt="Image" />
            </div>
            <div className='
            text-xl text-start px-2 font-semibold  
            md:text-lg
            
            
            '>{post.title}</div>
            <div className='
            text-md text-start px-2 overflow-hidden text-overflow-ellipsis
            md:text-sm
            
            '>{post.body.slice(0,100)+'...'}</div>
            {/* <div className='text-md text-start px-2  overflow-hidden text-overflow-ellipsis lg:text-sm '>{post.body.slice(0,200)}</div> */}
        </div>
    </Link>
  )
}

export default Post