/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import {
	AboutPage,
	DetailMediaPage,
	ContactPage,
	DetailPage,
	FashionPage,
	HomePage,
	RightSideBarPage,
	LeftSideBarPage,
	NoSideBarPage,
	CompactPage,
	DividedPage,
	CategoryPage,
	BeautyPage,
	InspirationPage,
	TravelOnePage,
	TravelTwoPage,
} from "./Page";
import {
	BeautyThreeComponent,
	BeautyTwoComponent,
	HomePage2Component,
	HomeSectionComponent,
	InspirationTwoComponent,
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
				<Route path="contact" element={<ContactPage />} />
				<Route path="rightside" element={<RightSideBarPage />} />
				<Route path="leftside" element={<LeftSideBarPage />} />
				<Route path="noside" element={<NoSideBarPage />} />
				<Route path="compact" element={<CompactPage />} />
				<Route path="divided" element={<DividedPage />} />
				<Route path="category" element={<CategoryPage />} />
				<Route path="beauty" element={<BeautyPage />} />
				<Route path="beauty-two" element={<BeautyTwoComponent />} />
				<Route path="inspiration-two" element={<InspirationTwoComponent />} />
				<Route path="beauty-three" element={<BeautyThreeComponent />} />
				<Route path="inspiration" element={<InspirationPage />} />
				<Route path="travel" element={<TravelOnePage />} />
				<Route path="travel-two" element={<TravelTwoPage />} />
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
