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
              <p>A website where you get to know more about a particular course from anywhere in the world without explicitly being a student or registering for that course.</p>
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
              We are a group of computing science students from the 2019/2020 set of Osun State University who have developed an innovative web-based system using the latest best practices in website development.
              </p>
        </div>
      </div>
    </section>
  )
}

export default About