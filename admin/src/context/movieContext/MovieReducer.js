const MovieReducer = (state, action) => {
	switch (action.type) {
	  case "GET_MOVIES_START":
		return {
		  ...state,
		  movies: [],
		  isFetching: true,
		  error: false,
		};
	  case "GET_MOVIES_SUCCESS":
		return {
		  ...state,
		  movies: action.payload,
		  isFetching: false,
		  error: false,
		};
	  case "GET_MOVIES_FAILURE":
		return {
		  ...state,
		  movies: [],
		  isFetching: false,
		  error: true,
		};
	  case "CREATE_MOVIE_START":
		return {
		  ...state,
		  isFetching: true,
		  error: false,
		};
	  case "CREATE_MOVIE_SUCCESS":
		return {
		  ...state,
		  movies: [...state.movies, action.payload],
		  isFetching: false,
		  error: false,
		};
	  case "CREATE_MOVIE_FAILURE":
		return {
		  ...state,
		  isFetching: false,
		  error: true,
		};
	  case "DELETE_MOVIE_START":
		return {
		  ...state,
		  isFetching: true,
		  error: false,
		};
	  case "DELETE_MOVIE_SUCCESS":
		return {
		  ...state,
		  movies: state.movies.filter((movie) => movie._id !== action.payload),
		  isFetching: false,
		  error: false,
		};
	  case "DELETE_MOVIE_FAILURE":
		return {
		  ...state,
		  isFetching: false,
		  error: true,
		};
	  case "UPDATE_MOVIE_START":
		return {
		  ...state,
		  isFetching: true,
		  error: false,
		};
	  case "UPDATE_MOVIE_SUCCESS":
		const updatedMovies = state.movies.map((movie) =>
		  movie._id === action.payload._id ? action.payload : movie
		);
		return {
		  ...state,
		  movies: updatedMovies,
		  isFetching: false,
		  error: false,
		};
	  case "UPDATE_MOVIE_FAILURE":
		return {
		  ...state,
		  isFetching: false,
		  error: true,
		};
	  default:
		return { ...state };
	}
  };
  
  export default MovieReducer;
  