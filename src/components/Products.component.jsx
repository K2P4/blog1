/** @format */

import React, { useState } from "react";
import ContainerComponent from "./Container.component";
import LoadingProductsComponent from "./LoadingProducts.component";

import { useGetProductsQuery } from "../service/endpoints/BlogEndpints";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DotLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const ProductsComponent = () => {
	const { data, isLoading } = useGetProductsQuery();
	const [loading, setLoading] = useState(false);

	const nav = useNavigate();

	const handleDetail = (id) => {
		nav(`detail/${id}`);
	};

	const handleLoading = () => {
		setLoading(true);
	};

	return (
		<div className=" mb-32 ">
			<ContainerComponent>
				<div className="flex items-center flex-col gap-5">
					<div className="flex items-center gap-12 flex-wrap  ">
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

					{loading ? (
						<LoadingProductsComponent />
					) : (
						<Button
							onClick={handleLoading}
							className="font-serif   rounded-none text-sm px-12 mx-auto text-center py-6 tracking-[3px] font-normal">
							LOAD MORE
						</Button>
					)}
				</div>
			</ContainerComponent>
		</div>
	);
};

export default ProductsComponent;
