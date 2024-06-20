/** @format */

import React from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
} from "../components";
import InstagramComponent from "../components/Instagram.component";

const CompactPage = () => {
	return (
		<div>
			<NavigationHomeSectionComponent />

			<ContainerComponent>
				{/* Advertise One*/}
				<div className=" relative  my-28">
					<img
						className=" object-cover  "
						src="https://zoya.qodeinteractive.com/wp-content/uploads/2020/11/blog-list-img-16.jpg"
						alt=""
					/>
					<div className=" w-full left-1 duration-1000  absolute   slideContent flex items-center flex-col justify-center   bottom-10 mx-auto  ">
						<h1 className="  cursor-pointer text-6xl mt-6 mb-4  animate__fadeInUp  animate__animated  duration-1000   text-white w-full   text-center ">
							Be classy, be fashionable
						</h1>

						<h1 className="  text-stone-100 cursor-pointer font-medium  animate__fadeInUp  animate__animated  duration-1000 font-serif text-[13px] tracking-[2px]    text-center   ">
							<span className="hover:text-pink-100 duration-500">
								NOVEMBER 14, 2020
							</span>
							|{" "}
							<span className="hover:text-pink-100 duration-500">
								{" "}
								BY KATHERINE BISHOP
							</span>
						</h1>
					</div>
				</div>

				{/* Advertise Three*/}
				<div className=" relative  mb-28">
					<img
						className=" object-cover  "
						src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/02/blog-list-img-19.jpg"
						alt=""
					/>
					<div className=" w-full left-1 duration-1000  absolute   slideContent flex items-center flex-col justify-center   bottom-32 mx-auto  ">
						<h1 className="  cursor-pointer text-6xl mt-6 mb-4  animate__fadeInUp  animate__animated  duration-1000   text-white w-full   text-center ">
							Perfect New Year’s Eve outfits 2022
						</h1>

						<h1 className="  text-stone-100 cursor-pointer font-medium  animate__fadeInUp  animate__animated  duration-1000 font-serif text-[13px] tracking-[2px]    text-center   ">
							<span className="hover:text-pink-100 duration-500">
								FEBRUARY 14, 2021
							</span>
							|{" "}
							<span className="hover:text-pink-100 duration-500">
								{" "}
								BY KATHERINE BISHOP
							</span>
						</h1>
					</div>
				</div>
			</ContainerComponent>

            <InstagramComponent/>
            <FooterComponent/>
		</div>
	);
};

export default CompactPage;
