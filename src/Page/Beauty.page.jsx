/** @format */

import React from "react";
import {
	BeautyOneComponent,
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
} from "../components";
import { useNavigate } from "react-router-dom";
import InstagramComponent from "../components/Instagram.component";

const BeautyPage = () => {
	const nav = useNavigate();

	const navRoute = (path) => {
		nav(path);
	};
	return (
		<div>
			<NavigationHomeSectionComponent />

			<div className="bg-pink-50 mb-8">
				<ContainerComponent>
					<h1 className="  m text-gray-500 text-xs space-x-3 tracking-[2.5px] font-serif py-10 ">
						<span
							onClick={() => navRoute("/HomeSection")}
							className=" cursor-pointer hover:text-gray-700 duration-1000 ">
							HOME
						</span>
						<span>|</span>
						<span
							onClick={() => navRoute("/contact")}
							className=" cursor-pointer hover:text-gray-700 duration-1000 ">
							BEAUTY
						</span>
					</h1>
				</ContainerComponent>
			</div>

			<ContainerComponent>
				<BeautyOneComponent />
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default BeautyPage;
