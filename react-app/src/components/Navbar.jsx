import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {

  return (
    <div className = 'navbar'>
        <Link to = '/'>Home</Link>
        <Link to = '/contact'>Contact us</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/career'>Careers</Link>
    </div>
  )
}

export default Navbar