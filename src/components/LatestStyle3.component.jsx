/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import ContainerComponent from "./Container.component";
import { motion } from "framer-motion";
import BlogLoadingComponent from "./BlogLoading.component";
import { useGetLatestStyle3Query } from "../service/endpoints/BlogEndpints";

const LatestStyle3Component = () => {
	const { data, isLoading } = useGetLatestStyle3Query();
	const nav = useNavigate();

	const handleDetail = (id) => {
		nav(`/detail/${id}`);
	};
	return (
		<div>
			{isLoading ? (
				<div className=" flex  justify-center  flex-wrap items-center ">
					<BlogLoadingComponent />
				</div>
			) : (
				<ContainerComponent>
					<div className="space-y-4">
						<div className="flex  h-0 mt-4   duration-1000 group   select-none items-center text-center justify-center cursor-pointer  mx-auto gap-4 ">
							<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
							<h1 className="  tracking-[2px]   group-hover:text-[#f5bebe] text-[#ecc1c1] text-center font-serif text-xs ">
								LIFESTYLE
							</h1>
							<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
						</div>
						<h1 className=" text-center text-[41px]  text-gray-900 font-normal tracking-wide  ">
							Latest Posts
						</h1>
					</div>
					<div className="flex items-center gap-12 justify-center flex-wrap  mt-12">
						{data?.map((item) => (
							<div
								key={item?.id}
								onClick={() => handleDetail(item?.id)}
								className="  cursor-pointer w-[20%]   h-auto">
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

								<div className="cursor-pointer flex flex-col items-start gap-3 py-5">
									<p className=" text-lg   line-clamp-2 w-full text-left text-wrap  tracking-[1.5px] text-gray-950  ">
										{item?.name}
									</p>

									<h1 className="   font-serif text-xs tracking-[3px] text-gray-500 text-left     ">
										{item?.date}
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

export default LatestStyle3Component;
