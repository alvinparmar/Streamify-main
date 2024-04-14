import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import "./watch.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Watch() {
	const location = useLocation();
	console.log("Location:", location);
	const movie = location.movie;

	return (
		<div className="watch">
			<Link to="/">
				<div className="back">
					<ArrowBackOutlined />
					Home
				</div>
			</Link>
			<video
				className="video"
				autoPlay
				controls
				src="../public/1711686483960videoJohn Wick_ Chapter 5 - Official Trailer (2024) _ Keanu Reeves.mp4"
			/>
		</div>
	);
}
