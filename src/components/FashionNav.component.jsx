/** @format */

import React, { useEffect, useRef, useState } from "react";

import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

import ContainerComponent from "./Container.component";
import { NavLink, useNavigate } from "react-router-dom";

const FashionNavComponent = () => {
	const [toggleHome, setHome] = useState(false);
	const [activeMenu, setActiveMenu] = useState(1);
	const [toggleBlog, setBlog] = useState(false);
	const [toggleShop, setShop] = useState(false);
	const [isFixed, setIsFixed] = useState(false);
	const [toggleSearch, setToggleSearch] = useState(false);
	const [sliderWidth, setSliderWidth] = useState(0);
	const [sliderPosition, setSliderPosition] = useState(0);
	const menuRef = useRef([]);

	const searchRef = useRef();
	const nav = useNavigate();

	const handleSection = (
		active,
		conditionOne,
		conditionTwo,
		conditionThree
	) => {
		setActiveMenu(active);
		setHome(conditionOne);
		setBlog(conditionTwo);
		setShop(conditionThree);
	};

	useEffect(() => {
		if (menuRef.current[activeMenu]) {
			const menuItem = menuRef.current[activeMenu];
			setSliderPosition(menuItem.offsetLeft);
			setSliderWidth(menuItem.offsetWidth); // Adjust slider position based on active menu item
		}
	}, [activeMenu]);

	const handleSearch = () => {
		setToggleSearch(true);
	};

	const navRoute = (route) => {
		nav(route);
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
		<div id="logo" className="    bg-[#fcfcfc]">
			<ContainerComponent>
				<div
					style={{ left: `${sliderPosition}px` }}
					className="flex justify-center items-center mx-auto  py-12  space-x-12 ">
					<div className=" flex items-center  space-x-12   h-24  ">
						{/*HOME */}

						<div
							ref={(el) => (menuRef.current[1] = el)}
							onMouseEnter={() => handleSection(1, true, false, false, false)}
							className="   relative   transition-transform   ">
							<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
								HOME
							</h1>

							{toggleHome && (
								<div
									onMouseLeave={() => setHome(false)}
									className=" w-[250px]  cursor-pointer  z-50   duration-500   top-16  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[240px] animate__animated     animate__fadeIn  ">
									<ul className="  text-gray-700 space-y-5 p-5 ">
										<li
											onClick={() => navRoute("/HomeSection")}
											className="    group     ">
											<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
											Main Home
										</li>
										<li
											onClick={() => navRoute("/")}
											className="    group     ">
											<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
											Travel Blog
										</li>
										<li
											onClick={() => navRoute("/lifestyle")}
											className="    group      ">
											<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
											Lifestyle Blog
										</li>
										<li
											onClick={() => navRoute("/fashion")}
											className="    group      ">
											<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
											Fashion Blog
										</li>
									</ul>
								</div>
							)}
						</div>

						{/* ABOUT */}
						<div
							ref={(el) => (menuRef.current[2] = el)}
							onMouseEnter={() => handleSection(2, false, false, false)}
							className=" relative   transition-transform  ">
							<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
								ABOUT
							</h1>
						</div>

						{/* BLOG */}

						<div
							ref={(el) => (menuRef.current[3] = el)}
							onMouseEnter={() => handleSection(3, false, true, false)}
							className=" relative   transition-transform   ">
							<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
								BLOG
							</h1>

							{toggleBlog && (
								<div
									onMouseLeave={() => setBlog(false)}
									className=" w-[5000px]  mx-auto cursor-pointer  z-50   duration-500  -left-[420px]  top-16  border border-slate-200 bg-white  px-40 py-10 text-slate-950 absolute   h-[450px] animate__animated     animate__fadeIn  ">
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
									</div>
								</div>
							)}
						</div>

						<img
							onClick={() => nav("/HomeSection")}
							className=" mx-auto w-[280px] object-cover "
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/h2-logo-img-01.png"
							alt=""
						/>

						{/* SHOP */}

						<div
							ref={(el) => (menuRef.current[4] = el)}
							onMouseEnter={() => handleSection(4, false, false, true)}
							className="  relative   transition-transform   ">
							<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
								SHOP
							</h1>

							{toggleShop && (
								<div
									onMouseLeave={() => setShop(false)}
									className=" w-[230px]  cursor-pointer  z-50   duration-500   top-16  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[200px] animate__animated     animate__fadeIn  ">
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

						{/* CONTACT */}
						<div
							ref={(el) => (menuRef.current[5] = el)}
							onMouseEnter={() => handleSection(5, false, false, false)}
							className="  relative   transition-transform  ">
							<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
								CONTACT
							</h1>
						</div>

						<HoverCard
							ref={(el) => (menuRef.current[6] = el)}
							onMouseEnter={() => handleSection(6, false, false, false)}>
							<HoverCardTrigger className="       transition-transform   ">
								<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									LANDING
								</h1>
							</HoverCardTrigger>
						</HoverCard>
					</div>
				</div>

				{/* Slide Bar */}
				<div
					className=" absolute  text-center  w-full   top-[148px] z-40 duration-1000 border-b border-b-black transition-all "
					style={{
						left: `${sliderPosition - 7}px`,
						width: `${sliderWidth + 12}px`,
					}} // Adjust the width as needed
				/>
			</ContainerComponent>

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

export default FashionNavComponent;
