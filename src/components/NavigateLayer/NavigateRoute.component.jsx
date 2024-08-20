/** @format */

import React from "react";
import ContainerComponent from "../Container.component";
import { useNavigate } from "react-router-dom";

const NavigateRouteComponent = ({ Route1,path }) => {
	const nav = useNavigate();

	const navRoute = (url) => {
		nav(url);
	};
	return (
		<div className="bg-pink-50 mb-8">
			<ContainerComponent>
				<h1 className="  text-gray-500 text-xs space-x-3 tracking-[2.5px] font-serif py-10 ">
					<span
						onClick={() => navRoute("/HomeSection")}
						className=" cursor-pointer hover:text-gray-700 duration-1000 ">
						HOME
					</span>
					<span>|</span>
					<span
						onClick={() => navRoute(path)}
						className="   cursor-pointer hover:text-gray-700 duration-1000 ">
						{Route1}
					</span>
				</h1>
			</ContainerComponent>
		</div>
	);
};

export default NavigateRouteComponent;
