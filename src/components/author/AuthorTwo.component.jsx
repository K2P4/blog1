/** @format */

import React from "react";
import { CiSearch } from "react-icons/ci";
import ArchiveComponent from "../Archive.component";
import DetailPostComponent from "../DetailPost.component";

const AuthorTwoComponent = () => {
	return (
		<div className=" w-[25%] space-y-14 ">
			{/* Blogger */}
			<div className="w-full relative">
				<p className="h-[65px] z-50  -top-5 left-[50%] w-[1px] absolute  duration-500   bg-[#fde7e7] "></p>
				<div className="bg-[#faf7f9] w-[90%] mx-auto  mt-32  p-9">
					<img
						className=" object-cover   h-32 w-32 mx-auto  "
						src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/user-img-1.png"
						alt=""
					/>

					<h1 className="text-[#8d6759] cursor-pointer hover:text-[#f0b6a2] my-4 text-center text-[12px] tracking-[3px] font-serif ">
						BLOGGER
					</h1>

					<p className="text-[#727272]   text-center mx-auto tracking-wide leading-[28px] ">
						Welcome to my blog where I share my lifestyle tips, healthy snack
						ideas…
					</p>
				</div>
			</div>

			{/* Archive*/}
			<ArchiveComponent />

			{/* Popular Post*/}
			<DetailPostComponent />
		</div>
	);
};

export default AuthorTwoComponent;
