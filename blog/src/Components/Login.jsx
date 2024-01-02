import React from 'react'
import '../Styles/Login.css'
const Login = () => {


  const handleSubmit = (e) =>{
    e.preventDefault()
   let data= localStorage.getItem('Login-Data')
   data = JSON.parse(data);
   if(data.name === data.password){
    console.log(data)
    alert('hello')
   }else{
    alert('wrong data')
   }
  }

  return (
    <>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="name">
              <label htmlFor='Name'>Name</label>
              <input type='text' placeholder='Enter your name' required/>
            </div>

            <div className="password">
              <label htmlFor='Password'>Password</label>
              <input type='password' placeholder='Enter your password' required/>
            </div>
            <button>Login</button>

          </form>
        </div>
    </>
  )
}

export default Login