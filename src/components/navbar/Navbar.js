import React from 'react'
import './navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>DLbooking</span>
            <div className='navItems'>
                <button className='navBut bt'>List your property</button>
                <button className='navButton bt'>Register</button>
                <button className='navButton bt'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar