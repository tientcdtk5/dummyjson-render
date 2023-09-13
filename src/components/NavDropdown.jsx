import React from 'react'
import DropdownList from './DropdownList'

const NavDropdown = () => {
  return (
   
      <li className="nav-item dropdown">
      <a
       className="nav-link dropdown-toggle"
       id="navbarDropdown"
       href="#"
       role="button"
       data-bs-toggle="dropdown"
       aria-expanded="false">
       Shop
      </a>
      <DropdownList/>
      </li>
      
   
  )
}

export default NavDropdown
