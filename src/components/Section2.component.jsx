/** @format */

import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import DetailPostComponent from "./DetailPost.component";
import TagsComponent from "./Tags.component";
import ArchiveComponent from "./Archive.component";

const Section2Component = ({ condition }) => {
	return (
		<div className="w-[25%] relative   mx-auto ">
			<div className="flex items-center flex-col mx-auto gap-14">
				{condition ? (
					" "
				) : (
					<div className="w-full relative">
						<p className="h-[65px] z-50  top-20 left-[50%] w-[1px] absolute  duration-500   bg-[#fde7e7] "></p>
						<div className="bg-[#faf7f9] w-[90%] mx-auto  mt-32  p-9">
							<img
								className=" object-cover  h-36 w-36 mx-auto  "
								src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/user-img-1.png"
								alt=""
							/>

							<h1 className="text-[#8d6759] cursor-pointer hover:text-[#f0b6a2] my-4 text-center text-[12px] tracking-[3px] font-serif ">
								BLOGGER
							</h1>

							<p className="text-[#727272]   text-center mx-auto tracking-wide leading-[28px] ">
								Welcome to my blog where I share my lifestyle tips, healthy
								snack ideas…
							</p>
						</div>
					</div>
				)}

				{/* Categories */}
				<div className=" w-full  mx-auto ">
					<h1 className="  text-center mb-4  text-2xl tracking-[2px] ">
						Categories
					</h1>

					<ul className="flex flex-col items-center align-middle space-y-4">
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2] text-center text-[12px] tracking-[3px] font-serif ">
							BEAUTY
						</li>
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2] text-center text-[12px] tracking-[3px] font-serif ">
							ENTERTAINMENT
						</li>
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2] text-center text-[12px] tracking-[3px] font-serif ">
							HOME DECOR
						</li>
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2]text-center text-[12px] tracking-[3px] font-serif ">
							INSPIRATION
						</li>
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2]text-center text-[12px] tracking-[3px] font-serif ">
							INTERIOR
						</li>
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2] text-center text-[12px] tracking-[3px] font-serif ">
							LIFESTYLE
						</li>
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2] text-center text-[12px] tracking-[3px] font-serif ">
							TRAVEL
						</li>
					</ul>
				</div>

				{/* Popular Post */}
				<DetailPostComponent />

				{/* Subcribe*/}
				<div className="relative mt-5">
					<p className="h-[65px] z-50  -top-12  left-[50%]  w-[1px] absolute  duration-500   bg-[#fde7e7] "></p>
					<div className="bg-[#faf7f9] w-full py-7 px-6">
						<h1 className=" text-center text-3xl   text-gray-800  font-medium tracking-wider  ">
							Subscribe to Newsletter
						</h1>

						<p className="text-center text-md my-4  tracking-wide text-gray-600 ">
							Receive news via email
						</p>

						<div className="bg-white py-3 px-6    w-full flex items-center justify-between">
							<input
								type="text"
								placeholder="Subscribe..."
								className=" focus:border-0 p-0 text-[#8f8f8f] bg-transparent focus:outline-none focus:ring-0   w-full border-0"
							/>
							<FaTelegramPlane className="text-[#8f8f8f] hover:text-white duration-500 h-5 w-5" />
						</div>
					</div>
				</div>

				{/* Tag*/}
				<TagsComponent />

				<img
					className="mx-auto w-[90%]"
					src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/sb-img-2.jpg"
					alt=""
				/>

				{/* Archive*/}
				<ArchiveComponent />

				{/* Follow Us*/}
				<div className="relative mt-5">
					<p className="h-[65px] z-50  -top-12  left-[50%]  w-[1px] absolute  duration-500   bg-[#fde7e7] "></p>
					<div className="bg-[#faf7f9] space-y-6 w-full py-7 px-6">
						<h1 className=" text-center text-3xl    text-gray-800  font-medium tracking-wider  ">
							Follow Us
						</h1>

						<p className="text-center text-md   tracking-wide text-gray-600 ">
							Follow us on Social Network
						</p>

						<div className="flex  w-full items-center justify-center gap-6">
							<FaFacebookF className=" text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
							<FaTwitter className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
							<FaPinterestP className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
							<FaInstagram className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />

							<FaLinkedinIn className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section2Component;
