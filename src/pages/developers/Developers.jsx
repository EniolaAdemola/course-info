import React from 'react'
import "./developers.scss"
import Daveworld from "../../assets/images/DAVEWORLD.png"

const Developers = () => {
  return (
    <section>
      <div className="container developers__container">
        <h2>Meet our team<div className="headline"></div></h2>
        <div className="team__profiles-wrap">
          <div className="team__profile">
            <img src={Daveworld} alt="EniolaAdemola" className="courseinfo__team-member"/>
            <div className="team__profile-info">
              <p>Eniola Ademola</p>
              <p>SCRUM Manager / Developer</p>
            </div>
          </div>
          <div className="team__profile">
            <img src={Daveworld} alt="EniolaAdemola" className="courseinfo__team-member"/>
            <div className="team__profile-info">
              <p>Eniola Ademola</p>
              <p>SCRUM Manager / Developer</p>
            </div>
          </div>
          <div className="team__profile">
            <img src={Daveworld} alt="EniolaAdemola" className="courseinfo__team-member"/>
            <div className="team__profile-info">
              <p>Eniola Ademola</p>
              <p>SCRUM Manager / Developer</p>
            </div>
          </div>
          {/* <div></div> */}
          <div className="team__profile">
            <img src={Daveworld} alt="EniolaAdemola" className="courseinfo__team-member"/>
            <div className="team__profile-info">
              <p>Eniola Ademola</p>
              <p>SCRUM Manager / Developer</p>
            </div>
          </div>
          {/* <div></div> */}
          <div className="team__profile">
            <img src={Daveworld} alt="EniolaAdemola" className="courseinfo__team-member"/>
            <div className="team__profile-info">
              <p>Eniola Ademola</p>
              <p>SCRUM Manager / Developer</p>
            </div>
          </div>
          <div className="team__profile">
            <img src={Daveworld} alt="EniolaAdemola" className="courseinfo__team-member"/>
            <div className="team__profile-info">
              <p>Eniola Ademola</p>
              <p>SCRUM Manager / Developer</p>
            </div>
          </div>
          <div className="team__profile">
            <img src={Daveworld} alt="EniolaAdemola" className="courseinfo__team-member"/>
            <div className="team__profile-info">
              <p>Eniola Ademola</p>
              <p>SCRUM Manager / Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Developers