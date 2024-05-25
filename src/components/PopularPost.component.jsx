/** @format */

import React from "react";
import { useGetPopularQuery } from "../service/endpoints/BlogEndpints";
import { motion } from "framer-motion";
import ContainerComponent from "./Container.component";
import BlogLoadingComponent from "./BlogLoading.component";
import { useNavigate } from "react-router-dom";

const PopularPostComponent = () => {
	const { data, isLoading } = useGetPopularQuery();
	const nav = useNavigate();

	const handleDetail = (id) => {
		nav(`detail/${id}`);
	};

	return (
		<div className=" mb-32 ">
			<ContainerComponent>
				{isLoading ? (
					<BlogLoadingComponent />
				) : (
					<>
						<div className="">
							<h1 className=" text-center text-[41px]  text-gray-900 font-normal tracking-wide  ">
								Popular Posts
							</h1>

							<h1 className="text-gray-300 font-serif text-xs mt-3 tracking-[3px] text-center">
								SEPTEMBER 16, 2019 .
							</h1>
						</div>
						<div className="flex items-center justify-center gap-12 flex-wrap  mt-10">
							{data?.map((item) => (
								<div
									onClick={() => handleDetail(item?.id)}
									key={item?.id}
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

									<div className=" cursor-pointer flex flex-col items-center gap-3 py-5">
										<div className="flex  duration-1000 group   select-none items-center text-center justify-center   m-auto gap-5 ">
											<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
											<h1 className="  tracking-[2px]   group-hover:text-pink-300 text-[#fdd2d2] text-center font-serif text-xs ">
												{item?.type}
											</h1>
											<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
										</div>

										<p className=" text-2xl   text-wrap  tracking-[2px] text-gray-950 text-center ">
											{item?.name}
										</p>

										<h1 className="  font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
											{item?.writer}
										</h1>
									</div>
								</div>
							))}
						</div>
					</>
				)}
			</ContainerComponent>
		</div>
	);
};

export default PopularPostComponent;
