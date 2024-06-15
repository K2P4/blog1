/** @format */

import React, { useState } from "react";
import {
	ContainerComponent,
	FooterComponent,
	Section2Component,
	SlideCarouselCompnent,
	SlidePhotoGraphComponent,
} from ".";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
	FaLinkedinIn,
	FaFacebookF,
	FaTwitter,
	FaPinterestP,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { FiShare } from "react-icons/fi";
import ReactPlayer from "react-player";
import InstagramComponent from "./Instagram.component";

const HomePage2Component = () => {
	const videos = [
		"https://www.youtube.com/watch?v=gtyt24uboXw",
		"https://www.youtube.com/watch?v=mj4I2XFlGJk",
		"https://www.youtube.com/watch?v=Jml1_hGFjzs",
	];

	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

	const handleEnded = () => {
		setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
	};

	const nav = useNavigate();

	const handleDetail = (id) => {
		nav(`/detail/${id}`);
	};

	const handleHomePage1 = () => {
		nav(-1);
	};

	return (
		<div>
			<SlideCarouselCompnent />

			<ContainerComponent>
				<div className="flex gap-12 mt-24">
					{/* Section One */}
					<section className="w-[70%]  ">
						<div className=" space-y-4">
							{/* Header1 */}
							<div className="">
								<div className=" space-y-4 ">
									<h1 className="  h-0 cursor-pointer tracking-[2.5px]   group-hover:text-[#f5bebe] text-[#ecbcbc] text-center font-serif text-xs ">
										INSPIRATION
									</h1>

									<h1 className=" h-auto   text-[43px]    tracking-wide text-gray-950 mx-auto text-center">
										Best Scandinavian photographers
									</h1>

									<h1 className=" mx-auto    cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
										<span className="hover:text-[#d8b8b8] duration-500">
											MARCH 9, 2021
										</span>{" "}
										|{" "}
										<span className="hover:text-[#d8b8b8] duration-500">
											BY KATHERINE BISHOP
										</span>
									</h1>
								</div>

								<SlidePhotoGraphComponent />

								{/* Content1 */}
								<p className=" text-[#696969]   text-md text-wrap  tracking-wide leading-[30px]">
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

							{/* Header2 */}
							<div onClick={() => handleDetail(32)} className="">
								{/* Header2 */}
								<div className=" space-y-4">
									<h1 className="  tracking-[2.5px]   group-hover:text-[#f5bebe] text-[#ecbcbc] text-center font-serif text-xs ">
										LIFESTYLE
									</h1>

									<h1 className=" h-auto   text-[43px]    tracking-wide text-gray-950 mx-auto text-center">
										Healthy spaghetti with all different kinds of fish and
										vegetables
									</h1>

									<h1 className=" mx-auto    cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
										<span className="hover:text-[#d8b8b8] duration-500">
											MARCH 30, 2021
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
										src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/03/blog-list-img-26.jpg"
										alt=""
									/>
								</div>

								{/* Content3 */}
								<p className=" text-[#696969]   text-md  text-wrap  tracking-wide leading-[30px]">
									Lorem ipsum dolor sit amet, consectetu adipiscing elit. Aenean
									commodo ligula eget dolor. Cum socis Theme sed natoque ut
									penatibus. Etiam ultricies nisi vel augue. Cura bitur
									ullamcorper ultricies dictum felis eu pede sit. Aliquam lorem
									ante, orci dapibus in, viverra quis, feugiat a, tellus.
									Phasellus viverra nulla ut metus varius laoreet. Quisque
									rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
									Curabitur ullamcorper ultricies nisi. Nam eget dui. Et
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
							<div className="py-16">
								<div className=" space-y-4">
									<h1 className="  tracking-[2.5px] h-0   group-hover:text-[#f5bebe] text-[#ecbcbc] text-center font-serif text-xs ">
										LIFESTYLE
									</h1>

									<h1 className=" h-auto   text-[43px]    tracking-wide text-gray-950 mx-auto text-center">
										Russian stories with audio
									</h1>

									<h1 className=" mx-auto    cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
										<span className="hover:text-[#d8b8b8] duration-500">
											APRIL 16, 2021
										</span>{" "}
										|{" "}
										<span className="hover:text-[#d8b8b8] duration-500">
											BY LINDA FORD
										</span>
									</h1>
								</div>

								<div className="w-full  py-8 ">
									<div className="relative w-full mx-auto border rounded-none shadow-sm">
										<div className="flex flex-col items-center">
											<img
												src="https://zoya.qodeinteractive.com/wp-content/uploads/2020/11/blog-img-49-1024x748.jpg"
												alt="Centered"
												className=" object-cover mx-auto w-full"
											/>
											<audio className=" w-full" controls>
												<source
													src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/b-audio-everytings-nice-1.mp3?_=1"
													type="audio/mp3"
												/>
												Your browser does not support the audio element.
											</audio>
										</div>
									</div>
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
							<div className="pb-16">
								<div className=" space-y-4">
									<h1 className="  tracking-[2.5px] h-0   group-hover:text-[#f5bebe] text-[#ecbcbc] text-center font-serif text-xs ">
										LIFESTYLE
									</h1>

									<h1 className=" h-auto   text-[43px]    tracking-wide text-gray-950 mx-auto text-center">
										Fresh young designers
									</h1>

									<h1 className=" mx-auto    cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
										<span className="hover:text-[#d8b8b8] duration-500">
											APRIL 16, 2021
										</span>{" "}
										|{" "}
										<span className="hover:text-[#d8b8b8] duration-500">
											BY KATHERINE BISHOP
										</span>
									</h1>
								</div>

								<div className="w-full  py-8 ">
									<div className="video-player">
										<ReactPlayer
											loop={false}
											url={videos[currentVideoIndex]}
											controls={true}
											width="100%"
											height="500px"
											onEnded={handleEnded}
										/>
									</div>
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

							{/* Back Page */}
							<div className=" font-serif pb-16 cursor-pointer flex items-center gap-5 justify-center mx-auto ">
								<motion.svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									whileHover={{ x: -10 }}
									transition={{ duration: 0.1 }}
									onClick={handleHomePage1}
									className="w-6 text-gray-500   duration-700 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 19.5 8.25 12l7.5-7.5"
									/>
								</motion.svg>

								<p className=" text-center">1</p>
								<p className=" text-gray-500  text-center">2</p>
							</div>
						</div>
					</section>

					<Section2Component />
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default HomePage2Component;
