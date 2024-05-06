/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import { DetailPage, HomePage } from "./Page";
import { NavComponent } from "./components";

const App = () => {
	return (
		<div className="bg-[#FEFAF6]">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/detail/:id" element={<DetailPage />} />
			</Routes>
		</div>
	);
};

export default App;
