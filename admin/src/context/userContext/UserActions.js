export const getUsersStart = () => ({
	type: "GET_USERS_START",
});

export const getUsersSuccess = (Users) => ({
	type: "GET_USERS_SUCCESS",
	payload: Users,
});

export const getUsersFailure = () => ({
	type: "GET_USERS_FAILURE",
});

export const deleteUserStart = () => ({
	type: "DELETE_USER_START",
});

export const deleteUserSuccess = (id) => ({
	type: "DELETE_USER_SUCCESS",
	payload: id,
});

export const deleteUserFailure = () => ({
	type: "DELETE_USER_FAILURE",
});

export const updateUserStart = () => ({
	type: "UPDATE_USER_START",
});

export const updateUserSuccess = (User) => ({
	type: "UPDATE_USER_SUCCESS",
	payload: User,
});

export const updateUserFailure = () => ({
	type: "UPDATE_USER_FAILURE",
});

// export const createUsersStart = () => ({
// 	type: "CREATE_User_START",
// });

// export const createUsersSuccess = (User) => ({
// 	type: "CREATE_User_SUCCESS",
// 	payload: User,
// });

// export const createUsersFailure = () => ({
// 	type: "CREATE_User_FAILURE",
// });
