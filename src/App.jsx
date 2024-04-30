/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import { HomePage } from "./Page";
import { NavComponent } from "./components";

const App = () => {
	return (
		<div className="bg-[#FEFAF6]">
			<NavComponent />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default App;
