import React from 'react' 
import "./Navbar.css"
import logo from "../Assests/deew.png"
import cart_icon from "../Assests/cart.png"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
        </div>

    </div>
  )
}
