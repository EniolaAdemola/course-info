import React from 'react'
import { useStepInfoContext } from '../../context/ContextProvider';

const Step2 = () => {
  const { activeStyle, setActiveStyle, userDetails, handleChange } = useStepInfoContext();
  

  return (
    <div className='courseofstudy'>
    <h2 htmlFor="department">Hey {userDetails.userName}, kindly choose your course of study?</h2>
    {/* Course of study is automatically Computer science from the context provider */}
    <select name="courseOfStudy" id="department" onChange={handleChange}>
      <option value="N/A">N/A</option>
      <option value="Computer Science" required>Computer science</option>
      {/* <option value="Moore Science" required>More science</option> */}
    </select>
    {userDetails.courseOfStudy !== "" && <button
					type="submit"
          onClick={()=> setActiveStyle(activeStyle+1)}
				>
					Next
          
		</button>}
    </div>
  )
}

export default Step2