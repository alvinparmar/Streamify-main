import {
	createMovieFailure,
	createMovieStart,
	createMovieSuccess,
	getMoviesStart,
	getMoviesFailure,
	getMoviesSuccess,
	deleteMovieStart,
	deleteMovieSuccess,
	deleteMovieFailure,
	updateMovieStart,
	updateMovieFailure,
	updateMovieSuccess
} from "../movieContext/MovieActions";
// import axios from "axios";

// export const getMovies = async (dispatch) => {
// 	dispatch(getMoviesStart());
// 	try {
// 		const res = await axios.get("/movies", {
// 			headers: {
// 				token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
// 			},
// 		});
// 		dispatch(getMoviesSuccess(res.data));
// 	} catch (err) {
// 		dispatch(getMoviesFailure());
// 	}
// };

// //create
// export const createMovie = async (movie, dispatch) => {
// 	dispatch(createMovieStart());
// 	try {
// 		const res = await axios.post("/movies", movie, {
// 			headers: {
// 				token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
// 			},
// 		});
// 		dispatch(createMovieSuccess(res.data));
// 	} catch (err) {
// 		dispatch(createMovieFailure());
// 	}
// };

// //delete
// export const deleteMovie = async (id, dispatch) => {
// 	dispatch(deleteMovieStart());
// 	try {
// 		await axios.delete("/movies/" + id, {
// 			headers: {
// 				token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
// 			},
// 		});
// 		dispatch(deleteMovieSuccess(id));
// 	} catch (err) {
// 		dispatch(deleteMovieFailure());
// 	}

// };


import axios from "axios";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies");
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post("/movies", movie);
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete("/movies/" + id);
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};
// Update
export const updateMovie = async (id, updatedMovie, dispatch) => {
	dispatch(updateMovieStart());
	try {
	  const res = await axios.put("/movies/" + id, updatedMovie);
	  dispatch(updateMovieSuccess(res.data));
	} catch (err) {
	  dispatch(updateMovieFailure());
	}
  };