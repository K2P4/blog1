/** @format */

import React from "react";

const ProfileComponent = ({ img, title, description }) => {
	return (
		<div className="flex w-full items-center gap-5 ">
			<img className=" object-cover  rounded-full h-36 w-36 mx-auto  " src={img} alt="" />
			<div className="p">
				<h1 className="text-2xl   tracking-wide ">{title}</h1>

				<p className="text-gray-600 mt-2 text-[15px]  tracking-wide leading-6 " >{description}</p>
			</div>
		</div>
	);
};

export default ProfileComponent;
