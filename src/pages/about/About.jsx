import React from 'react'
import "./about.scss"
import AboutImage from "../../assets/images/about.jpg"
import { Link } from 'react-router-dom'
import { aboutStory } from '../../assets/data'

const About = () => {
  return (
    <section>
        <div className='container about__section1'> 
          <div className='about__left'>
              <h1>About <Link to="/">COU<span>RSE</span>INFO</Link></h1>
              <p>December 2022, a group of computing science student, December 2022, a group of
               computing science student, December 2022. </p>
              <button className='btn-lg'><Link to="/check-info">Check my Info</Link></button>
          </div>
          <div className="about__right">
              <img src={AboutImage} alt='about__image'/>
          </div>
        </div>
      <div className="container about__section2">
        <h1>We're here because of you. <div className="headline"></div></h1>
        <div className="courseinfo__story">
        {
          aboutStory.map(({id, story}) => {
            return (
              <p key={id}>{story}</p>
            )
          })
        }
        </div>
        <h1>Who we are <div className="headline"></div></h1>
        <div className="courseinfo__story">
              <p>
                We empower individuals with access to course information, simple payments solutions, high-yield investment opportunities and easy-to-use tools for personal financial management. Carbon is headquartered in Lagos, Nigeria. We are a global company of over 90 employees with operations in Nigeria, Ghana and Kenya
              </p>
        </div>
      </div>
    </section>
  )
}

export default About