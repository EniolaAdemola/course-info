import React from 'react'
import { Link } from 'react-router-dom'
import {RiArrowRightSLine} from "react-icons/ri"

const InfoSection = () => {
  return (
    <section className='info__section'>
      <h1 className=''>Check my course information <div className="headline"></div></h1>
      <div className='info__section-container'>
         <Link className='box' to="/check-info">
            <h3>Check my course info</h3>
            <RiArrowRightSLine className='arrow'/>
         </Link>
         <Link className='box' to="/search-info">
            <h3>Search a course info</h3>
            <RiArrowRightSLine className='arrow'/>
         </Link>
      </div>
    </section>
  )
}

export default InfoSection