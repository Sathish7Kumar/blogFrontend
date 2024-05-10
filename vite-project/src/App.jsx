import './App.css'
import {BrowserRouter,Routes,Route,Link, useNavigate} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NavBar from './pages/NavBar'
import CreateBlogs from './pages/CreateBlogs'
import {useCookies} from 'react-cookie'
import { useEffect } from 'react'


function App() {

  const PrivateRoute = ({element}) =>{
    const [cookie,setcookie]  = useCookies(['access_token'])
    const nav = useNavigate()
    useEffect(()=>{
      if(!cookie.access_token){
        nav('/login')
      }
    },[])
    return element
  }

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/create' element={<PrivateRoute element={<CreateBlogs/>}/>} />
        <Route path='/' element={<PrivateRoute element={<Home/>}/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
