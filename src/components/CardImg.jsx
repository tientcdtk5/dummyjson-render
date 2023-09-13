import React from 'react'
import "./Img.css"
const CardImg = ({img, title}) => {
  return (
    <img
    className="card-img-top"
    src={img}
    alt={title}
    
    />
  )
}

export default CardImg
