import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <h3>CryptoInvestment</h3>
      </div>
      <div className="menu">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">FAQ</a>
        <a href="">Login</a>
      </div>
      <div className="signup">
        <button>SignUp</button>
      </div>
    </div>
    
    </>
  )
}

export default Header