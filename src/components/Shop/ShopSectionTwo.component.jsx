/** @format */

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const ShopSectionTwoComponent = () => {
	const [price, setPrice] = useState(20);

	const handlePriceChange = (event) => {
		setPrice(event.target.value);
	};

	return (
		<div className="w-[25%] space-y-8">
			{/* Search Bar */}
			<div className="bg-gray-50 px-4  py-3 border-pink-100 border    w-full flex items-center justify-between">
				<input
					type="text"
					placeholder="Search"
					className=" focus:border-0 p-0 text-[#757575] bg-transparent focus:outline-none focus:ring-0  text-[13.6px]  w-full border-0"
				/>
				<CiSearch className="text-black   duration-500 h-7 w-7" />
			</div>

			{/* Filter Price */}
			<div className=" space-y-5 flex-col flex  justify-center mx-auto">
				<h1 className="text-gray-900 text-[28.5px] tracking-[2.1px] text-center mx-auto ">
					Filter by Price
				</h1>
				<input
					type="range"
					min="20"
					max="460"
					value={price}
					step={10}
					onChange={handlePriceChange}
					style={{ width: "100%" }}
					className=" w-full cursor-pointer  appearance-none   accent-black  h-[1px]  bg-black rounded-lg "
				/>
				<div className="text-center mx-auto">
					<span className=" font-serif text-[13.3px]  font-medium text-gray-500 tracking-[2.1px] ">
						PRICE: $ 20 - ${price}
					</span>
				</div>
				<Button className=" bg-black w-auto m-auto  font-serif font-normal text-white border tracking-[2.4px]   px-6  py-2 text-center rounded-none">
					FILTER
				</Button>
			</div>
		</div>
	);
};

export default ShopSectionTwoComponent;
