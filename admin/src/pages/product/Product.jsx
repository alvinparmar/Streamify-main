import { Link,useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./product.css";

import storage from "../../firebase";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function Product() {
    const history = useHistory();
    const { movies, dispatch } = useContext(MovieContext);
    const id = window.location.pathname.split('/').pop();
    const [movie, setMovie] = useState({});
    const [updatedMovie, setUpdatedMovie] = useState({});
    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgSm, setImgSm] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setUploaded] = useState(0);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await axios.get(`/movies/find/${id}`);
                setMovie(res.data);
                setUpdatedMovie(res.data);
            } catch (error) {
                console.error("Error fetching movie:", error);
            }
        };

        fetchMovie();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (files) {
            if (name === "img") setImg(files[0]);
            else if (name === "imgTitle") setImgTitle(files[0]);
            else if (name === "imgSm") setImgSm(files[0]);
            else if (name === "trailer") setTrailer(files[0]);
            else if (name === "video") setVideo(files[0]);
        } else {
            setUpdatedMovie({ ...updatedMovie, [name]: value });
        }
    };

    const uploadFiles = async () => {
        try {
            const uploadTasks = [];
            const fileInputs = [
                { file: img, label: "img" },
                { file: imgTitle, label: "imgTitle" },
                { file: imgSm, label: "imgSm" },
                { file: trailer, label: "trailer" },
                { file: video, label: "video" }
            ];

            fileInputs.forEach((input) => {
                if (input.file) {
                    const fileName = new Date().getTime() + input.label + input.file.name;
                    const uploadTask = storage.ref(`/items/${fileName}`).put(input.file);
                    uploadTasks.push(uploadTask);
                    uploadTask.on(
                        "state_changed",
                        null,
                        console.error,
                        () => {
                            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                                setUpdatedMovie((prev) => ({ ...prev, [input.label]: url }));
                                setUploaded((prev) => prev + 1);
                            });
                        }
                    );
                }
            });

            await Promise.all(uploadTasks);
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await uploadFiles();
            // Update movie image URL in updatedMovie state
            setUpdatedMovie((prev) => ({ ...prev, img: updatedMovie.img }));
            // Dispatch action to update movie in context state
            dispatch({ type: "UPDATE_MOVIE_SUCCESS", payload: updatedMovie });
            // Update movie in the database
            await axios.put(`/movies/${id}`, updatedMovie);
            history.push("/productlist");
            // Handle success or navigate to a success page
        } catch (error) {
            console.error("Error updating movie:", error);
        }
    };



    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={updatedMovie.img} alt="" className="productInfoImg" />
                        <span className="productName">{movie.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID:</span>
                            <span className="productInfoValue">{movie._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">{movie.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Year:</span>
                            <span className="productInfoValue">{movie.year}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Limit:</span>
                            <span className="productInfoValue">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Movie Title</label>
                        <input type="text" placeholder={movie.title} name="title" onChange={handleChange} />
                        <label>Year</label>
                        <input type="text" placeholder={movie.year} name="year" onChange={handleChange} />
                        <label>Genre</label>
                        <input type="text" placeholder={movie.genre} name="genre" onChange={handleChange} />
                        <label>Limit</label>
                        <input type="text" placeholder={movie.limit} name="limit" onChange={handleChange} />
                        <label>Trailer</label>
                        <input type="file" name="trailer" onChange={handleChange} />
                        <label>Video</label>
                        <input type="file" name="video" onChange={handleChange} />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={updatedMovie.img} alt="" className="productUploadImg" />
                        
                            <input type="file" name="img" onChange={handleChange} />
                        </div>
                        <button className="productButton" onClick={handleUpdate}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
