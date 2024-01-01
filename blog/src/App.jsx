import React from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Home/>
        <Routes>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App