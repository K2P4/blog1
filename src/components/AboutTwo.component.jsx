/** @format */

import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import ArchiveComponent from "./Archive.component";

const AboutTwoComponent = () => {
	return (
		<div className="w-[25%] space-y-14">
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

			<ArchiveComponent />

			{/* Follow Us*/}
			<div className=" mt-5">
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
	);
};

export default AboutTwoComponent;
