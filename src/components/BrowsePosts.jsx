import {useState , useEffect} from 'react';
import React from 'react'
import Post from '../components/Post'


const BrowsePosts = () => {
  const [posts , setPosts] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    const fetchPosts = async()=>{

      try{
        // console.log("FETCHING POSTS FROM PORT 8000")
        const res = await fetch('http://localhost:8000/posts');
        const data = await res.json();
        setPosts(data)

        // console.log(data)
      }catch(error){
        console.log('Error Fetching Data')
      }finally {
        setLoading(false)
      }
  
    }

    fetchPosts();
  },[])

  return (

    <section className='
    text-center
    md:py-5
    lg:m-auto
    '>
        <div className='
        text-xl py-2 font-semibold
        '>Browse Posts</div>

       
          <div className='grid py-2 px-4  gap-4 
          sm:grid-cols-2 
          md:grid-cols-3 md:w-full
          lg:grid-cols-3 lg:w-full lg:m-auto lg:pb-5
          xl:grid-cols-3 xl:w-3/4 xl:m-auto
          2xl:w-2/4
           '>
            {
              posts.map((post)=>(
                <Post key={post.id} post ={post}/>
              ))
            }
          </div>
           
     

    </section>
  )
}

export default BrowsePosts