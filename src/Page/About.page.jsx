/** @format */

import React from "react";
import {
	AboutOneComponent,
	AboutTwoComponent,
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
} from "../components";
import InstagramComponent from "../components/Instagram.component";

const AboutPage = () => {
	return (
		<div className="">
			<NavigationHomeSectionComponent />
			<img
				className=" w-full zoom-infinite mb-20  h-[300px] object-cover mx-auto   "
				src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/h5-rev-img-1.jpg"
				alt=""
			/>

			<ContainerComponent>
				<div className="flex gap-12  mb-20 ">
					<AboutOneComponent />
					<AboutTwoComponent />
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default AboutPage;
