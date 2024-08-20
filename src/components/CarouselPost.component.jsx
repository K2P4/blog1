/** @format */

import React, { useEffect, useState } from "react";
import {
	useGetDetailQuery,
	useGetLatestQuery,
} from "../service/endpoints/BlogEndpints";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import NextPostComponent from "./NextPost.component";

const CarouselPostComponent = ({ gallery }) => {
	const [currentBox, setCurrentBox] = useState(1);
	const { id } = useParams();

	const { data } = useGetDetailQuery(Number(id) - 1);

	const location = useLocation();

	const handlePrevious = () => {
		setCurrentBox((prev) => (prev === 1 ? 6 : prev - 1));

		if (gallery) {
			nav("/");
		} else {
			nav(`/detail/${id - 1}`);
		}
		window.location.reload();
	};

	const handleNext = () => {
		setCurrentBox((prev) => (prev === 6 ? 1 : prev + 1));

		nav(`/detail/${Number(id) + 1}`);
		window.location.reload();
	};

	const nav = useNavigate();

	return (
		<div className="flex items-start justify-between gap-auto   py-20 w-full">
			<div className="flex items-start w-[50%] gap-5">
				<motion.svg
					whileHover={{ x: -10 }}
					transition={{ duration: 0.1 }}
					xmlns="http://www.w3.org/2000/svg"
					onClick={handlePrevious}
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-7 text-gray-800  duration-700 h-7">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 19.5 8.25 12l7.5-7.5"
					/>
				</motion.svg>

				<div className=" space-y-2 ">
					<h1
						onClick={handlePrevious}
						className="text-[#727272] duration-300 hover:text-[#6d6d6d]  select-none cursor-pointer   text-left  text-xs   font-serif  tracking-[2px] ">
						PREVIOUS POST
					</h1>

					<p className=" cursor-pointer select-none text-left text-xl  w-[90%] text-gray-800 tracking-wide">
						{data?.name}
					</p>
				</div>
			</div>

			<NextPostComponent handleNext={handleNext} />
		</div>
	);
};

export default CarouselPostComponent;
