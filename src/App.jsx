/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import { AboutPage, DetailMediaPage, DetailPage, FashionPage, HomePage } from "./Page";
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
				<Route path="detailmedia/:id" element={<DetailMediaPage />} />
				<Route path="lifestyle" element={<LifeStyleComponent />} />
				<Route path="fashion" element={<FashionPage />} />
				<Route path="about" element={<AboutPage />} />
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
