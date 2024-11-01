import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const AddCommentForm = ({addCommentToPost}) => {
  const navigate = useNavigate()
  const {postId} = useParams();
  const[commentAuthor , setCommentAuthor] = useState('')
  const[text , setCommentText] = useState('')

  const submitComment = async(e)=>{
    e.preventDefault()
    const newComment = {
      postId ,
      commentAuthor , 
      text
    }

    addCommentToPost(newComment , postId)
    return navigate('/posts/'+postId)
  }

  return (
    <div className='py-4'>
        <form action="" className='flex flex-col gap-2 ' onSubmit={submitComment}>

            <input className='px-2 py-2' type="text" name="commentAuthor" placeholder='Username'required 
            value={commentAuthor} onChange={(e)=>setCommentAuthor(e.target.value)}/>
    
            <textarea className='px-2' name="comment" id="comment" cols="30" rows="5" placeholder='Leave a Comment' required 
            value={text} onChange={(e)=>setCommentText(e.target.value)}></textarea>

            <button className='border-2 w-40 py-2 bg-yellow-300 rounded-xl' type='submit'>Post Comment</button>
        </form>
    </div>
  )
}

export default AddCommentForm