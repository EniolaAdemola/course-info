import React from 'react'
import { useStepInfoContext } from '../../context/ContextProvider';
import "./steps.scss"
import {levels} from "../../assets/data"
import { Link } from 'react-router-dom';


const Step3 = () => {
  const { activeStyle, setActiveStyle, userDetails, setUserDetails, handleChange } = useStepInfoContext();
  
  return (
    <div className='level'>
      <h2>Very Good {userDetails.userName}!, Lastly pick a Level? </h2>
      <div className='level__container'>
        {
          levels.map(({id, userLevel}) => {
            return (
               <Link to="/display-info" key={id}>
                <p  onClick={() => {
                    setUserDetails((prevValue) => {
                      return {
                        ...prevValue,
                        ['level']: userLevel,
                      };
                    });
                  }}>{userLevel}</p>
               </Link>
            )
          })
        }
      </div>
      {console.log((userDetails))}
    </div>
  )
}

export default Step3