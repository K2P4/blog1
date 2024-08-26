/** @format */

import React, { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SlBag } from "react-icons/sl";
import { motion } from "framer-motion";

const ShopProductComponent = ({ dataOne, isLoading }) => {
	const [selectedOption, setSelectedOption] = useState("Sort by latest");
	const [chgData, setChgData] = useState(true);
	const [animated, setAnimated] = useState(false);

	const handleSelect = (option) => {
		setSelectedOption(option);
		// Handle filtering or sorting logic here
		console.log(`Selected: ${option}`);
	};
	return (
		<div className="">
			{/* Filter Product */}
			<div className="flex items-center  justify-between align-middle ">
				<h1 className=" text-[12.3px] font-medium tracking-[2.1px] font-serif text-[#757575]">
					SHOWING 1–12 OF 20 RESULTS{" "}
				</h1>

				<DropdownMenu>
					<DropdownMenuTrigger className="w-[40%]">
						<Button
							type="submit"
							className="flex items-center  active:border-0  select-none hover:bg-white justify-between w-full  p-4 bg-white text-[#757575] tracking-wide border-pink-100 text-[14px] border   ">
							{selectedOption}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-4">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent className=" top-0   -right-40 absolute  mt-0 space-y-2 overflow-scroll    w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
						<DropdownMenuLabel className="text-sm text-gray-900">
							{selectedOption}
						</DropdownMenuLabel>
						<DropdownMenuItem onSelect={() => handleSelect("Default sorting")}>
							Default sorting
						</DropdownMenuItem>
						<DropdownMenuItem
							onSelect={() => handleSelect("Sort by popularity")}>
							Sort by popularity
						</DropdownMenuItem>
						<DropdownMenuItem
							onSelect={() => handleSelect("Sort by average rating")}>
							Sort by average rating
						</DropdownMenuItem>
						<DropdownMenuItem onSelect={() => handleSelect("Sort by latest")}>
							Sort by latest
						</DropdownMenuItem>
						<DropdownMenuItem
							onSelect={() => handleSelect("Sort by price: low to high")}>
							Sort by price: low to high
						</DropdownMenuItem>
						<DropdownMenuItem
							onSelect={() => handleSelect("Sort by price: high to low")}>
							Sort by price: high to low
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			{isLoading ? (
				<div className="w-full m-auto h-screen justify-center flex items-center text-3xl">
					Loading
				</div>
			) : (
				<div className="flex  flex-wrap gap-7 mt-8  justify-between">
					{chgData
						? dataOne?.slice(0, 12).map((item) => (
								<motion.div
									initial="rest"
									whileHover="hover"
									animate="rest"
									onClick={() => handleDetail(item?.id)}
									key={item?.id}
									className={`relative   duration-1000 group w-[30%] mb-10 h-[50%]  group   space-y-2 `}>
									<img
										className={`   object-cover w-full h-[298px] cursor-pointer  `}
										src={item?.image}
										alt=""
									/>

									<h1 className="text-xl tracking-wide text-gray-900">
										{item?.name}
									</h1>
									<h1 className="text-[13px]  tracking-[2.5px] font-serif text-gray-500">
										${item?.price}
									</h1>

									{item?.type ? (
										<Button className=" bg-stone-50 font-serif font-normal text-[#757575] border-pink-200 border tracking-[2.2px] absolute top-2 right-4 text-xs py-1 px-3 text-center rounded-none">
											{item?.type}{" "}
										</Button>
									) : (
										""
									)}

									<motion.button
										variants={{
											rest: { y: 8, opacity: 0 },
											hover: { y: -0.4, opacity: 1 },
										}}
										whileHover={{ opacity: 0.5 }}
										transition={{ duration: 0.4, ease: "easeInOut" }}
										type="submit"
										className="  bg-black   hover:bg-gray-900  flex justify-center items-end gap-2 text-center transform    bottom-16 absolute   text-stone-50 font-serif  rounded-none    font-light text-[11.5px] p-4  tracking-[2.3px] w-full ">
										<SlBag className=" w-5 h-5" />
										ADD TO CART
									</motion.button>
								</motion.div>
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
		</div>
	);
};

export default ShopProductComponent;
