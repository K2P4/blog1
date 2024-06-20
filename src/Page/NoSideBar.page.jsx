/** @format */

import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
	
} from "../components";
import InstagramComponent from "../components/Instagram.component";
import { useNavigate } from "react-router-dom";

const NoSideBarPage = () => {
	const nav = useNavigate();

	const handleHomePage2 = () => {
		nav("/HomeSection/HomePage2");
	};

	const handleDetail = (id) => {
		nav(`/detail/${id}`);
	};

	return (
		<div>
			<NavigationHomeSectionComponent />

			<ContainerComponent>
				
					{/* Section One */}
					<section className="w-full">
						<div className=" space-y-4">
							{/* Header1 */}
							<div onClick={() => handleDetail(31)} className="">
								<div className=" space-y-4 ">
									<div className="flex  h-0  mt-28  cursor-pointer  duration-1000 group   select-none items-center text-center justify-center  mx-auto gap-5 ">
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
										<h1 className="  tracking-[2px]   group-hover:text-[#f5bebe] text-[#ecc1c1] text-center font-serif text-xs ">
											INSPIRATION
										</h1>
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
									</div>

									<h1 className=" h-auto   text-[43px]    tracking-wide text-gray-950 mx-auto text-center">
										Ready for a getaway weekend
									</h1>

									<h1 className=" mx-auto    cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
										<span className="hover:text-[#d8b8b8] duration-500">
											MARCH 5, 2021
										</span>{" "}
										|{" "}
										<span className="hover:text-[#d8b8b8] duration-500">
											BY KATHERINE BISHOP
										</span>
									</h1>
								</div>

								{/* Image1 */}
								<div className="w-full  py-8 ">
									<img
										className="mx-auto object-cover  "
										src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-img-1.jpg"
										alt=""
									/>
								</div>

								{/* Content1 */}
								<p className=" text-[#696969]   text-md mt-3 text-wrap  tracking-wide leading-[30px]">
									Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean
									commodo ligula eget dolor. Cum socis Theme sed natoque ut
									penatibus. Etiam ultricies nisi vel augue. Cura bitur
									ullamcorper ultricies dictum felis eu pede sit. Etiam rhoncus.
									Maecenas tempus, tellus eget condimentum rhoncus, sem quam
									semper libero, amet et adipiscing sem neque nula ipsum. Etiam
									ultricies nisi vel augue blandit vel, luctus pulvinar. Nullam
									quis ante. Etiam sit amet orci eget eros.
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

							{/* Content1 */}
							<div className="bg-[#faf7f9] px-10 relative py-16">
								<p className="h-[65px] z-50  -top-10 left-[50%] w-[1px] absolute  duration-500   bg-[#fde7e7] "></p>
								<p className="text-[#e2b19e] DetailParaFont italic font-medium tracking-wider text-[25px] w-[90%]  text-center mx-auto">
									Quality content with useful info and some of the best services
									I have experienced.Recommend to it to all .
								</p>

								<p className="text-center mx-auto text-[#cfac9f] text-[12px] mt-4  tracking-[3px] font-serif ">
									BY JOSEPHINA ROBINSON
								</p>
							</div>

							{/* Header2 */}
							<div onClick={() => handleDetail(32)} className="">
								{/* Header2 */}
								<div className=" space-y-4">
									<div className="flex  h-0  mt-28  cursor-pointer  duration-1000 group   select-none items-center text-center justify-center  mx-auto gap-5 ">
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
										<h1 className="  tracking-[2px]   group-hover:text-[#f5bebe] text-[#ecc1c1] text-center font-serif text-xs ">
											LIFESTYLE
										</h1>
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
									</div>

									<h1 className=" h-auto   text-[43px]    tracking-wide text-gray-950 mx-auto text-center">
										Best skincare routine for dry skin
									</h1>

									<h1 className=" mx-auto    cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
										<span className="hover:text-[#d8b8b8] duration-500">
											MARCH 5, 2021
										</span>{" "}
										|{" "}
										<span className="hover:text-[#d8b8b8] duration-500">
											BY KATHERINE BISHOP
										</span>
									</h1>
								</div>

								{/* Image2 */}
								<div className="w-full  py-8 ">
									<img
										className="mx-auto object-cover  "
										src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/03/blog-img-8.jpg"
										alt=""
									/>
								</div>

								{/* Content3 */}
								<p className=" text-[#696969]   text-md  text-wrap  tracking-wide leading-[30px]">
									Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean
									commodo ligula eget dolor. Cum socis Theme sed natoque ut
									penatibus. Etiam ultricies nisi vel augue. Cura bitur
									ullamcorper ultricies dictum felis eu pede sit. Etiam rhoncus.
									Maecenas tempus, tellus eget condimentum rhoncus, sem quam
									semper libero, amet et adipiscing sem neque nula ipsum. Etiam
									ultricies nisi vel augue blandit vel, luctus pulvinar. Nullam
									quis ante. Etiam sit amet orci eget eros.
								</p>
								{/* Share2*/}
								<div className="flex items-center w-full   pt-9   justify-between ">
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

							{/* Header3 */}
							<div onClick={() => handleDetail(33)} className="">
								{/* Header3 */}
								<div className=" space-y-4">
									<div className="flex  h-0  mt-28  cursor-pointer  duration-1000 group   select-none items-center text-center justify-center  mx-auto gap-5 ">
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
										<h1 className="  tracking-[2px]   group-hover:text-[#f5bebe] text-[#ecc1c1] text-center font-serif text-xs ">
											LIFESTYLE
										</h1>
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
									</div>

									<h1 className=" h-auto   text-[43px]    tracking-wide text-gray-950 mx-auto text-center">
										Amazing dresses and gowns for prom
									</h1>

									<h1 className=" mx-auto    cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
										<span className="hover:text-[#d8b8b8] duration-500">
											MARCH 5, 2021
										</span>{" "}
										|{" "}
										<span className="hover:text-[#d8b8b8] duration-500">
											BY KATHERINE BISHOP
										</span>
									</h1>
								</div>

								{/* Image2 */}
								<div className="w-full  py-8 ">
									<img
										className="mx-auto object-cover  "
										src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/03/blog-img-9.jpg"
										alt=""
									/>
								</div>

								{/* Content4*/}
								<p className=" text-[#696969]   text-md  text-wrap  tracking-wide leading-[30px]">
									Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean
									commodo ligula eget dolor. Cum socis Theme sed natoque ut
									penatibus. Etiam ultricies nisi vel augue. Cura bitur
									ullamcorper ultricies dictum felis eu pede sit. Etiam rhoncus.
									Maecenas tempus, tellus eget condimentum rhoncus, sem quam
									semper libero, amet et adipiscing sem neque nula ipsum. Etiam
									ultricies nisi vel augue blandit vel, luctus pulvinar. Nullam
									quis ante. Etiam sit amet orci eget eros.
								</p>

								{/* Share3*/}
								<div className="flex items-center w-full   pt-9  pb-16  justify-between ">
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

							{/* Content2*/}
							<div className="bg-[#faf7f9] px-10 relative  my-10 py-12">
								<p className="h-[65px] z-50  -top-10 left-[50%] w-[1px] absolute  duration-500   bg-[#fde7e7] "></p>
								<p className="text-[#e2b19e] DetailParaFont italic font-medium tracking-wider text-[25px]  text-center mx-auto">
									Absoulety perfect designs for true fashion lovers .
								</p>

								<p className="text-center mx-auto text-[#cfac9f] text-[12px] mt-4  tracking-[3px] font-serif ">
									MARCH 8 , 2021
								</p>
							</div>

							{/* Header4 */}
							<div onClick={() => handleDetail(34)} className="">
								<div className=" space-y-4">
									<div className="flex  h-0  mt-28  cursor-pointer  duration-1000 group   select-none items-center text-center justify-center  mx-auto gap-5 ">
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
										<h1 className="  tracking-[2px]   group-hover:text-[#f5bebe] text-[#ecc1c1] text-center font-serif text-xs ">
											TRAVEL
										</h1>
										<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
									</div>

									<h1 className=" h-auto   text-[43px]    tracking-wide text-gray-950 mx-auto text-center">
										Ten best recipes for a light dinner
									</h1>

									<h1 className=" mx-auto    cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
										<span className="hover:text-[#d8b8b8] duration-500">
											MARCH 8, 2021
										</span>{" "}
										|{" "}
										<span className="hover:text-[#d8b8b8] duration-500">
											BY KATHERINE BISHOP
										</span>
									</h1>
								</div>

								<div className="w-full  py-8 ">
									<img
										className="mx-auto object-cover  "
										src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/03/blog-img-10.jpg"
										alt=""
									/>
								</div>

								<p className=" text-[#696969]   text-md  text-wrap  tracking-wide leading-[30px]">
									Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean
									commodo ligula eget dolor. Cum socis Theme sed natoque ut
									penatibus. Etiam ultricies nisi vel augue. Cura bitur
									ullamcorper ultricies dictum felis eu pede sit. Etiam rhoncus.
									Maecenas tempus, tellus eget condimentum rhoncus, sem quam
									semper libero, amet et adipiscing sem neque nula ipsum. Etiam
									ultricies nisi vel augue blandit vel, luctus pulvinar. Nullam
									quis ante. Etiam sit amet orci eget eros.
								</p>

								{/* Share3*/}
								<div className="flex items-center w-full   pt-9  pb-16  justify-between ">
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

							{/* Another Page */}
							<div className=" font-serif pb-16 flex items-center gap-5 justify-center mx-auto ">
								<p className="text-gray-500  text-center">1</p>
								<p className=" text-center">2</p>
								<motion.svg
									whileHover={{ x: 10 }}
									transition={{ duration: 0.1 }}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									onClick={handleHomePage2}
									className="w-6 text-gray-500   duration-700 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m8.25 4.5 7.5 7.5-7.5 7.5"
									/>
								</motion.svg>
							</div>
						</div>
					</section>

					
				
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default NoSideBarPage;
