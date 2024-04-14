import axios from "axios";
import {
	deleteUserFailure,
	deleteUserStart,
	deleteUserSuccess,
	getUsersFailure,
	getUsersStart,
	getUsersSuccess,
	updateUserFailure,
	updateUserStart,
	updateUserSuccess,
} from "./UserActions";

export const getUsers = async (dispatch) => {
	dispatch(getUsersStart());
	try {
		const res = await axios.get("/users");
		dispatch(getUsersSuccess(res.data));
	} catch (err) {
		dispatch(getUsersFailure());
	}
};

// //delete
export const deleteUser = async (id, dispatch) => {
	dispatch(deleteUserStart());
	try {
		await axios.delete("/users/" + id);
		dispatch(deleteUserSuccess(id));
	} catch (err) {
		dispatch(deleteUserFailure());
	}
};
// Update
export const updateUser = async (id, updatedUser, dispatch) => {
	dispatch(updateUserStart());
	try {
		const res = await axios.put("/users/" + id, updatedUser);
		dispatch(updateUserSuccess(res.data));
	} catch (err) {
		dispatch(updateUserFailure());
	}
};

// //create
// export const createList = async (list, dispatch) => {
// 	dispatch(createListsStart());
// 	try {
// 		const res = await axios.post("/lists", list);

// 		dispatch(createListsSuccess(res.data));
// 	} catch (err) {
// 		dispatch(createListsFailure());
// 	}
// };
