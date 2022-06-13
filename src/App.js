import "./App.css";
import { Header } from "./components";
import React  from "react";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router";
import {setPizzas, fetchPizzas} from './redux/actions/pizzas';
import {useSelector, useDispatch} from 'react-redux';


function App() {

	const dispatch = useDispatch();

	React.useEffect(() => {
		
	}, []);

	return (
		<div>
			<div className="wrapper">
				<Header />
				<div className="content">
				<Routes>
						<Route path="/" element={<Home/>} exact />
						<Route path="/Cart" element={<Cart />} exact />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;



