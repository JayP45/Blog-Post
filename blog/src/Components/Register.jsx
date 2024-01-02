import React, { useEffect, useState } from 'react'
import '../Styles/Register.css'
const Register = () => {

    const [data, setData] = useState({
        name:'',
        email:'',
        password:''
    })

    const [allEntry, setAllEntry] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        setAllEntry((prev)=>[...prev, data])
        setData({
            name:'',
            email:'',
            password:''
        })
    }

    useEffect(() => {
        localStorage.setItem('Login-Data', JSON.stringify(allEntry));
    }, [allEntry]);

  return (
    <>
        <div className="register-page">
            <form onSubmit={handleSubmit}>
                <div className='name'>
                    <label htmlFor='Name'>Name</label>
                    <input type='text' placeholder='enter your name' required name='name' value={data.name} onChange={handleChange}/>
                </div>

                <div className="email">
                    <label htmlFor='Email'>Email</label>
                    <input type='email' placeholder='enter your email' required name='email' value={data.email} onChange={handleChange}/>
                </div>

                <div className="password">
                    <label htmlFor='Password'>Password</label>
                    <input type='password' placeholder='enter your password' required name='password' value={data.password} onChange={handleChange}/>
                </div>
                <button>Register</button>
            </form>
        </div>
    </>
  )
}

export default Register