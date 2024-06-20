/** @format */

import React from "react";
import { motion } from "framer-motion";
import NavigationHomeSectionComponent from "./NavigationHomeSection.component";
import {
	useGetBeautyThreeQuery,
	useGetBeautyTwoQuery,
} from "../service/endpoints/BlogEndpints";
import { useNavigate } from "react-router-dom";
import AboutTwoComponent from "./AboutTwo.component";
import ContainerComponent from "./Container.component";
import InstagramComponent from "./Instagram.component";
import FooterComponent from "./Footer.component";

const BeautyThreeComponent = () => {
	const { data, isLoading } = useGetBeautyThreeQuery();
	const nav = useNavigate();

	const handleBeauty = () => {
		nav("/beauty-two");
	};

	const handleDetail = (id) => {
		nav(`/detail/${id}`);
	};
	return (
		<div>
			<NavigationHomeSectionComponent />

			<ContainerComponent>
				<div className="flex my-20  items-start gap-10">
					<div className="w-[80%] flex items-center flex-wrap gap-10 ">
						{data?.map((item) => (
							<div
								key={item?.id}
								onClick={() => handleDetail(item?.id)}
								className="   w-[45%] h-[520px]">
								<div className="relative  overflow-hidden">
									<motion.img
										src={item?.image}
										alt="Your image"
										className="w-full object-cover h-[360px]"
										initial={{ scale: 1.05 }}
										whileHover={{ scale: 1.06, y: -5 }}
										transition={{ duration: 0.5 }}
									/>
								</div>

								<div className="cursor-pointer flex flex-col items-center gap-3 py-5">
									<div className="flex   duration-1000 group   select-none items-center text-center justify-center   m-auto gap-5 ">
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
										<h1 className="  tracking-[2px]   group-hover:text-pink-300 text-[#FFD0D0] text-center font-serif text-xs ">
											{item?.type}
										</h1>
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
									</div>

									<p className=" text-xl   line-clamp-1 tracking-wider  text-wrap  w-full text-gray-950 text-center ">
										{item?.name}
									</p>

									<h1 className="   font-serif text-xs tracking-[3px] text-gray-500   text-center   ">
										{item?.date}
									</h1>
								</div>
							</div>
						))}

						{/* Another Page */}
						<div className=" font-serif  flex items-center gap-7 justify-center mx-auto ">
							<motion.svg
								whileHover={{ x: -10 }}
								transition={{ duration: 0.1 }}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								onClick={handleBeauty}
								className="w-6 text-gray-500  cursor-pointer  duration-700 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 19.5 8.25 12l7.5-7.5"
								/>
							</motion.svg>

							<p className=" hover:text-gray-500 cursor-pointer  duration-1000 text-center">
								1
							</p>
							<p className=" hover:text-gray-500 cursor-pointer  duration-1000 text-center">
								2
							</p>

							<p className="text-gray-500  cursor-pointer text-center">3</p>
						</div>
					</div>

					<AboutTwoComponent />
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default BeautyThreeComponent;
