/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import ContainerComponent from "./Container.component";
import { useGetLatestQuery } from "../service/endpoints/BlogEndpints";
import { motion } from "framer-motion";
import BlogLoadingComponent from "./BlogLoading.component";

const LatestPostComponent = () => {
	const { data, isLoading } = useGetLatestQuery();
	const nav = useNavigate();

	const handleDetail = (id) => {
		nav(`detail/${id}`);
	};

	return (
		<div className=" mb-32">
			{isLoading ? (
				<div className=" flex  justify-center  flex-wrap items-center ">
					<BlogLoadingComponent />
				</div>
			) : (
				<ContainerComponent>
					<div className="">
						<h1 className=" text-center text-[41px]  text-gray-900 font-normal tracking-wide  ">
							Latest Posts
						</h1>

						<h1 className="text-gray-300 font-serif text-xs mt-3 tracking-[3px] text-center">
							APRIL 19,2021 .
						</h1>
					</div>
					<div className="flex items-center gap-12 flex-wrap  mt-10">
						{data?.map((item) => (
							<div
								key={item?.id}
								onClick={() => handleDetail(item?.id)}
								className="   w-[30%] h-auto">
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

								<div className="cursor-pointer flex flex-col items-center gap-3 py-5">
									<div className="flex   duration-1000 group   select-none items-center text-center justify-center   m-auto gap-5 ">
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
										<h1 className="  tracking-[2px]   group-hover:text-pink-300 text-[#FFD0D0] text-center font-serif text-xs ">
											{item?.type}
										</h1>
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
									</div>

									<p className=" text-2xl  text-wrap  tracking-[2px] text-gray-950 text-center ">
										{item?.name}
									</p>

									<h1 className="   font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
										{item?.writer}
									</h1>
								</div>
							</div>
						))}
					</div>
				</ContainerComponent>
			)}
		</div>
	);
};

export default LatestPostComponent;
