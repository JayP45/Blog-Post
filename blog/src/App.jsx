import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './Components/Register'
import Blog from './Components/Blog'
import Home from './Components/Home'
const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/blogs' element={<Blog/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App