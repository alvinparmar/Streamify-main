import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";
import Watch from "../watch/Watch";

const Home = ({ type, setGenre }) => {
  const [lists, setLists] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        axios.defaults.baseURL = "http://localhost:8800/api/";
        const res = await axios.get(`lists${type ? "?type=" + encodeURIComponent(type) : ""}`, {
          // Ensure that your API endpoint supports the 'type' query parameter
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzQ1YTI2NWQ2OTdlZTZhNGQ2M2FmMSIsImlhdCI6MTcxMTQyNDMyMywiZXhwIjoxNzExODU2MzIzfQ.pQNbc04i2pNnh63feiCvW-g3sVKS75eoIfE9-qJRSE0"
          }
        });
        console.log(res.data);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type]);

  const handleHover = (movie) => {
    setHoveredMovie(movie);
  };

  const handleMouseLeave = () => {
    setHoveredMovie(null);
  };

  return (
    <div className="home">
      <Navbar />
      {/* Ensure that 'type' is passed to the Featured component */}
      <Featured type={type} setGenre={setGenre} />
      {lists.length > 0 ? (
        lists.map((list) => (
          <List key={list._id} list={list} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} />
        ))
      ) : (
        <p>Loading...</p>
      )}
  
    </div>
  );
};

export default Home;
