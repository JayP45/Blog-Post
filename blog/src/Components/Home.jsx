import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

  const [blogs, setBlogs] = useState([])
  const getBlogData = async() =>{
    const res = await axios.get('http://localhost:5000/blogs')
    console.log(res.data)
    setBlogs(res.data)
}

useEffect(()=>{
    getBlogData()
},[])

  return (
    <>
        {blogs.map(({ title, desc, id }) => (
        <div key={id}>
          <p>{title}</p>
          <p>
            {desc.length > 15 ? `${desc.substring(0, 15)}...` : desc}
          </p>
          <Link to={`/update/${id}`}>Update</Link>
        </div>
      ))}
    </>
  )
}

export default Home