import React from 'react'
import "./developers.scss"
import Daveworld from "../../assets/images/DAVEWORLD.png"
import Ayo1 from "../../assets/images/ayo1.jpg"
import Ayo2 from "../../assets/images/ayo2.jpg"
import Samuel from "../../assets/images/samuel.jpg"
import Blank from "../../assets/images/blank.jpg"

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
            <img src={Ayo1} alt="GiwaAyomide" className="courseinfo__team-member"/>
            <div className="team__profile-info">
              <p>Giwa Ayomide</p>
              <p>Data manager / Content Writer</p>
            </div>
          </div>
          <div className="team__profile">
            <img src={Samuel} alt="MayeloyeSamuel" className="courseinfo__team-member"/>
            <div className="team__profile-info">
              <p>Mayeloye Samuel</p>
              <p>SDLC Manager</p>
            </div>
          </div>
          {/* <div></div> */}
          <div className="team__profile">
            <img src={Blank} alt="OlawuniPeace" className="courseinfo__team-member"/>
            <div className="team__profile-info">
              <p>Olawuni Peace</p>
              <p>Content Writer - 1</p>
            </div>
          </div>
          {/* <div></div> */}
          <div className="team__profile">
            <img src={Blank} alt="AYENIJOANAN" className="courseinfo__team-member"/>
            <div className="team__profile-info">
              <p>AYENI OPEYEMI JOANAN</p>
              <p>UIUX Designer</p>
            </div>
          </div>
          <div className="team__profile">
            <img src={Ayo2} alt="ODUNUGAAYOMIDE" className="courseinfo__team-member"/>
            <div className="team__profile-info">
              <p>ODUNUGA AYOMIDE</p>
              <p>Content Writer - 2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Developers