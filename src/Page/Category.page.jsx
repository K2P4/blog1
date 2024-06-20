/** @format */

import React from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
} from "../components";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { parsePath, useNavigate } from "react-router-dom";

const CategoryPage = () => {
	const nav = useNavigate();

	const handleCategory = (path) => {
		nav(path);
	};
	return (
		<div>
			<NavigationHomeSectionComponent />

			<ContainerComponent>
				<div className="flex items-center my-28 gap-10 justify-center">
					<div
						onClick={() => handleCategory("/beauty")}
						className="relative w-[30%] h-[260px] overflow-hidden">
						<motion.img
							className="object-cover w-full"
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/category-img-1.jpg"
							alt="Your image"
							initial={{ scale: 1.05 }}
							whileHover={{ scale: 1.06, y: -3 }}
							transition={{ duration: 0.5 }}
						/>

						<Button className="   left-16 hover:bg-gray-50 duration-700 text-center  w-[60%]  absolute   select-text  rounded-none  top-[42%]  text-xs py-3 mx-auto   text-[#f3cccc]  bg-white tracking-[3px] font-serif">
							BEAUTY
						</Button>
					</div>

					<div
						onClick={() => handleCategory("/inspiration")}
						className="relative w-[30%] h-[260px] overflow-hidden">
						<motion.img
							className="object-cover w-full"
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/category-img-2.jpg"
							alt="Your image"
							initial={{ scale: 1.05 }}
							whileHover={{ scale: 1.06, y: -3 }}
							transition={{ duration: 0.5 }}
						/>

						<Button className="   left-16 hover:bg-gray-50 duration-700 text-center  w-[60%]  absolute   select-text  rounded-none  top-[42%]  text-xs py-3 mx-auto   text-[#f3cccc]  bg-white tracking-[3px] font-serif">
							INSPIRATION
						</Button>
					</div>

					<div
						onClick={() => handleCategory("/travel")}
						className="relative w-[30%] h-[260px] overflow-hidden">
						<motion.img
							className="object-cover w-full"
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/category-img-3.jpg"
							alt="Your image"
							initial={{ scale: 1.05 }}
							whileHover={{ scale: 1.06, y: -3 }}
							transition={{ duration: 0.5 }}
						/>

						<Button className="   left-16 hover:bg-gray-50 duration-700 text-center  w-[60%]  absolute   select-text  rounded-none  top-[42%]  text-xs py-3 mx-auto   text-[#f3cccc]  bg-white tracking-[3px] font-serif">
							TRAVEL
						</Button>
					</div>
				</div>
			</ContainerComponent>

			<FooterComponent />
		</div>
	);
};

export default CategoryPage;
