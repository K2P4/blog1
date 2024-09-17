/** @format */

import React, { useContext, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Contexts/ShopProductContext";

const ShopProductComponent = ({ isLoading, dataAll }) => {
	const [selectedOption, setSelectedOption] = useState("Default sorting");
	const { filterProduct, setFilterProduct } = useContext(ShopContext);
	const [chgData, setChgData] = useState(true);
	const [filterState, setFilterState] = useState(false);

	const nav = useNavigate();

	useEffect(() => {
		setFilterProduct(dataAll);
	}, [dataAll]);

	const handlePage = (path) => {
		setChgData(path);
	};

	const handleSorting = (status, condition) => {
		if (status == "latest") {
			const filterData = dataAll?.filter((item) => item?.status == status);
			setFilterProduct(filterData);
		} else if (status == "popular") {
			const filterData = dataAll?.filter((item) => item?.status == status);
			setFilterProduct(filterData);
		} else if (status == "rating") {
			const filterData = dataAll?.filter((item) => item?.review);
			setFilterProduct(filterData);
		} else if (status == "low to high") {
			const filterData = [...dataAll].sort((a, b) => a.price - b.price);
			setFilterProduct(filterData);
		} else if (status == "high to low") {
			const filterData = [...dataAll].sort((a, b) => b.price - a.price);
			setFilterProduct(filterData);
		} else {
			setFilterProduct(dataAll);
		}

		setFilterState(condition);
	};

	const handleProduct = (id) => {
		nav(`/shop-product/${id}`);
	};

	const handleSelect = (option) => {
		setSelectedOption(option);
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

						<DropdownMenuItem
							onClick={() => handleSorting("popular")}
							onSelect={() => handleSelect("Sort by popularity")}>
							Sort by popularity
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => handleSorting("default")}
							onSelect={() => handleSelect("Default sorting")}>
							Default sorting
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => handleSorting("rating")}
							onSelect={() => handleSelect("Sort by average rating")}>
							Sort by average rating
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => handleSorting("latest")}
							onSelect={() => handleSelect("Sort by latest")}>
							Sort by latest
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => handleSorting("low to high")}
							onSelect={() => handleSelect("Sort by price: low to high")}>
							Sort by price: low to high
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => handleSorting("high to low")}
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
						? filterProduct?.slice(0, 12).map((item) => (
								<motion.div
									initial="rest"
									whileHover="hover"
									animate="rest"
									onClick={() => handleProduct(item?.id)}
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
										<Button className=" hover:bg-stone-50 bg-stone-50 font-serif font-normal text-[#757575] border-pink-200 border tracking-[2.2px] absolute top-2 right-4 text-xs py-1 px-3 text-center rounded-none">
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
						: filterProduct?.slice(13, dataAll.length).map((item) => (
								<motion.div
									initial="rest"
									whileHover="hover"
									animate="rest"
									onClick={() => handleProduct(item?.id)}
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
										<Button className=" hover:bg-stone-50 bg-stone-50 font-serif font-normal text-[#757575] border-pink-200 border tracking-[2.2px] absolute top-2 right-4 text-xs py-1 px-3 text-center rounded-none">
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
						  ))}
				</div>
			)}

			{/* Another Page */}
			{chgData ? (
				<div className=" font-serif pb-16 flex items-center gap-5 justify-center mx-auto ">
					<p className="text-gray-500 cursor-pointer  text-center">1</p>
					<p className="cursor-pointer hover:text-gray-500 duration-500  text-center">
						2
					</p>
					<motion.svg
						whileHover={{ x: 10 }}
						transition={{ duration: 0.1 }}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						onClick={() => handlePage(false)}
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
						onClick={() => handlePage(true)}
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

					<p className=" cursor-pointer hover:text-gray-500 duration-500 text-center">
						1
					</p>
					<p className="text-gray-500 cursor-pointer text-center">2</p>
				</div>
			)}
		</div>
	);
};

export default ShopProductComponent;
