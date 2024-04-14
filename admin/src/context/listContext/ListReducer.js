const ListReducer = (state, action) => {
	switch (action.type) {
	  case "GET_LISTS_START":
		return {
		  
		  lists: [],
		  isFetching: true,
		  error: false,
		};
	  case "GET_LISTS_SUCCESS":
		return {
		  ...state,
		  lists: action.payload,
		  isFetching: false,
		  error: false,
		};
	  case "GET_LISTS_FAILURE":
		return {
		  ...state,
		  lists: [],
		  isFetching: false,
		  error: true,
		};
	  case "CREATE_LIST_START":
		return {
		  ...state,
		  isFetching: true,
		  error: false,
		};
	  case "CREATE_LIST_SUCCESS":
		return {
		  ...state,
		  lists: [...state.lists, action.payload],
		  isFetching: false,
		  error: false,
		};
	  case "CREATE_LIST_FAILURE":
		return {
		  ...state,
		  isFetching: false,
		  error: true,
		};
	  case "DELETE_LIST_START":
		return {
		  ...state,
		  isFetching: true,
		  error: false,
		};
	  case "DELETE_LIST_SUCCESS":
		return {
		  ...state,
		  lists: state.lists.filter((list) => list._id !== action.payload),
		  isFetching: false,
		  error: false,
		};
	  case "DELETE_LIST_FAILURE":
		return {
		  ...state,
		  isFetching: false,
		  error: true,
		};
	  case "UPDATE_LIST_START":
		return {
		  ...state,
		  isFetching: true,
		  error: false,
		};
	  case "UPDATE_LIST_SUCCESS":
		const updatedLists = state.lists.map((list) =>
		  list._id === action.payload._id ? action.payload : list
		);
		console.log("Updated List:", action.payload);
		return {
		  ...state,
		  lists: updatedLists,
		  isFetching: false,
		  error: false,
		};
	  case "UPDATE_LIST_FAILURE":
		return {
		  ...state,
		  isFetching: false,
		  error: true,
		};
	  default:
		return { ...state };
	}
  };
  
  export default ListReducer;
  