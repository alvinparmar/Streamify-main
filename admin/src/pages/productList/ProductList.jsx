import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function ProductList() {
	const { movies, dispatch } = useContext(MovieContext);

	useEffect(() => {
		getMovies(dispatch);
	}, [dispatch]);

	const handleDelete = (id) => {
		deleteMovie(id, dispatch);
	};

	const columns = [
		{ field: "_id", headerName: "ID", width: 90 },
		{
			field: "movie",
			headerName: "Movie",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img className="productListImg" src={params.row.img} alt="" />
						{params.row.title}
					</div>
				);
			},
		},

		{ field: "genre", headerName: "Genre", width: 120 },
		{ field: "year", headerName: "Year", width: 120 },
		{ field: "limit", headerName: "Limit", width: 120 },
		{ field: "isSeries", headerName: "Is Series", width: 120 },
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				console.log("Movie Object:", params.row);
				return (
					<>
						<Link to={`/product/find/${params.row._id}`}>
							<button>Edit</button>
						</Link>

						<DeleteOutline
							className="productListDelete"
							onClick={() => handleDelete(params.row._id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className="productList">
			<Link to="/newproduct">
				<button className="productAddButton">Create</button>
			</Link>
		
			<DataGrid
				rows={movies}
				disableSelectionOnClick
				columns={columns}
				pageSize={15}
				checkboxSelection
				getRowId={(r) => r._id}
			/>
		</div>
	);
}
