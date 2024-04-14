import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import List from "./pages/list/List";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import { Link } from "react-router-dom/cjs/react-router-dom";
import NewList from "./pages/newList/NewList";
import ListList from "./pages/listList/ListList";
function App() {
	const { user } = useContext(AuthContext);
	return (
		<Router>
			<Switch>
				<Route exact path="/login">
			<Login />
				</Route>
				{user && (
					<>
						<Topbar />
						<div className="container">
							<Sidebar />

							<Route exact path="/">
								<Home />
							</Route>

							<Route path="/users">
								<UserList />
							</Route>
							<Route path="/user/:userId">
								<User />
							</Route>
							<Route path="/newUser">
								<NewUser />
							</Route>
							<Route path="/movies">
								<ProductList />
							</Route>

							<Route path="/product/:id">
								<Product />
							</Route>
							<Route path="/newproduct">
								<NewProduct />
							</Route>
							<Route path="/lists">
								<ListList />
							</Route>

							<Route path="/list/:id">
								<List />
							</Route>
							<Route path="/newlist">
								<NewList />
							</Route>
						</div>
					</>
				)}
			</Switch>
		</Router>
	);
}

export default App;
