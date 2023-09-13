import React from 'react'

const Button = ({children}) => {
  return (
  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
    <div className="text-center">
      <a className="btn btn-outline-dark mt-auto" href="#">
        {children}
      </a>
    </div>
  </div>
  )
}

export default Button
