import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import { socialIcons, terms } from "../../assets/data";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<hr />
				<div className="footer__container">
					<Link to="/" className="logo">
						<h1>
							COU<span>RSE</span>INFO
						</h1>
					</Link>
					<ul className="terms">
						{terms.map(({ id, text,path }) => {
							return (
                <Link key={id} to={path}>
                  <li>{text}</li>
                </Link>
              );
						})}
					</ul>
					<div className="socials__container">
						<p className="mail">hello@courseinfo.co</p>
						<div className="footer__socials">
							{socialIcons.map(({ id, icon, link }) => {
								return (
									<a
										key={id}
										href={link}
										target="_blank"
										rel="noreferrer noopener"
									>
										{icon}
									</a>
								);
							})}
						</div>
						<p>&copy; 22/23 (CSC401 - Software Development) <br/> Group 3. All Rights Reserved</p>
					</div>
					<p className="footer__end">
						Over <span>120,000+ Students</span> have checked
						their course information on our website
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;