import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login/Signup</Link>
    </nav>
  )
}

export default Navbar