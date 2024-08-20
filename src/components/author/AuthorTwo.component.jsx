/** @format */

import React from "react";
import { CiSearch } from "react-icons/ci";
import ArchiveComponent from "../Archive.component";
import DetailPostComponent from "../DetailPost.component";

const AuthorTwoComponent = () => {
	return (
		<div className=" w-[25%] space-y-14 ">
			{/* Subcribe*/}
			<div className="relative  mt-5">
				<p className="h-[65px] z-50  -top-12  left-[50%]  w-[1px] absolute  duration-500   bg-[#fde7e7] "></p>
				<div className="bg-[#faf7f9] w-full py-7 px-6">
					<h1 className=" text-center text-3xl   text-gray-800  font-medium tracking-wider  ">
						Search
					</h1>

					<p className="text-center text-md my-4  tracking-wide text-gray-600 ">
						Type here & press enter
					</p>

					<div className="bg-white py-3 px-6    w-full flex items-center justify-between">
						<input
							type="text"
							placeholder="Search..."
							className=" focus:border-0 p-0 text-[#8f8f8f] bg-transparent focus:outline-none focus:ring-0   w-full border-0"
						/>
						<CiSearch className="text-[#8f8f8f] hover:text-white duration-500 h-5 w-5" />
					</div>
				</div>
			</div>

			{/* Archive*/}
			<ArchiveComponent />

			{/* Popular Post*/}
            <DetailPostComponent/>
		</div>
	);
};

export default AuthorTwoComponent;
