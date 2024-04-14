import React, { useEffect, useState } from "react";
import "./listItem.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzQ1YTI2NWQ2OTdlZTZhNGQ2M2FmMSIsImlhdCI6MTcxMTQyNDMyMywiZXhwIjoxNzExODU2MzIzfQ.pQNbc04i2pNnh63feiCvW-g3sVKS75eoIfE9-qJRSE0",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  const handleThumbUp = () => {
    setLiked(true);
    setDisliked(false);
  };

  const handleThumbDown = () => {
    setLiked(false);
    setDisliked(true);
  };

  const handleAddToList = () => {
    // Implement logic for add to list action here
    console.log("Add to list clicked");
  };

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.img} alt="" />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <Link
                to={{ pathname: "/watch", state: { movie: movie } }}
                style={{ textDecoration: "none" }}
              >
                <PlayArrow className="icon" />
              </Link>
              <Add className="icon" onClick={handleAddToList} />
              <ThumbUpAltOutlined
                className={`icon ${liked ? "liked" : ""}`}
                onClick={handleThumbUp}
              />
              <ThumbDownAltOutlined
                className={`icon ${disliked ? "disliked" : ""}`}
                onClick={handleThumbDown}
              />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}
