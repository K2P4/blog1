/** @format */

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ViewPostComponent = ({
	data,
	dataTwo,
	path,
	type,
	title,
	image,
	date,
	writer,
	isLoading,
}) => {
	const [chgData, setChgData] = useState(true);
	const nav = useNavigate();

	const handleData = (path) => {
		setChgData(path);
	};

	const handleDetail = (id) => {
		nav(`/detail/${id}`);
	};

	return (
		<div>
			{isLoading ? (
				<div className="w-full m-auto h-screen justify-center flex items-center text-3xl">
					Loading
				</div>
			) : chgData ? (
				data?.map((item) => (
					<div key={item?.id} onClick={() => handleDetail(item?.id)} className="">
						<div className=" space-y-4 ">
							<div className="flex  h-0  mt-28  cursor-pointer  duration-1000 group   select-none items-center text-center justify-center  mx-auto gap-5 ">
								<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
								<h1 className="  tracking-[2px]   group-hover:text-[#f5bebe] text-[#ecc1c1] text-center font-serif text-xs ">
									{item?.type}
								</h1>
								<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
							</div>

							<h1 className=" h-auto   text-[43px]    tracking-wide text-gray-950 mx-auto text-center">
								{item?.name}
							</h1>

							<h1 className=" mx-auto    cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
								<span className="hover:text-[#d8b8b8] duration-500">
									{item?.date}
								</span>{" "}
								|{" "}
								<span className="hover:text-[#d8b8b8] duration-500">
									{item?.writer}
								</span>
							</h1>
						</div>

						{/* Image1 */}
						<div className="w-full  py-8 ">
							<img
								className="mx-auto object-cover w-full "
								src={item?.image}
								alt=""
							/>
						</div>

						{/* Content1 */}
						<p className=" text-[#696969]   text-md mt-3 text-wrap  tracking-wide leading-[30px]">
							Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean
							commodo ligula eget dolor. Cum socis Theme sed natoque ut
							penatibus. Etiam ultricies nisi vel augue. Cura bitur ullamcorper
							ultricies dictum felis eu pede sit. Etiam rhoncus. Maecenas
							tempus, tellus eget condimentum rhoncus, sem quam semper libero,
							amet et adipiscing sem neque nula ipsum. Etiam ultricies nisi vel
							augue blandit vel, luctus pulvinar. Nullam quis ante. Etiam sit
							amet orci eget eros.
						</p>

						{/* Share*/}
						<div className="flex items-center w-full   pt-9  pb-16 justify-between ">
							<Button className="  w-auto  cursor-pointer hover:bg-gray-800 hover:opacity-95    duration-300  text-xs   px-8 py-4 bg-black  rounded-none font-serif  tracking-[3px] ">
								READ MORE
							</Button>

							<div className="group ">
								<div className="flex animate__animated  animate__fadeIn  group-hover:hidden duration-1000 cursor-pointer items-center align-middle space-x-2">
									<FiShare className=" h-5  text-gray-800 w-5 " />
									<p className="  font-serif text-gray-800 tracking-[3px] text-xs ">
										SHARE
									</p>
								</div>

								<div className="hidden  animate__fadeInRight animate__animated duration-1000 group-hover:flex  w-full items-center justify-center gap-2">
									<FaFacebookF className=" text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
									<FaTwitter className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
									<FaPinterestP className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
									<FaInstagram className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />

									<FaLinkedinIn className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				dataTwo?.map((item) => (
					<div key={item?.id} onClick={() => handleDetail(path)} className="">
						<div className=" space-y-4 ">
							<div className="flex  h-0  mt-28  cursor-pointer  duration-1000 group   select-none items-center text-center justify-center  mx-auto gap-5 ">
								<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
								<h1 className="  tracking-[2px]   group-hover:text-[#f5bebe] text-[#ecc1c1] text-center font-serif text-xs ">
									{item?.type}
								</h1>
								<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
							</div>

							<h1 className=" h-auto   text-[43px]    tracking-wide text-gray-950 mx-auto text-center">
								{item?.name}
							</h1>

							<h1 className=" mx-auto    cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
								<span className="hover:text-[#d8b8b8] duration-500">
									{item?.date}
								</span>{" "}
								|{" "}
								<span className="hover:text-[#d8b8b8] duration-500">
									{item?.writer}
								</span>
							</h1>
						</div>

						{/* Image1 */}
						<div className="w-full  py-8 ">
							<img
								className="mx-auto object-cover  "
								src={item?.image}
								alt=""
							/>
						</div>

						{/* Content1 */}
						<p className=" text-[#696969]   text-md mt-3 text-wrap  tracking-wide leading-[30px]">
							Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean
							commodo ligula eget dolor. Cum socis Theme sed natoque ut
							penatibus. Etiam ultricies nisi vel augue. Cura bitur ullamcorper
							ultricies dictum felis eu pede sit. Etiam rhoncus. Maecenas
							tempus, tellus eget condimentum rhoncus, sem quam semper libero,
							amet et adipiscing sem neque nula ipsum. Etiam ultricies nisi vel
							augue blandit vel, luctus pulvinar. Nullam quis ante. Etiam sit
							amet orci eget eros.
						</p>

						{/* Share*/}
						<div className="flex items-center w-full   pt-9  pb-16 justify-between ">
							<Button className="  w-auto  cursor-pointer hover:bg-gray-800 hover:opacity-95    duration-300  text-xs   px-8 py-4 bg-black  rounded-none font-serif  tracking-[3px] ">
								READ MORE
							</Button>

							<div className="group ">
								<div className="flex animate__animated  animate__fadeIn  group-hover:hidden duration-1000 cursor-pointer items-center align-middle space-x-2">
									<FiShare className=" h-5  text-gray-800 w-5 " />
									<p className="  font-serif text-gray-800 tracking-[3px] text-xs ">
										SHARE
									</p>
								</div>

								<div className="hidden  animate__fadeInRight animate__animated duration-1000 group-hover:flex  w-full items-center justify-center gap-2">
									<FaFacebookF className=" text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
									<FaTwitter className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
									<FaPinterestP className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
									<FaInstagram className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />

									<FaLinkedinIn className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
								</div>
							</div>
						</div>
					</div>
				))
			)}

			{/* Another Page */}
			{isLoading && chgData ? (
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

export default ViewPostComponent;
