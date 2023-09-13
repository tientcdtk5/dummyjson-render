import React from 'react'
import Card from './Card'
const Section = ({products}) => {
  const Cards =products.map((product)=>(
    <div className="col mb-5" key={product.id}>
      <Card
      img={product.thumbnail}
      title={product.title}
      price={product.price}
      pricesale={product.discountPercentage}
      vote={true}/>
    </div>
  ))
  return (
  <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {Cards}
      </div>
    </div>
  </section>
  )
}

export default Section