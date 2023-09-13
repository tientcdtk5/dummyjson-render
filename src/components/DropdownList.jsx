import React from 'react'
import DropdownItem from './DropdownItem'

const DropdownList = () => {
  return (
    
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      <DropdownItem>All Products</DropdownItem>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <DropdownItem>Popular Items</DropdownItem>
      <DropdownItem>New Arrivals</DropdownItem>
      </ul>
   
  )
}

export default DropdownList
