import React from 'react'
import { useStepInfoContext } from '../../context/ContextProvider';
import "./steps.scss"

const Steps = () => {
  const { activeStyle, setActiveStyle } = useStepInfoContext();

  return (
    <div className="steps__container">
    {/* Mapped the length passed as props to an array then use that to render steps */}
			{[...Array(3)].map((_, i) => {
				return (
					<div
						key={i}
						className={`steps__container-value ${
							i + 1 === activeStyle ? "pending" : i < activeStyle ? "done" : ""
						}`}
						// onClick={() => setActiveStyle(i + 1)} //comment out for testing the steps(dev mode)
					>
					  <div className="step__circle">{i+1}</div>
            <div className={`step__line ${i+1 === 3 ? "none" : ""}`}></div>
					</div>
				);
			})}
    </div>
  )
}

export default Steps