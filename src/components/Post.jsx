import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <Link to={`/posts/${post.id}`}>
        <div className='place-items-start sm:w-80 flex flex-col border-2 m-auto mb-2 rounded-lg pb-2 shadow-xl'>
            <div className='h-45 w-full p-2'>
                <img className='h-50 w-full' src={post.imageUrl} alt="Image" />
            </div>
            <div className='text-2xl text-start px-2 font-semibold'>{post.title}</div>
            <div className='text-lg text-start px-2'>{post.body.slice(0,100)+'...'}</div>
        </div>
    </Link>
  )
}

export default Post