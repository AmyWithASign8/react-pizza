import "./App.css";
import { Header } from "./components";
import React from "react";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router";

function App() {
	return (
		<div>
			<div className="wrapper">
				<Header />
				<div className="content">
					<Routes>
						<Route path="Home" element={<Home />} exact />
						<Route path="Cart" element={<Cart />} exact />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
