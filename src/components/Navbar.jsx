import React from 'react'
import NavbarBrand from './NavbarBrand'
import NavbarToggler from './NavbarToggler'
import NavbarCollapse from './NavbarCollapse'

const Navbar = () => {
  
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
    <NavbarBrand/>
    <NavbarToggler/>
    <NavbarCollapse/>
    </div>
  </nav>
  )
}

export default Navbar
