import ListReducer from "./ListReducer";
import { createContext, useReducer } from "react";
const INITIAL_STATE = {
	lists: [],
	isFetching: false,
	error: false,
};
export const ListContext = createContext(INITIAL_STATE);

//Provider
export const ListContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE);

	return (
		<ListContext.Provider
			value={{
				lists: state.lists,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</ListContext.Provider>
	);
};

// import ListReducer from "./MovieReducer";
// import { createContext, useReducer } from "react";

// const INITIAL_STATE = {
//   movies: [],
//   isFetching: false,
//   error: false,
// };

// export const MovieContext = createContext(INITIAL_STATE);

// //Provider
// export const MovieContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

//   return (
//     <MovieContext.Provider
//       value={{
//         movies: state.movies,
//         isFetching: state.isFetching,
//         error: state.error,
//         dispatch,
//       }}
//     >
//       {children}
//     </MovieContext.Provider>
//   );
// };
