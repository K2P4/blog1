/** @format */

import React from "react";
import {
	AboutOneComponent,
	NavigationHomeSectionComponent,
} from "../components";

const AboutPage = () => {
	return (
		<div className="h-[5000px]">
			<NavigationHomeSectionComponent />
			<img
				className=" w-full zoom-infinite  h-[300px] object-cover mx-auto   "
				src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/h5-rev-img-1.jpg"
				alt=""
			/>

			<div className="">
				<AboutOneComponent />
			</div>
		</div>
	);
};

export default AboutPage;
