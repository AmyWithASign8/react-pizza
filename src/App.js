import "./App.css";
import { Header } from "./components";
import React, { useEffect } from "react";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router";

function App() {

	const [pizzas, setPizzas] = React.useState([]);

	React.useEffect(() => {
		fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
			setPizzas(json.pizzas);
		})
	}, []);

	console.log(pizzas);
	return (
		<div>
			<div className="wrapper">
				<Header />
				<div className="content">
					<Routes>
						<Route path="/Home" element={<Home items={pizzas}/>} exact />
						<Route path="/Cart" element={<Cart />} exact />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
