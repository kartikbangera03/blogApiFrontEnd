import {useState , useEffect} from 'react';
import React from 'react'
import Post from '../components/Post'


const BrowsePosts = () => {
  const [posts , setPosts] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    const fetchPosts = async()=>{

      try{
        console.log("FETCHING POSTS FROM PORT 8000")
        const res = await fetch('http://localhost:8000/posts');
        const data = await res.json();
        setPosts(data)

        console.log(data)
      }catch(error){
        console.log('Error Fetching Data')
      }finally {
        setLoading(false)
      }
  
    }

    fetchPosts();
  },[])

  return (

    <section className='text-center py-2'>
        <div className='text-3xl p-5 font-semibold'>Browse Posts</div>

       
          <div className='m-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  py-4  gap-4 px-4 '>
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