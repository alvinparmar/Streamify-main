import React from "react";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Featured({ type,setGenre }) {
	const [content, setContent] = useState({});

	useEffect(() => {
		const getRandomContent = async () => {
			try {
				const res = await axios.get(`/movies/random?type=${type}`, {
					headers: {
						token:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzQ1YTI2NWQ2OTdlZTZhNGQ2M2FmMSIsImlhdCI6MTcxMDk5MDExOCwiZXhwIjoxNzExNDIyMTE4fQ.fkObCVxxRjZtMj3yzC-H-VpxcZgGlTmdyC98NtQKfes",
					},
				});
				setContent(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getRandomContent();
	}, [type]);


	return (
		<div className="featured">
			{/* {type && (
				<div className="category">
					<span>{type == "movie" ? "Movies" : "Series"}</span>
					<select name="genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
						<option>Genre</option>
						<option value="action">Action</option>
						<option value="comedy">Comedy</option>
						<option value="drama">Drama</option>
						<option value="thriller">Thriller</option>
						<option value="sci-fi">Science Fiction</option>
						<option value="fantasy">Fantasy</option>
						<option value="romance">Romance</option>
						<option value="horror">Horror</option>
						<option value="mystery">Mystery</option>
					</select>
				</div>
			)} */}
			<img src={content.img} />
			<div className="info">
				
				<span className="desc">{content.desc}</span>
				<div className="buttons">
					<button className="play">
						<PlayArrow />
						<span >Play</span>
					</button>
					<button className="more">
						<InfoOutlined />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	);
}
