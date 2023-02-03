import React from 'react'
import { Link } from 'react-router-dom'

const InfoSection = () => {
  return (
    <section className='info__section'>
      <h1 className=''>Check my course information <div className="headline"></div></h1>
      <div className='info__section-container'>
         <Link className='box' to="/check-info">

         </Link>
         <Link className='box' to="/search-info">

         </Link>
      </div>
    </section>
  )
}

export default InfoSection