/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AuthorPostComponent = ({
	isLoading,
	dataOne,
	dataTwo,
	pageCondition,
	searchData,
}) => {
	const filterData = dataOne?.slice(0, 6);
	const [chgData, setChgData] = useState(true);

	const nav = useNavigate();

	const handleDetail = (id) => {
		nav(`/detail/${id}`);
	};

	const handleData = (path) => {
		setChgData(path);
	};

	return (
		<div>
			{dataOne.length == 0 ? (
				<p className="text-gray-500 text-center   tracking-wider text-lg">No posts were found for provided query parameters.</p>
			) : (
				""
			)}
			{isLoading ? (
				<div className="w-full m-auto h-screen justify-center flex items-center text-3xl">
					Loading
				</div>
			) : (
				<div className="flex  flex-wrap gap-5  justify-between">
					{chgData
						? dataOne?.slice(0, 6).map((item) => (
								<div
									onClick={() => handleDetail(item?.id)}
									key={item?.id}
									className={`w-[45%]  mb-10 h-[50%]  `}>
									<img
										className={`object-cover w-full h-[400px] cursor-pointer  `}
										src={item?.image}
										alt=""
									/>

									<div className=" space-y-3  mt-7 ">
										<div className="flex   duration-1000 group   select-none items-center text-center justify-center   m-auto gap-5 ">
											<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
											<h1 className="  tracking-[2px]   group-hover:text-pink-300 text-[#FFD0D0] text-center font-serif text-xs ">
												{item?.type}
											</h1>
											<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
										</div>

										<p
											className={` cursor-pointer  w-full text-wrap  text-2xl  text-gray-950 text-center `}>
											{item?.name}
										</p>

										<h1 className=" cursor-pointer  font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
											{item?.date}
										</h1>
									</div>
								</div>
						  ))
						: dataTwo.map((item) => (
								<div
									onClick={() => handleDetail(item?.id)}
									key={item?.id}
									className={`w-[45%]  mb-10 h-[50%]  `}>
									<img
										className={`object-cover w-full h-[400px] cursor-pointer  `}
										src={item?.image}
										alt=""
									/>

									<div className=" space-y-3  mt-7 ">
										<div className="flex   duration-1000 group   select-none items-center text-center justify-center   m-auto gap-5 ">
											<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
											<h1 className="  tracking-[2px]   group-hover:text-pink-300 text-[#FFD0D0] text-center font-serif text-xs ">
												{item?.type}
											</h1>
											<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
										</div>

										<p
											className={` cursor-pointer  w-full text-wrap  text-2xl  text-gray-950 text-center `}>
											{item?.name}
										</p>

										<h1 className=" cursor-pointer  font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
											{item?.date}
										</h1>
									</div>
								</div>
						  ))}
				</div>
			)}

			{pageCondition ? (
				" "
			) : chgData ? (
				<div className=" font-serif pb-16 flex items-center gap-5 justify-center mx-auto ">
					<p className="text-gray-500 cursor-pointer  text-center">1</p>
					<p className="cursor-pointer text-center">2</p>
					<motion.svg
						whileHover={{ x: 10 }}
						transition={{ duration: 0.1 }}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						onClick={() => handleData(false)}
						className="w-6 text-gray-500   cursor-pointer  duration-700 h-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m8.25 4.5 7.5 7.5-7.5 7.5"
						/>
					</motion.svg>
				</div>
			) : (
				<div className=" font-serif pb-16 flex items-center gap-5 justify-center mx-auto ">
					<motion.svg
						whileHover={{ x: -10 }}
						transition={{ duration: 0.1 }}
						xmlns="http://www.w3.org/2000/svg"
						onClick={() => handleData(true)}
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 text-gray-500   cursor-pointer  duration-700 h-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5 8.25 12l7.5-7.5"
						/>
					</motion.svg>

					<p className=" cursor-pointer text-center">1</p>
					<p className="text-gray-500 cursor-pointer text-center">2</p>
				</div>
			)}
		</div>
	);
};

export default AuthorPostComponent;
