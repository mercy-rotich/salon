import React from 'react'
import'./Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="logo">
        MERCY <span>SALON</span>
      </div>

      <ul>
        <li>Home</li>
        <li>Services</li>
         <li>Blogs</li>
         <li>Gallery</li>
        <li>contact</li>

      </ul>
      
    </div>
  )
}

export default Navbar
