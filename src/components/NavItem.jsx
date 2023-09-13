import React from 'react'

const NavItem = ({children}) => {
  return (
    
       <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#!">
              {children}
            </a>
          </li>
   
  )
}

export default NavItem
