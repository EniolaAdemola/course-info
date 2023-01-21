import React from 'react'
import InfoSection from '../../components/InfoSection'
import MainHeader from '../../components/MainHeader'
import "./landing-page.scss"

const LandingPage = () => {
  return (
    <div className="container">
      <MainHeader/>
      <InfoSection/>
    </div>
  )
}

export default LandingPage