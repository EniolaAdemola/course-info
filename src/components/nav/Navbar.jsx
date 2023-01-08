import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineClose } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";
import "./nav.scss"

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

	const handleNavToggle = () => {
		return setIsNavShowing((prevVAlue) => {
			return !prevVAlue;
		});
	};

  return (
    <nav>
      <div className='container nav__container'>
        <Link to="/" className='logo'>
          <h1>COU<span>RSE</span>INFO</h1>
        </Link>
        <ul
					className={` ${isNavShowing ? "nav__links show__nav" : "nav__links"}`}
				>
          <li>
            <Link to="developers" className='link' onClick={handleNavToggle}>Developers</Link>
          </li>
          <li>
            <Link to="about" className='link' onClick={handleNavToggle}>About</Link>
          </li>
				</ul>
        <button onClick={handleNavToggle} className="nav__toggle-btn">
					{isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
				</button>
      </div>
    </nav>
  )
}

export default Navbar