import React from 'react'
import { useStepInfoContext } from '../../context/ContextProvider';
import "./display-info.scss"

const DisplayInfo = () => {
  const { activeStyle, setActiveStyle, userDetails, handleChange } = useStepInfoContext();

  return (
    <div className='container'>
       <p>{userDetails.userName}</p>
       <p>{userDetails.courseOfStudy}</p>
       <p>{userDetails.level}</p>
    </div>
  )
}

export default DisplayInfo