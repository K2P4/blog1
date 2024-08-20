/** @format */

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PostLayoutComponent = ({ path, type, image, title, date, writer }) => {
	const nav = useNavigate();

	const handleDetail = (id) => {
		nav(`/detail/${id}`);
	};

	return (
		<div onClick={() => handleDetail(path)} className="">
			<div className=" space-y-4 ">
				<div className="flex  h-0  mt-28  cursor-pointer  duration-1000 group   select-none items-center text-center justify-center  mx-auto gap-5 ">
					<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
					<h1 className="  tracking-[2px]   group-hover:text-[#f5bebe] text-[#ecc1c1] text-center font-serif text-xs ">
						{type}
					</h1>
					<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
				</div>

				<h1 className=" h-auto   text-[43px]    tracking-wide text-gray-950 mx-auto text-center">
					{title}
				</h1>

				<h1 className=" mx-auto    cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
					<span className="hover:text-[#d8b8b8] duration-500">{date}</span> |{" "}
					<span className="hover:text-[#d8b8b8] duration-500">{writer}</span>
				</h1>
			</div>

			{/* Image1 */}
			<div className="w-full  py-8 ">
				<img className="mx-auto object-cover w-full " src={image} alt="" />
			</div>

			{/* Content1 */}
			<p className=" text-[#696969]   text-md mt-3 text-wrap  tracking-wide leading-[30px]">
				Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean commodo
				ligula eget dolor. Cum socis Theme sed natoque ut penatibus. Etiam
				ultricies nisi vel augue. Cura bitur ullamcorper ultricies dictum felis
				eu pede sit. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
				rhoncus, sem quam semper libero, amet et adipiscing sem neque nula
				ipsum. Etiam ultricies nisi vel augue blandit vel, luctus pulvinar.
				Nullam quis ante. Etiam sit amet orci eget eros.
			</p>

			{/* Share*/}
			<div className="flex items-center w-full   pt-9  pb-16 justify-between ">
				<Button className="  w-auto  cursor-pointer hover:bg-gray-800 hover:opacity-95    duration-300  text-xs   px-8 py-4 bg-black  rounded-none font-serif  tracking-[3px] ">
					READ MORE
				</Button>

				<div className="group ">
					<div className="flex animate__animated  animate__fadeIn  group-hover:hidden duration-1000 cursor-pointer items-center align-middle space-x-2">
						<FiShare className=" h-5  text-gray-800 w-5 " />
						<p className="  font-serif text-gray-800 tracking-[3px] text-xs ">
							SHARE
						</p>
					</div>

					<div className="hidden  animate__fadeInRight animate__animated duration-1000 group-hover:flex  w-full items-center justify-center gap-2">
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

export default PostLayoutComponent;
