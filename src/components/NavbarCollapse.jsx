import React from 'react'
import Nav from './Nav'
import CartBtn from './CartBtn'

const NavbarCollapse = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <Nav/>
      <CartBtn/>
    </div>
  )
}

export default NavbarCollapse
