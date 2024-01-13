// import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  let isAuthenticated = false
  const data = localStorage.getItem('userData')
  if(data !== null){
    const {logedIn} = JSON.parse(data)
    isAuthenticated = logedIn
  }
  const navigate = useNavigate()

  const handelLogout = () => {
    localStorage.removeItem('userData')
    navigate('/login')
  }
  return (
    <header className='flex justify-between px-4 py-4 shadow-md'>
      <div>
        <NavLink to={'/'} className='text-2xl font-bold'>DUB</NavLink>
      </div>
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated ? <><Link to={'/profile'} className='ml-4'>Profile</Link> <button onClick={handelLogout} className='ml-4 bg-black text-white px-3 py-2 rounded-md'>Logout</button></> : <Link to='/login' className='ml-4'>Login</Link>}
      </nav>
    </header>
  )
}

export default Navbar
