import React, { useState } from 'react'
import "./check-info.scss"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom'
import Steps from '../../components/steps/Steps';
import Step1 from '../../components/steps/Step1';
import Step2 from '../../components/steps/Step2';
import Step3 from '../../components/steps/Step3';
import { useStepInfoContext } from '../../context/ContextProvider';


const CheckInfo = () => {
	const { activeStyle, setActiveStyle } = useStepInfoContext();

  return (
    <div>
      <div className="container courseinfo__step">
				<div className="top">
					{activeStyle === 1 && (
						<Link to="/">
							<span>
								<AiOutlineArrowLeft />
							</span>
						</Link>
					)}
					<div className="steps__container">
						<Steps length={3} />
					</div>
				</div>
				<div className="bottom">
					{/* check context to apply active style */}
					{activeStyle === 1 && (
						<Step1 text="What type of Building are you calculating for?" />
					)}
					{activeStyle === 2 && (
						<Step2 text="Tell us the State and City the Bulding is located" />
					)}
					{activeStyle === 3 && <Step3 />}
				</div>
			</div>
    </div>
  )
}

export default CheckInfo