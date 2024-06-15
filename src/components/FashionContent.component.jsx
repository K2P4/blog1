/** @format */
import React from "react";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const FashionContentComponent = ({
	img,
	name,
	type,
	writer,
	date,
	wid,
	wid2,
	wid3,
	id,
}) => {
	const nav = useNavigate();

	const handleDetail = (id) => {
		nav(`/detail/${id}`);
	};
	return (
		<div
			onClick={() => handleDetail(id)}
			className={`flex border-b  w-[${wid}]  border-b-pink-100 pb-12 items-start gap-10`}>
			<div className={`relative  w-[${wid2}]   overflow-hidden`}>
				<motion.img
					src={img}
					alt="Your image"
					className="  object-contain "
					initial={{ scale: 1.05 }}
					whileHover={{ scale: 1.06, y: -5 }}
					transition={{ duration: 0.5 }}
				/>
			</div>

			<div className={`flex items-start w-[${wid3}]   flex-col space-y-4  `}>
				<h1 className="text-[#cfac9f] mt-1 mb-3 cursor-pointer h-0 hover:text-[#f0b6a2] text-[13px] tracking-[2.5px] font-medium font-serif ">
					{type}
				</h1>

				<h1 className="text-gray-800 cursor-pointer w-full   tracking-[2px]  text-3xl">
					{name}
				</h1>

				<h1 className="  cursor-pointer font-medium  font-serif text-[12px] tracking-[2.5px]  text-[#ababab]    ">
					<span className="hover:text-pink-200 duration-500">{date}</span>|{" "}
					<span className="hover:text-pink-200 duration-500">{writer}</span>
				</h1>

				<p className="text-[#979797]  text-[16px] w-full  tracking-wide leading-[28px] ">
					Lorem ipsum dolor sit amet, adipiscing ligula elit. Cumsocis Theme sed
					natoque ut sed penatibus leo eget bibe dum sodales, velit cursus. Perr
					ad platonem refer rentur, omniss
				</p>

				<div className="group ">
					<div className="flex  animate__animated  animate__fadeIn  group-hover:hidden duration-1000 cursor-pointer items-center align-middle space-x-2">
						<FiShare className=" h-5  text-gray-800 w-5 " />
						<p className="  font-serif text-gray-800 tracking-[3px] text-xs ">
							SHARE
						</p>
					</div>

					<div className="hidden  animate__fadeInLeft animate__animated duration-1000 group-hover:flex  w-full items-center justify-center gap-2">
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

export default FashionContentComponent;
