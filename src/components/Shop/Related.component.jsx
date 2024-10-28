/** @format */

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SlBag } from "react-icons/sl";
import { useGetShopProductQuery } from "../../service/endpoints/BlogEndpints";
import { useNavigate } from "react-router-dom";
import StarComponent from "../Rating/Star.component";
import { Input } from "@/components/ui/input";

const RelatedComponent = ({ review, weight, dimension, product }) => {
	const { data, isLoading } = useGetShopProductQuery();
	const [activeMenu, setActiveMenu] = useState(1);
	const [sliderPosition, setSliderPosition] = useState(0);
	const [describe, setDescribe] = useState(true);
	const [additional, setAdditional] = useState(false);
	const [customer, setCustomer] = useState(false);
	const [ratingStar, setRatingStar] = useState(0);
	const menuRef = useRef([]);
	const [sliderWidth, setSliderWidth] = useState(0);
	const nav = useNavigate();
	const randomInt = Math.floor(Math.random() * 23);
	const Max = randomInt + 4;
	const RelatedFilter = data?.slice(randomInt, Max);

	const handleStarClick = (index) => {
		setRatingStar(index);
	};

	const handleSection = (
		active,
		conditionOne,
		conditionTwo,
		conditionThree
	) => {
		setActiveMenu(active);
		setDescribe(conditionOne);
		setAdditional(conditionTwo);
		setCustomer(conditionThree);
	};

	const handleProduct = (id) => {
		nav(`/shop-product/${id}`);
	};

	useEffect(() => {
		if (menuRef.current[activeMenu]) {
			const menuItem = menuRef.current[activeMenu];
			setSliderPosition(menuItem.offsetLeft);
			setSliderWidth(menuItem.offsetWidth); // Adjust slider position based on active menu item
		}
	}, [activeMenu]);

	return (
		<div className="">
			{/* Menu Bar */}
			<div
				style={{ left: `${sliderPosition}px` }}
				className="flex items-center  transition-all  border-b  h-10 border-b-pink-100   gap-10 justify-center ">
				<h1
					ref={(el) => (menuRef.current[1] = el)}
					onMouseEnter={() => setActiveMenu(1)}
					onClick={() => handleSection(1, true, false, false)}
					className={`   cursor-pointer   duration-1000  h-full w-auto text-center transition-all  font-serif  select-none  text-[13px]    text-gray-700   tracking-[2.7px]  `}>
					DESCRIPTION
				</h1>

				<h1
					ref={(el) => (menuRef.current[2] = el)}
					onMouseEnter={() => setActiveMenu(2)}
					onClick={() => handleSection(2, false, true, false)}
					className={` cursor-pointer   duration-1000  h-full w-auto text-center transition-all  font-serif  select-none  text-[13px]    text-gray-700   tracking-[2.7px]  `}>
					ADDITIONAL INFORMATION
				</h1>

				<h1
					ref={(el) => (menuRef.current[3] = el)}
					onMouseEnter={() => setActiveMenu(3)}
					onClick={() => handleSection(3, false, false, true)}
					className={`  cursor-pointer   duration-1000  h-full w-auto text-center transition-all  font-serif  select-none  text-[13px]    text-gray-700   tracking-[2.7px]  `}>
					REVIEWS <span>({review?.length > 0 ? review?.length : "0"})</span>
				</h1>
			</div>

			{/* Slide Bar */}
			<div
				className=" absolute   w-full   duration-1000 border-b border-b-black transition-all "
				style={{ left: `${sliderPosition}px`, width: `${sliderWidth}px` }} // Adjust the width as needed
			/>

			<div className="mt-10 mb-20">
				{/*Description*/}
				{describe && (
					<p className="  text-gray-500 tracking-wide leading-[29px] text-[15.3px] w-full">
						Lorem ipsum dolor sit amet, in dicant recteque sit, vis illum consul
						interesset in, semper persequeris sit in. Pro at delicata
						interpretaris, choro tempor propriae eu vel. Id semper consulatu
						incorrupte mel. Usu viris laudem erroribus ea. Homero accusam
						principes an duo. Feugiat accusam ne per, sea erat ubique voluptua
						ut. Nostro possim scriptorem an vel, et nec error nobis constituam.
						Solet ullamcorper suscipiantur id nec, sed congue nonumes expetenda
						no. In qui eligendi recusabo, vis ei veritus abhorreant
						definitiones. Qui ea mutat reque viderer, et eum nostro fabellas.
						Qui in vivendum expetendis con sectetuer, novum equidem dolorem qui
						an. Id sed saperet habemus, ei semper vocibus ius.
					</p>
				)}

				{/*Additional*/}
				{additional && (
					<div className="">
						<p className="font-serif   flex items-center  border w-full p-4 border-pink-100 gap-20   text-[13px]    text-gray-600   tracking-[2.5px]">
							WEIGHT
							<span className="text-gray-500 text-[13px] tracking-wider">
								{weight}
							</span>
						</p>

						<p className="font-serif   flex items-center  border w-full p-4 border-t-0 border-pink-100 gap-10   text-[13px]    text-gray-600   tracking-[2.5px]">
							DIMENSIONS
							<span className="text-gray-500 text-[13px] tracking-wider">
								{dimension}
							</span>
						</p>
					</div>
				)}

				{/*Review*/}
				{customer && review ? (
					<div className="">
						<h1 className="text-gray-900 text-2xl   tracking-[1.4px]  ">
							{review.length} review for{" "}
							<span className="text-3xl text-gray-800">{product}</span>
						</h1>

						{/*Customer*/}
						{review?.map((item) => (
							<div
								className="flex mt-8 mb-20  items-center gap-7"
								key={item.id}>
								<img
									className=" rounded-full   object-cover  w-28 h-28  "
									src={item?.image}
									alt=""
								/>

								<div className=" space-y-1 ">
									<StarComponent rating={item?.rating} />

									<p className="  text-xs  capitalize  cursor-pointer duration-300 hover:text-[#f5baba]  font-serif text-[#e9afaf] tracking-[2.2px]">
										{item?.date}
									</p>

									<h1 className="  text-lg   tracking-wide  ">{item?.name}</h1>

									<p className="  text-gray-500 text-md tracking-wide ">
										Mei tota veniam ei, mea docendi praesent in. Te pri amet
										affert, pro sanctus voluptua an.
									</p>
								</div>
							</div>
						))}

						{/*feedback*/}

						<div className=" space-y-5">
							<h1 className=" text-lg tracking-wider text-gray-900 ">
								Add a review{" "}
							</h1>

							<div className=" space-y-2 ">
								<p className="text-gray-500 tracking-wide text-md">
									Your email address will not be published. Required fields are
									marked *
								</p>

								<p className="text-gray-500 tracking-wide text-md">
									Your Rating *
								</p>

								<div className="flex items-center gap-1">
									{Array(5)
										.fill(0)
										.map((_, index) => (
											<span
												key={index}
												onClick={() => handleStarClick(index + 1)}
												className={`  ${
													ratingStar > index
														? "text-[#EECAD5] duration-300  opacity-100"
														: "text-[#eedbe0]  duration-300 opacity-90 "
												} cursor-pointer text-lg`}>
												★
											</span>
										))}
								</div>
							</div>

							{/* Reply Session */}
							<div className="">
								<div className=" w-full ">
									<div className=" space-y-4 flex flex-col">
										<Input
											className="h-[250px]  tracking-wide placeholder:text-[15px] text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500  pb-44 ps-4"
											placeholder="Your Review *"
										/>

										<div className="flex items-center gap-2">
											<Input
												className="  py-4 tracking-wide placeholder:text-[15px] text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500 "
												placeholder="Your Name  *"
											/>
											<Input
												className="  py-4 tracking-wide placeholder:text-[15px] text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500 "
												placeholder="Your Email  *"
											/>
										</div>

										<div className="flex items-center gap-2">
											<input
												type="checkbox"
												className="h-3 w-3 text-center focus:ring-0 focus:outline-none  form-checkbox text-blue-500 "
											/>

											<p className="text-gray-600  w-[80%]  text-[14px] text-wrap  tracking-wider">
												Save my name, email, and website in this browser for the
												next time I comment.
											</p>
										</div>

										<Button
											type="submit"
											className="font-serif w-[15%]  opacity-85   mb-5  rounded-none text-sm  px-4 hover:bg-stone-800 duration-300  text-center   py-3 bg-black tracking-[3px] font-normal">
											SUBMIT
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					""
				)}
			</div>

			<div className="">
				<h1 className="text-gray-900 text-4xl   tracking-[1.5px]  ">
					{RelatedFilter && "Related Products"}
				</h1>

				<div className="flex  select-none flex-wrap gap-5 mt-10 w-full">
					{RelatedFilter?.map((item) => (
						<motion.div
							initial="rest"
							whileHover="hover"
							animate="rest"
							onClick={() => handleProduct(item.id)}
							key={item?.id}
							className={`relative   duration-1000 group w-[23%] mb-10 h-[50%]  group   space-y-2 `}>
							<img
								className={`   object-cover w-full h-[300px] cursor-pointer  `}
								src={item?.image}
								alt=""
							/>

							<h1 className="text-xl tracking-wide text-gray-900">
								{item?.name}
							</h1>
							<h1 className="text-[13px]  tracking-[2.5px] font-serif text-gray-500">
								${item?.price}
							</h1>

							{item?.type ? (
								<Button className=" hover:bg-stone-50 bg-stone-50 font-serif font-normal text-[#757575] border-pink-200 border tracking-[2.2px] absolute top-2 right-4 text-xs py-1 px-3 text-center rounded-none">
									{item?.type}{" "}
								</Button>
							) : (
								""
							)}

							<motion.button
								variants={{
									rest: { y: 8, opacity: 0 },
									hover: { y: -0.4, opacity: 1 },
								}}
								whileHover={{ opacity: 0.5 }}
								transition={{ duration: 0.4, ease: "easeInOut" }}
								type="submit"
								className="  bg-black   hover:bg-gray-900  flex justify-center items-end gap-2 text-center transform    bottom-16 absolute   text-stone-50 font-serif  rounded-none    font-light text-[11.5px] p-4  tracking-[2.3px] w-full ">
								<SlBag className=" w-5 h-5" />
								ADD TO CART
							</motion.button>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default RelatedComponent;
