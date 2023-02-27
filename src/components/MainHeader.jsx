import React from 'react'
import { Link } from 'react-router-dom'
import Image from "../assets/images/image.png"

const MainHeader = () => {
  return (
    <header className="main__header">
			<div className="main__header-container">
				<div
					className="main__header-left"
				>
					<h1>Worried about your course information ?</h1>
					<p>
						COURSEINFO provides you with information about the course you are offering in the university.
					</p>
					<Link to="/check-info" className="btn lg">
						Check My COURSEINFO - it's free
					</Link>
				</div>
				<div className="main__header-right">
					<div
						className="main__header-image"
					>
						<img src={Image} alt="MainHeaderImage" />
					</div>
				</div>
			</div>
		</header>
  )
}

export default MainHeader