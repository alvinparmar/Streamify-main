import React, { useContext, useState } from "react";
import "./navbar.scss";
import "../../app.scss";
import { Link,useNavigate} from "react-router-dom";

import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
	const navigate = useNavigate();
	const [isScrolled, setIsScrolled] = useState(false);
	const { dispatch } = useContext(AuthContext);
	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};
	const handleLogout = () => {
		// Perform any additional cleanup or API calls if needed
		
		// Dispatch the logout action
		dispatch(logout());
	
		// Redirect to the login page
		navigate('/login');
	  };
	return (
		<div className={isScrolled ? "navbar scrolled" : "navbar"}>
			<div className="container">
				<div className="left">
					<img src="../public/s.png" alt="" />
					<Link to="/" className="link">
						{" "}
						<span>Homepage</span>
					</Link>

					<Link to="/series" className="link">
						<span>Series</span>
					</Link>
					<Link to="/movies" className="link">
						{" "}
						<span>Movies</span>
					</Link>
					{/* <Link className="link">
						{" "}
						<span>New and Popular</span>
					</Link> */}
					{/* <Link className="link">
						{" "}
						<span>My List</span>
					</Link> */}
				</div>

				<div className="right">
					<Search className="icon" />

					<img src="../public/user.png" />
					<div className="profile">
						<ArrowDropDown className="icon" />
						<div className="options">
							<span>Settings</span>
							<span onClick={handleLogout}>Logout</span>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
