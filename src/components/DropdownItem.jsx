import React from 'react'

const DropdownItem = ({children}) => {
  return (
    
      <li>
        <a className="dropdown-item" href="#!">
          {children}
        </a>
      </li>
   
  )
}

export default DropdownItem
