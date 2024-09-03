/** @format */

import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";

const StarComponent = ({ rating }) => {
	const fullStars = Math.floor(rating);
	console.log(fullStars);
	const halfStar = rating % 1 !== 0;
	console.log(halfStar);
	const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

	return (
		<div className=" space-x-1 ">
			{Array(fullStars)
				.fill()
				.map((_, index) => (
					<span key={index} className="text-[#EECAD5] text-lg">
						★
					</span>
				))}

			{halfStar && <span className="text-[#b9a6ac] text-lg">★</span>}

			{Array(emptyStars)
				.fill()
				.map((_, index) => (
					<span key={index} className="text-[#EECAD5] text-lg">
						★
					</span>
				))}
		</div>
	);
};

export default StarComponent;
