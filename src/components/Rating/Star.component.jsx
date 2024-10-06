/** @format */

import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { IoMdStarHalf } from "react-icons/io";

const StarComponent = ({ rating }) => {
	const fullStars = Math?.floor(rating);
	const halfStar = rating % 1 !== 0;
	const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
	console.log(fullStars, emptyStars);
	const safeFullStars = Math.max(0, Math.floor(fullStars || 0));
	const safeEmptyStars = Math.max(0, Math.floor(emptyStars || 0));

	return (
		<div className=" space-x-1 flex  items-center ">
			{fullStars > 0 &&
				Array(safeFullStars)
					?.fill()
					?.map((_, index) => (
						<span key={index} className="text-[#EECAD5] text-lg">
							★
						</span>
					))}

			{halfStar && <IoMdStarHalf className="text-[#EECAD5] text-lg" />}

			{Array(safeEmptyStars)
				?.fill()
				?.map((_, index) => (
					<MdOutlineStarBorderPurple500
						key={index}
						className="text-[#EECAD5] text-lg"
					/>
				))}
		</div>
	);
};

export default StarComponent;
