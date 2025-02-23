import React from 'react'
import'./Navbar.css'
import search_icon from '../../assets/search-icon.png'
import logo from '../../assets/icon.jpg'

const Navbar = () => {
  return (
    <div className="container">
      <div className='navbar'>

<div className="logo">
  MERCY <img src={logo} alt="" /> <span>SALON</span>
</div>

<ul>
  <li>Home</li>
  <li>Services</li>
   <li>Blogs</li>
   <li>Gallery</li>
  <li>contact</li>

</ul>
<img src={search_icon} alt="" className='search-icon'/>
<button>Login</button>

</div>
    </div>
  )
}

export default Navbar
