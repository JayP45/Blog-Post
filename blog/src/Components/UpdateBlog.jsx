import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../Styles/Blog.css'
import JoditEditor from 'jodit-react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
const UpdateBlog = () => {

    const navigate = useNavigate();
    const editor = useRef(null);
    const { id } = useParams();
    const [blogData, setBlogData] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
         axios.put('http://localhost:5000/blogs/'+id,blogData)
        console.log('blog updated finally..!')
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/blogs/${id}`);
                console.log('Fetched data:', res.data);
                setBlogData(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [id]);
    
    
    return (
        <>
            <div className='blog-post'>
                <h1>Edit your Blog...</h1>
                <form onSubmit={handleSubmit}>
                    <div className="title">
                        <label htmlFor='Title'>Title</label>
                        <input type='text' name='title' value={blogData.title}  placeholder='Enter your title' onChange={(e)=>setBlogData({...blogData, title:e.target.value})}/>
                        {/* <textarea name="desc" value={title.desc} onChange={handleChange} rows="4" cols="50" placeholder="Enter your description here..."></textarea> */}
                        <JoditEditor ref={editor} value={blogData.desc} />
                        <button>Submit</button>
                    </div>
                </form>
            </div>


        </>
    )
}

export default UpdateBlog