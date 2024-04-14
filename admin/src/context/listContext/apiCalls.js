import axios from "axios";
import {
	createListsFailure,
	createListsStart,
	createListsSuccess,
	getListsStart,
	getListsFailure,
	getListsSuccess,
	deleteListStart,
	deleteListSuccess,
	deleteListFailure,
	updateListStart,
	updateListFailure,
	updateListSuccess,
} from "../listContext/ListActions";
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

//create
export const createList = async (list, dispatch) => {
	dispatch(createListsStart());
	try {
		const res = await axios.post("/lists", list);
		//  {
		// 	headers: {
		// 		token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
		// 	},
		// }
		
		dispatch(createListsSuccess(res.data));
	} catch (err) {
		dispatch(createListsFailure());
	}
};

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

export const getLists = async (dispatch) => {
	dispatch(getListsStart());
	try {
		const res = await axios.get("/lists");
		dispatch(getListsSuccess(res.data));
	} catch (err) {
		dispatch(getListsFailure());
	}
};

//create
// export const createMovie = async (movie, dispatch) => {
//   dispatch(createMovieStart());
//   try {
//     const res = await axios.post("/movies", movie);
//     dispatch(createMovieSuccess(res.data));
//   } catch (err) {
//     dispatch(createMovieFailure());
//   }
// };

// //delete
export const deleteList = async (id, dispatch) => {
	dispatch(deleteListStart());
	try {
		await axios.delete("/lists/" + id);
		dispatch(deleteListSuccess(id));
	} catch (err) {
		dispatch(deleteListFailure());
	}
};
// Update
export const updateList = async (id, updatedList, dispatch) => {
	dispatch(updateListStart());
	try {
		const res = await axios.put("/lists/" + id, updatedList);
		dispatch(updateListSuccess(res.data));
	} catch (err) {
		dispatch(updateListFailure());
	}
};
