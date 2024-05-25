/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
	ArchiveComponent,
	CarouselPostComponent,
	ContainerComponent,
	DetailPostComponent,
	TagsComponent,
} from "../components";
import { SlBag } from "react-icons/sl";

import {
	FaTwitter,
	FaBehance,
	FaTelegramPlane,
	FaVimeoV,
} from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";

import { FaLinkedinIn, FaFacebookF, FaSnapchatGhost } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import SwiperCore from "swiper/core";
import { FiShare } from "react-icons/fi";

import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useGetHomeSlideQuery } from "../service/endpoints/BlogEndpints";
import InstagramComponent from "./Instagram.component";
import { FooterComponent } from "flowbite-react";

SwiperCore.use([Scrollbar]);

const HomeSectionComponent = () => {
	const [toggleHome, setHome] = useState(false);
	const [togglePage, setPage] = useState(false);
	const [toggleBlog, setBlog] = useState(false);
	const [toggleShop, setShop] = useState(false);
	const [toggleCart, setCart] = useState(false);
	const [isFixed, setIsFixed] = useState(false);
	const [toggleSearch, setToggleSearch] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const totalSlides = 3;

	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.activeIndex);
	};

	const { data, isloading } = useGetHomeSlideQuery();

	const { id } = useParams();
	const searchRef = useRef();
	const nav = useNavigate();

	const handleSearch = () => {
		setToggleSearch(true);
	};

	const scrollToSection = (id) => {
		const element = document.getElementById(id);

		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};
		const handleMouse = (e) => {
			if (!searchRef.current.contains(e.target)) {
				setToggleSearch(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("mousedown", handleMouse);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.addEventListener("mousedown", handleMouse);
		};
	}, []);
	return (
		<div id="logo" className=" bg-white  h-[20000px] ">
			<div
				className={`border-b-[#d1d1d1] ${
					isFixed &&
					"fixed bg-white flex items-center   justify-center gap-auto  w-full z-50 duration-1000 animate_animated animate_fadeIn "
				} border-b  `}>
				<ContainerComponent>
					<div className="flex items-center  mx-auto ">
						{/*LOGO */}
						{isFixed && (
							<img
								className="  h-16 w-auto  me-auto object-contain "
								src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/06/logo-sticky-img-04.png"
								alt=""
							/>
						)}

						<div
							className={` w-auto  flex items-center justify-center mx-auto  space-x-12   h-20  `}>
							{/*HOME */}

							<div
								onMouseLeave={() => setHome(false)}
								onMouseEnter={() => setHome(true)}
								className="hover:border-b  cursor-pointer  py-[30px] relative   transition-transform   hover:border-b-black">
								<h1 className="   font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									HOME
								</h1>

								{toggleHome && (
									<div className=" w-[250px]   z-50   duration-1000   top-[100%]  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[240px] animate__animated     animate__fadeIn  ">
										<ul className="  text-gray-700 space-y-5 p-5 ">
											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Main Home
											</li>
											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Travel Blog
											</li>
											<li className="    group      ">
												<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
												Lifestyle Blog
											</li>
											<li className="    group      ">
												<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Fashion Blog
											</li>
										</ul>
									</div>
								)}
							</div>

							{/* PAGES */}
							<div
								onMouseLeave={() => setPage(false)}
								onMouseEnter={() => setPage(true)}
								className="hover:border-b cursor-pointer   py-[30px] relative   transition-transform   hover:border-b-black">
								<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									PAGES
								</h1>

								{togglePage && (
									<div className=" w-[230px]   z-50   duration-1000    top-[100%]  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[200px] animate__animated     animate__fadeIn  ">
										<ul className="  text-gray-700 space-y-5 p-5 ">
											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												About
											</li>

											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Contact
											</li>
											<li className="    group      ">
												<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
												Contact Me
											</li>
										</ul>
									</div>
								)}
							</div>

							{/* BLOG */}

							<div
								onMouseLeave={() => setBlog(false)}
								onMouseEnter={() => setBlog(true)}
								className="hover:border-b  cursor-pointer  py-[30px] relative   transition-transform   hover:border-b-black">
								<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									BLOG
								</h1>

								{toggleBlog && (
									<div className=" w-[5000px]   z-50   duration-1000   -left-[630px]  top-[100%]  border border-slate-200 bg-white  px-40 py-10 text-slate-950 absolute   h-[450px] animate__animated     animate__fadeIn  ">
										<div className=" flex items-start ">
											<div className="  flex flex-col w-[6%] items-start space-y-6 ">
												<h1 className=" tracking-[3px] font-medium text-gray-700 text-sm font-serif">
													LIST TYPES
												</h1>
												<ul className="  text-gray-700 space-y-4 ">
													<li className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Right SideBar
													</li>

													<li className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Left SideBar
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														No SideBar
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Info Right
													</li>

													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Compact
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Divided
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Info Box
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Category List
													</li>
												</ul>
											</div>
											<div className="  flex flex-col w-[6%] items-start space-y-6 ">
												<h1 className=" font-medium eas tracking-[3px] text-gray-700 text-sm font-serif">
													LAYOUT TYPES
												</h1>
												<ul className="  text-gray-700 space-y-4 ">
													<li className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Two Colums
													</li>

													<li className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Three Columns Wide
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Four Columns
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Four Columns Wide
													</li>

													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Five Columns
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Five Columns Wide
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Six Columns
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Six Columns Wide
													</li>
												</ul>
											</div>
											<div className="  flex flex-col w-[6%] items-start space-y-6 ">
												<h1 className=" tracking-[3px] font-medium text-gray-700 text-sm font-serif">
													POST TYPES
												</h1>
												<ul className="  text-gray-700 space-y-4 ">
													<li className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Standard
													</li>

													<li className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Gallery
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Audio
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Video
													</li>

													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Quote
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Link
													</li>
												</ul>
											</div>
											<div className="  flex flex-col w-[6%] items-start space-y-6 ">
												<h1 className=" tracking-[3px] font-medium text-gray-700 text-sm font-serif">
													ARCHIVE PAGES
												</h1>
												<ul className="  text-gray-700 space-y-4 ">
													<li className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Author Page
													</li>

													<li className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Filter By Category
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Filter By Date
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Filter By Tag
													</li>

													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														View All Posts
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Search Results
													</li>
												</ul>
											</div>
										</div>
									</div>
								)}
							</div>

							{/* SHOP */}

							<div
								onMouseLeave={() => setShop(false)}
								onMouseEnter={() => setShop(true)}
								className="hover:border-b  cursor-pointer  py-[30px] relative   transition-transform   hover:border-b-black">
								<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									SHOP
								</h1>

								{toggleShop && (
									<div className=" w-[230px]   z-50  duration-1000    top-[100%]  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[200px] animate__animated     animate__fadeIn  ">
										<ul className="  relative text-gray-700 space-y-5 p-5 w-full">
											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Shop List
											</li>

											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Shop Single
											</li>

											<HoverCard>
												<HoverCardTrigger className="flex items-center justify-between  w-full">
													<li className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Shop Pages
													</li>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="w-4 h-4">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="m8.25 4.5 7.5 7.5-7.5 7.5"
														/>
													</svg>
												</HoverCardTrigger>

												<HoverCardContent className="h-[150px]    absolute   -top-20   animate__fadeIn duration-500  animate__animated     left-28 w-[230px]">
													<ul className="   text-gray-700 space-y-5 p-3 ">
														<li className="    group     ">
															<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
															My Account
														</li>
														<li className="    group     ">
															<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
															Cart
														</li>
														<li className="    group     ">
															<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
															Check Out
														</li>
													</ul>
												</HoverCardContent>
											</HoverCard>
										</ul>
									</div>
								)}
							</div>

							<HoverCard>
								<HoverCardTrigger className="    hover:border-b  py-[30px]   transition-transform   hover:border-b-black ">
									<h1 className=" cursor-pointer  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
										LANDING
									</h1>
								</HoverCardTrigger>
							</HoverCard>

							{/* Cart */}

							{!isFixed && (
								<div
									onMouseLeave={() => setCart(false)}
									onMouseEnter={() => setCart(true)}
									className="flex hover:border-b    py-[30px]  relative   transition-transform   hover:border-b-black group items-end gap-1">
									<SlBag className=" w-5 h-5" />
									<p className=" font-serif text-xs duration-700  cursor-pointer group-hover:text-[#e2bfbf] ">
										{" "}
										(0)
									</p>

									{toggleCart && (
										<div className=" w-[350px]   text-gray-500 z-50   duration-1000   top-[100%]  -left-[90px] border border-slate-200 bg-white p-4  absolute   h-[100px] animate__animated     animate__fadeIn  ">
											No Products in the cart.
										</div>
									)}
								</div>
							)}
						</div>

						{isFixed && (
							<div
								ref={searchRef}
								onClick={handleSearch}
								className={` font-serif cursor-pointer  w-28 ms-auto flex items-center  select-none gap-1`}>
								{toggleSearch ? (
									<Input
										className={` mt-0 p-0 w-[150px]  focus:outline-0  animate__animated   outline-0 border-0 border-b border-b-black rounded-none  text-sm text-left  animate__fadeInRight duration-1000 `}
									/>
								) : (
									<p
										className={`font-serif font-normal duration-700     text-gray-700 tracking-[3px] text-sm  `}>
										SEARCH
									</p>
								)}

								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={`w-6 text-gray-700  mt-0 h-6`}>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
									/>
								</svg>
							</div>
						)}
					</div>
				</ContainerComponent>{" "}
			</div>
			<div className=" ">
				<ContainerComponent>
					<div className="flex items-center gap-56  ">
						{/* search bar  */}
						<div
							ref={searchRef}
							onClick={handleSearch}
							className={` font-serif cursor-pointer   flex items-center  select-none gap-1`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 text-gray-700 mt-0 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
								/>
							</svg>

							{!toggleSearch && (
								<div className="    border-b animate__fadeOutLeft border-b-gray-800 animate__animated  duration-1000 "></div>
							)}
							{toggleSearch ? (
								<Input
									className={` mt-0 p-0 w-[180px]  focus:outline-0  animate__animated   outline-0 border-0 border-b border-b-black rounded-none  text-sm text-left  animate__slideInLeft duration-1000 `}
								/>
							) : (
								<p
									className={`font-serif font-normal duration-700     text-gray-700 tracking-[3px] text-sm  `}>
									SEARCH
								</p>
							)}
						</div>

						<div className="w-[45%] mx-auto">
							<img
								className=" w-[300px] mx-auto h-[210px] object-contain"
								src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/logo-main-img-01.png"
								alt=""
							/>
						</div>

						<div className="flex  items-center gap-2 ">
							<FaLinkedinIn className=" hover:text-gray-600 duration-500 " />
							<FaTwitter className=" hover:text-gray-600 duration-500 " />
							<FaFacebookF className=" hover:text-gray-600 duration-500 " />
							<FaInstagram className=" hover:text-gray-600 duration-500 " />
							<FaBehance className=" hover:text-gray-600 duration-500 " />
							<FaVimeoV className=" hover:text-gray-600 duration-500 " />
							<FaPinterestP className=" hover:text-gray-600 duration-500 " />
							<FaSnapchatGhost />
						</div>
					</div>
				</ContainerComponent>
			</div>

			{/* Home Section Carousel */}
			<div className="w-full m-auto">
				{isloading && <BlogLoadingComponent />}
				<Swiper
					slidesPerView={2}
					loop={true}
					spaceBetween={10}
					centeredSlides={true}
					scrollbar={{
						hide: false,
						draggable: true,
					}}
					onSlideChange={(swiper) => {
						// Handle slide change
						const slides = document.querySelectorAll(".swiper-slide");
						slides.forEach((slide, index) => {
							if (index === swiper.activeIndex) {
								slide
									.querySelector(".overlay")
									.classList.add("animate__fadeIn", "bg-opacity-20");
								slide
									.querySelector(".slideContent")
									.classList.remove("hidden", "duration-1000");
							} else {
								slide
									.querySelector(".overlay")
									.classList.remove("animate__fadeIn", "bg-opacity-20");

								slide
									.querySelector(".slideContent")
									.classList.add("hidden", "duration-1000");
							}
						});
					}}
					modules={[Scrollbar]}
					className="mySwiper h-[440px] animate__slideInLeft animate__animated  duration-1000 w-full mx-auto  ">
					{data?.map((item) => (
						<SwiperSlide className="relative cursor-grab duration-1000  ">
							<div className="relative">
								<div className="overlay absolute inset-0  bg-gray-700  animate__animated   bg-opacity-5  "></div>
								<img
									className="  overlay object-cover h-[400px]  m-auto w-full "
									src={item?.image}
									alt="Slide 1"
								/>
							</div>
							<div className=" w-full left-1 duration-1000  absolute   slideContent flex items-center flex-col justify-center   bottom-32 mx-auto  ">
								<div className="flex  animate__zoomIn  animate__animated  duration-1000  items-center text-center justify-center   m-auto gap-5 ">
									<div className=" border w-[40px] border-stone-50 "></div>
									<h1 className="  tracking-[2.5px] font-medium  text-stone-50 text-center font-serif text-[12px] ">
										{item?.type}
									</h1>

									<div className=" border w-[40px]  border-stone-50"></div>
								</div>

								<h1 className="  text-3xl my-4  animate__fadeInUp  animate__animated  duration-1000   text-white w-full   text-center ">
									Roadtrip with closest friends
								</h1>

								<h1 className="  font-medium  animate__fadeInUp  animate__animated  duration-1000 font-serif text-[13px] tracking-[2px]  text-gray-100  text-center   ">
									{item?.date}| {item?.writer}
								</h1>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<ContainerComponent>
				<div className="flex gap-12">
					{/* Section One */}
					<section className="w-[70%]">
						{/* Header1 */}
						<div className=" space-y-4">
							<div className="">
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
							<div className="">
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
							<div className="">
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
							<div className="">
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

							<div className=" font-serif flex items-center gap-5 justify-center mx-auto ">
								<p className="text-gray-600  text-center">1</p>
								<p className=" text-center">2</p>
								<motion.svg
									whileHover={{ x: 10 }}
									transition={{ duration: 0.1 }}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 text-gray-600   duration-700 h-6">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m8.25 4.5 7.5 7.5-7.5 7.5"
									/>
								</motion.svg>
							</div>
						</div>
					</section>

					{/* Section Two */}
					<section className="w-[25%] flex flex-col gap-14">
						{/* Blogger */}
						<div className="w-full relative">
							<p className="h-[65px] z-50  -top-10 left-[50%] w-[1px] absolute  duration-500   bg-[#fde7e7] "></p>
							<div className="bg-[#faf7f9] w-[90%] mx-auto  mt-32  p-9">
								<img
									className=" object-cover  h-36 w-36 mx-auto  "
									src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/user-img-1.png"
									alt=""
								/>

								<h1 className="text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2] my-4 text-center text-[12px] tracking-[3px] font-serif ">
									BLOGGER
								</h1>

								<p className="text-[#727272]   text-center mx-auto tracking-wide leading-[28px] ">
									Welcome to my blog where I share my lifestyle tips, healthy
									snack ideas…
								</p>
							</div>
						</div>

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
					</section>
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />

			{isFixed && (
				<motion.div className=" cursor-pointer z-50  fixed  right-8 bottom-20 border border-[#FFD0D0]">
					<motion.svg
						whileHover={{ translateY: -5, duration: 0.7 }}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						onClick={() => scrollToSection("logo")}
						className="w-12 p-3 text-[#FFD0D0] h-12">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m4.5 15.75 7.5-7.5 7.5 7.5"
						/>
					</motion.svg>
				</motion.div>
			)}
		</div>
	);
};

export default HomeSectionComponent;
