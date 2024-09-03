/** @format */

import React from "react";

const ShopCateogryComponent = () => {
	return (
		<div className=" space-y-4 w-full mx-auto ">
			<h1 className="text-gray-900 text-[28.5px] tracking-[2.1px] text-center mx-auto ">
				Categories
			</h1>

			<div className=" space-y-5">
				<p className="  text-xs  cursor-pointer duration-300 hover:text-[#f5baba]  text-center font-serif text-[#e2abab] tracking-[2.2px]">
					BEAUTY
				</p>
				<p className="  text-xs  cursor-pointer duration-300 hover:text-[#f5baba]  text-center font-serif text-[#e2abab] tracking-[2.2px]">
					DECORATION
				</p>
				<p className="  text-xs  cursor-pointer duration-300 hover:text-[#f5baba]  text-center font-serif text-[#e2abab] tracking-[2.2px]">
					INSPIRATION
				</p>
				<p className="  text-xs  cursor-pointer duration-300 hover:text-[#f5baba]  text-center font-serif text-[#e2abab] tracking-[2.2px]">
					LIFESTYLE
				</p>
			</div>
		</div>
	);
};

export default ShopCateogryComponent;
