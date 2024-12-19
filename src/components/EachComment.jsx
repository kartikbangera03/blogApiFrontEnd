import React from 'react'

const EachComment = ({comment}) => {
  return (
    <div className='text-left px-4 py-4 rounded-lg mb-4 bg-white'>
        <div className='text-sm'>By : {comment.commentAuthor}</div>
        <div className='text-sm '>{comment.text}</div>
    </div>
  )
}

export default EachComment