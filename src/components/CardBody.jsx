import React from 'react'
import ListStar from './ListStar'
import PropTypes from "prop-types"

const CardBody = ({price, pricesale, vote, title}) => {
  return (
    <div className="card-body p-4">
      <div className="text-center">

        <h5 className="fw-bolder">{title}</h5>

       { vote && (<ListStar/>)}
        <span className="text-muted ">
          $ {price}
        </span>
           <span className='text-sale'>(-{pricesale}%)</span>
      </div>
    </div>
  )
}
CardBody.propTypes={
  
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pricesale: PropTypes.number,
  vote: PropTypes.bool
}
export default CardBody
