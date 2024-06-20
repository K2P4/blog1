/** @format */

import React from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
} from "../components";
import { Button } from "@/components/ui/button";
import InstagramComponent from "../components/Instagram.component";
import { useNavigate, useParams } from "react-router-dom";

const DividedPage = () => {
	const nav = useNavigate();
	const id = useParams();

	const handleDetail = (id) => {
		nav(`/detail/${id}`);
	};
	return (
		<div className="h-[5000px]">
			<NavigationHomeSectionComponent />

			<ContainerComponent>
				{/* Section One */}
				<div className="flex  h-[500px]  mt-20 mb-16 items-center ">
					<div className="w-[50%] mx-auto h-full bg-[#f9f9f9]   ">
						<div className="flex  h-0  mt-28  cursor-pointer  duration-1000 group   select-none items-center text-center justify-center  mx-auto gap-5 ">
							<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
							<h1 className="  tracking-[2.5px]  font-medium  group-hover:text-[#f5bebe] text-[#c7a5a5] text-center font-serif text-xs ">
								INTERIOR
							</h1>
							<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
						</div>

						<h1 className=" h-auto   text-[50px] w-[80%]   leading-[55px] mt-4 mb-5  tracking-wide text-gray-950 mx-auto text-center">
							Lovely & cheap indoor plants
						</h1>

						{/* header */}
						<h1 className=" mx-auto mb-8  cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
							<span className="hover:text-[#d8b8b8] duration-500">
								BY KATHERINE BISHOP
							</span>{" "}
						</h1>

						<Button
							onClick={() => handleDetail(71)}
							className=" flex justify-center  mx-auto  text-center cursor-pointer hover:bg-gray-800 hover:opacity-95    duration-300  text-xs    px-16 py-4 bg-black  rounded-none font-serif  tracking-[3px] ">
							READ MORE
						</Button>
					</div>

					<div className="w-[50%] h-full">
						<img
							className="w-full h-full object-cover"
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-list-img-47.jpg"
							alt=""
						/>
					</div>
				</div>

				{/* Section Two */}
				<div className="flex  h-[500px]  mb-20 items-center ">
					<div className="w-[50%] h-full">
						<img
							className="w-full h-full object-cover"
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/09/blog-list-img-34.jpg"
							alt=""
						/>
					</div>

					<div className="w-[50%] mx-auto h-full bg-[#f9f9f9]   ">
						<div className="flex  h-0  mt-28  cursor-pointer  duration-1000 group   select-none items-center text-center justify-center  mx-auto gap-5 ">
							<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
							<h1 className="  tracking-[2.5px]  font-medium  group-hover:text-[#f5bebe] text-[#c7a5a5] text-center font-serif text-xs ">
								INTERIOR
							</h1>
							<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
						</div>

						<h1 className=" h-auto   text-[50px] w-[80%]   leading-[55px] mt-4 mb-5  tracking-wide text-gray-950 mx-auto text-center">
							Best restaurants in Europe
						</h1>

						{/* header */}
						<h1 className=" mx-auto mb-8  cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
							<span className="hover:text-[#d8b8b8] duration-500">
								BY KATHERINE BISHOP
							</span>{" "}
						</h1>

						<Button
							onClick={() => handleDetail(72)}
							className=" flex justify-center  mx-auto  text-center cursor-pointer hover:bg-gray-800 hover:opacity-95    duration-300  text-xs    px-16 py-4 bg-black  rounded-none font-serif  tracking-[3px] ">
							READ MORE
						</Button>
					</div>
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default DividedPage;
