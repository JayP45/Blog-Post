import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="nav1">
                    <h1>MyBlog</h1>
                </div>
                <div className="nav2">
                    <ul>
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/blogs'>Blogs</Link>
                            
                            </li>
                    </ul>
                </div>
                <div className="nav3">
                    <ul>
                        <li>
                            <Link to='/'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar