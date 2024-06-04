/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import { DetailPage, HomePage } from "./Page";
import {
	HomePage2Component,
	HomeSectionComponent,
	LifeStyleComponent,
	NavigationHomeSectionComponent,
} from "./components";

const App = () => {
	return (
		<div className="bg-[#FEFAF6]">
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route index element={<HomePage />} />
				</Route>
				<Route path="detail/:id" element={<DetailPage />} />
				<Route path="lifestyle" element={<LifeStyleComponent />} />
			</Routes>

			<Routes>
				<Route path="/HomeSection" element={<NavigationHomeSectionComponent />}>
					<Route index element={<HomeSectionComponent />} />
					<Route path="HomePage2" element={<HomePage2Component />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
