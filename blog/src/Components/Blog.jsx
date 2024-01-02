import React, { useCallback, useRef, useState } from 'react'
import '../Styles/Blog.css'
import JoditEditor from 'jodit-react'
const Blog = () => {

    const editor = useRef(null)
    // console.log(editor)
    
    const [title,setTitle] = useState({
        title:'',
        desc:''
    })

    const [blogData, setBlogData] = useState([])

    const handleChange =(e)=>{
        const {name, value} = e.target;
        setTitle((prev)=>({...prev,[name]:value}))
    }

    const handleEditorChange = useCallback((value) => {
        setTitle((prev) => ({ ...prev, desc: value }));
    }, []);

    const handleSubmit=(e)=>{
        e.preventDefault()
        setBlogData((prev)=>[...prev, title])
        setTitle({
            title:'',
            desc:''
        })
    }
  return (
    <>
        <div className='blog-post'>
            <h1>Create your Blog!</h1>
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <label htmlFor='Title'>Title</label>
                    <input type='text' name='title' value={title.title} onChange={handleChange} placeholder='Enter your title'/>
                    {/* <textarea name="desc" value={title.desc} onChange={handleChange} rows="4" cols="50" placeholder="Enter your description here..."></textarea> */}
                    <JoditEditor ref={editor} value={title.desc} onChange={handleEditorChange}/>
                    <button>Submit</button>
                </div>
            </form>
        </div>
        
    </>
  )
}

export default Blog