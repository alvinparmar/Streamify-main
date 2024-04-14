export const loginStart = () => ({
	type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
	type: "LOGIN_SUCCESS",
	payload: user,
});
export const loginFailure = () => ({
	type: "LOGIN_FAILURE",
});

// LogOut

// export const logout = () => ({
// 	type: "LOGOUT",
// });
export const logout = (navigate) => {
	return (dispatch) => {
	  // Perform any additional cleanup or API calls if needed
	  
	  // Dispatch the logout action
	  dispatch({ type: "LOGOUT" });
  
	  // Redirect to the login page
	  navigate('/login');
	};
  };
  