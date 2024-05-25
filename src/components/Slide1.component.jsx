/** @format */

import React from "react";
import ContainerComponent from "./Container.component";
import { motion } from "framer-motion";

import { useGetSlider1Query } from "../service/endpoints/BlogEndpints";
import SlideLoadingComponent from "./SlideLoading.component";
import { useNavigate } from "react-router-dom";

const Slide1Component = () => {
	const { data, isLoading } = useGetSlider1Query();
	const nav = useNavigate();

	const handleDetail = (id) => {
		nav(`detail/${id}`);
	};

	return (
		<div className=" w-full mb-32">
			<ContainerComponent>
				{isLoading ? (
					<SlideLoadingComponent />
				) : (
					<div className="flex items-center gap-10  ">
						{data?.map((item) => (
							<div
								onClick={() => handleDetail(item?.id)}
								key={item?.id}
								className="   w-[50%] h-auto">
								<div className="relative  overflow-hidden">
									<motion.img
										src={item?.image}
										alt="Your image"
										className="w-full h-full"
										initial={{ scale: 1.05 }}
										whileHover={{ scale: 1.06, y: -5 }}
										transition={{ duration: 0.5 }}
									/>
								</div>

								<div className=" flex flex-col items-center gap-4 py-5">
									<div className="flex  duration-1000 group  mt-3  select-none items-center text-center justify-center   m-auto gap-5 ">
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
										<h1 className="  tracking-[2px]   group-hover:text-pink-300 text-[#FFD0D0] text-center font-serif text-xs ">
											{item?.type}
										</h1>
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
									</div>

									<p className=" text-3xl  text-wrap  tracking-[2px] text-gray-950 text-center ">
										{item?.name}
									</p>

									<p className=" text-md  text-wrap  tracking-[2px] text-gray-600 text-center ">
										{item?.description}
									</p>

									<h1 className=" mt-3 hover:text-pink-200 duration-700  hover:font-medium   cursor-pointer  font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
										{item?.writer}
									</h1>
								</div>
							</div>
						))}
					</div>
				)}
			</ContainerComponent>
		</div>
	);
};

export default Slide1Component;
