import "./App.css";
import { Header } from "./components";
import React  from "react";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router";
import Footer from "./components/Footer";



function App() {

	

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
				<Footer/>
			</div>
			
		</div>
	);
}

export default App;



