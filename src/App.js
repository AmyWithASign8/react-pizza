import "./App.css";
import { Header } from "./components";
import React, { useEffect } from "react";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router";
import axios from 'axios';
import store from './redux/store';
function App() {

	const [pizzas, setPizzas] = React.useState([]);

	React.useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({data}) => {setPizzas(data.pizzas);})
	}, []);

	console.log(pizzas);
	return (
		<div>
			<div className="wrapper">
				<Header />
				<div className="content">
				<Routes>
						<Route path="/" element={<Home items={pizzas}/>} exact />
						<Route path="/Cart" element={<Cart />} exact />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
