import React from 'react'
import { useStepInfoContext } from '../../context/ContextProvider';
import "./display-info.scss"
import Image1 from "../../assets/images/100L-1st.PNG"
import Image2 from "../../assets/images/100L-1st.PNG"
import Image3 from "../../assets/images/200L-1st.PNG"
import Image4 from "../../assets/images/200L-2nd.PNG"
import Image5 from "../../assets/images/300L-1st.PNG"
import Image6 from "../../assets/images/300L-2nd.PNG"
import Image7 from "../../assets/images/400L-1st.PNG"
import { Link } from 'react-router-dom';
 
const DisplayInfo = () => {
  const { setActiveStyle, userDetails } = useStepInfoContext();

  return (
    <section className='container display__info'>
      <p>Hey <span>{userDetails.userName}!</span> As a <span>{userDetails.courseOfStudy}</span> student, the courses you would be offering for <span>{userDetails.level}</span> 1st semester and 2nd semester are as follows: </p>
      {userDetails.level === "100L" && <div className='course__container flex'>
        <img src={Image1} alt="100L-1st"/>
        <img src={Image2} alt="100L-2nd"/>
      </div>}
      {userDetails.level === "200L" && <div className='course__container flex'>
        <img src={Image3} alt="200L-1st"/>
        <img src={Image4} alt="200L-2nd"/>
      </div>}
      {userDetails.level === "300L" && <div className='course__container flex'>
        <img src={Image5} alt="300L-1st"/>
        <img src={Image6} alt="300L-2nd"/>
      </div>}
      {userDetails.level === "400L" && <div className='course__container flex'>
        <img src={Image7} alt="400L-1st"/>
        400L-2nd semester not uploaded yet
        {/* <img src={Image8} alt="400L-2nd"/> */}
      </div>}

      <Link to="/" className="btn back__home" onClick={()=>setActiveStyle(1)}>Back Home</Link>
    </section>
  )
}

export default DisplayInfo