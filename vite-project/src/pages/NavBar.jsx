import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useCookies} from 'react-cookie'

const NavBar = () => {
    const [cookie,setcookie]  = useCookies(['access_token'])

    const nav = useNavigate()
    
    const handleLogout = () =>{
        setcookie("access_token","")
        window.localStorage.clear()
        nav('/login')
    }
  return (
    <>
    <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/create'>Create Blogs</Link></li>
          {/* <li><Link to='/register'>Register</Link></li> */}
          {
            !cookie.access_token ? (
                <li><Link to='/login'>Login</Link></li>
            ) : (
                <button onClick={handleLogout}>Logout</button>
            )
          }
        </ul>
      </nav>
    </>
  )
}

export default NavBar