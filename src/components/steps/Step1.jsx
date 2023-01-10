import React from 'react'
import { useStepInfoContext } from '../../context/ContextProvider';
import "./steps.scss"


const Step1 = () => {
  const { activeStyle, setActiveStyle, userDetails, handleChange } = useStepInfoContext();

  return (
    <div className="step1__container">
      <h2>What should we approach you as?</h2>
      <div className="name__container">
        <input onChange={handleChange} type="text" placeholder="David" name="userName" value={userDetails.userName} required/>
        {userDetails.userName !== "" && <button
            type="submit"
            onClick={()=>setActiveStyle(activeStyle+1)}
          >
            Next
          </button>}
      </div>
    </div>
  )
}

export default Step1