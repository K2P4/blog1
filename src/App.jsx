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
	ColumnPage,
	ColumnThreePage,
	ColumnFourPage,
	ColumnFivePage,
	GalleryScanPage,
	VideoPage,
	QuotePage,
	LinkPage,
	AuthorPage,
	ArchiveCategoryPage,
	DatePage,
	ArchiveTagPage,
	ViewPostPage,
	ArchiveSearchPage,
	ShopListPage,
	ShopProductPage,
	ShopSinglePage,
	ShopAccountPage,
	CartPage,
	CheckoutPage,
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
import ColumnTwoPage from "./Page/Columns/ColumnTwo.page";

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
				<Route path="column-two" element={<ColumnTwoPage />} />
				<Route path="column-three" element={<ColumnThreePage />} />
				<Route path="column-four" element={<ColumnFourPage />} />
				<Route path="column-five" element={<ColumnFivePage />} />
				<Route path="gallery-scan" element={<GalleryScanPage />} />
				<Route path="video" element={<VideoPage />} />
				<Route path="quote" element={<QuotePage />} />
				<Route path="link" element={<LinkPage />} />
				<Route path="author" element={<AuthorPage />} />
				<Route path="archive-category" element={<ArchiveCategoryPage />} />
				<Route path="archive-tag" element={<ArchiveTagPage />} />
				<Route path="archive-date" element={<DatePage />} />
				<Route path="archive-view" element={<ViewPostPage />} />
				<Route path="archive-search" element={<ArchiveSearchPage />} />
				<Route path="shop-list" element={<ShopListPage />} />
				<Route path="shop-product/:id" element={<ShopProductPage />} />
				<Route path="shop-single" element={<ShopSinglePage />} />
				<Route path="shop-account" element={<ShopAccountPage />} />
				<Route path="shop-cart" element={<CartPage />} />
				<Route path="shop-checkout" element={<CheckoutPage />} />
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
