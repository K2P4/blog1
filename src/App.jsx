/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import { DetailPage, HomePage } from "./Page";
import { HomeSectionComponent, NavComponent } from "./components";

const App = () => {
	return (
		<div className="bg-[#FEFAF6]">
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route index element={<HomePage />} />
				</Route>
				<Route path="detail/:id" element={<DetailPage />} />
				<Route path="HomeSection" element={<HomeSectionComponent />} />
			</Routes>
		</div>
	);
};

export default App;
