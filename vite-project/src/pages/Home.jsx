import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [blogs, setblogs] = useState([])

  const fetchBlogs = async() =>{
    try {
      const resp = await axios.get("http://localhost:5000/getBlogs")
    setblogs(resp.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchBlogs()
  },[])
  return (
    <>
      <h1>All blogs</h1>
      {blogs.length > 0
       ? 
       <>
       <div>
        {blogs.map((e,i)=>{
          return (
            <div key={i}>
              <h1>{e.title}</h1>
              <img src={e.imageUrl} height={150} width={150}/>
              <p>{e.desc}</p>
            </div>
          )
        })}
        </div>
       </> 
       : 
       <>
       <h1>Blog list Empty</h1>
       </>
       }
    </>
  )
}

export default Home