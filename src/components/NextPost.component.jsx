/** @format */

import React from "react";
import { useGetDetailQuery } from "../service/endpoints/BlogEndpints";

import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const NextPostComponent = ({ handleNext }) => {
	const { id } = useParams();
	const { data } = useGetDetailQuery(Number(id) + 1);

	console.log(data);
	return (
		<>
			{data?.name && (
				<div className="flex items-start gap-5">
					<div className=" space-y-2 ">
						<h1
							onClick={handleNext}
							className="text-[#727272] text-right duration-300 hover:text-[#6d6d6d]  select-none cursor-pointer    text-xs   font-serif  tracking-[2px] ">
							NEXT POST
						</h1>

						<p className=" cursor-pointer select-none text-right text-xl   text-gray-700 font-medium tracking-wide">
							{data?.name}
						</p>
					</div>

					<motion.svg
						whileHover={{ x: 10 }}
						transition={{ duration: 0.1 }}
						xmlns="http://www.w3.org/2000/svg"
						onClick={handleNext}
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-7 text-gray-800  duration-700 h-7">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m8.25 4.5 7.5 7.5-7.5 7.5"
						/>
					</motion.svg>
				</div>
			)}
		</>
	);
};

export default NextPostComponent;
