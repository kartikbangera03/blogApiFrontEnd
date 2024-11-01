import React from 'react'
import { useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react';
import AddCommentForm from '../components/AddCommentForm';

const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    timeZoneName: 'short' 
};


const addComment = async(commentData, postId )=>{
    
    console.log("ADD COMMENT FUNCTION....")
    console.log(commentData)
    // const actualUrl = 'https://localhost:8000/posts/'+ postId +'/comments'
    const res = await fetch('http://localhost:8000/comments' , {
        method : 'POST' , 
        headers : {
            'Content-Type':'application/json' 
        },
        body : JSON.stringify(commentData)
    })
    // console.log(res)
    return;    
}


const ViewPost = () => {
    const {postId} = useParams();
    const [post , setPost] = useState([]);
    const [comments , setComments] =useState([]);
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        const fetchPost = async()=>{
            try{
                //In our Api a single call would be enough but here We need to get comments separately
                const res = await fetch('http://localhost:8000/posts/'+ postId) ;
                const data = await res.json();
                setPost(data)


                // console.log("Comments Fetching....")
                const newRes = await fetch('http://localhost:8000/comments?postId='+postId);
                const commentData = await newRes.json()
                // console.log(commentData)
                setComments(commentData)
            }catch(error){
                console.log('Error Fetching Data')
            }finally{
                setLoading(false)
            }
        }

        fetchPost()
        
    },[comments])

    // console.log(postId)
    return (
    <section className='px-4 bg-gray-100 m-auto text-center xl:px-20 xl:text-2xl'>
        <div className='text-4xl font-semibold py-3 xl:py-10'>{post.title}</div>
        <div className='m-auto'>
            <img className='ml-auto mr-auto block' src={post.imageUrl} alt="" />
        </div>
        <div className='py-2 text-left xl:text-xl' >{new Date(post.updatedAt).toLocaleString('en-US', options)}</div>
        <div>{post.body}</div>
        <div className='text-left py-5 '>Comments ({comments && comments.length})</div>
        <AddCommentForm addCommentToPost={addComment}/>
        {comments && comments.length>0 
        &&
        comments.map((comment)=>(
            <div className='border-2 text-left px-4 py-4 rounded-lg mb-4'>
                <div className='text-sm'>By : {comment.commentAuthor}</div>
                <div className='text-lg '>{comment.text}</div>
            </div>
        ))
        }

    </section>
  )
}

export default ViewPost                 