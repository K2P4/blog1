/** @format */

import React from "react";
import { useGetDetailPostQuery } from "../service/endpoints/BlogEndpints";
import { motion } from "framer-motion";

const DetailPostComponent = () => {
	const { data } = useGetDetailPostQuery();

	return (
		<div>
			<h1 className=" text-center text-3xl  mb-10   text-gray-900 font-medium tracking-wider  ">
				Popular Posts
			</h1>

			<div className="flex flex-col  space-y-7">
				{data?.map((item) => (
					<div key={item?.id} className="  ">
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

						<h1 className="  mb-1 mt-5  text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[2px] font-serif ">
							{item?.date}
						</h1>

						<h1 className=" cursor-pointer text-center text-lg mx-auto  tracking-wider">{item?.name}</h1>
					</div>
				))}
			</div>
		</div>
	);
};

export default DetailPostComponent;
