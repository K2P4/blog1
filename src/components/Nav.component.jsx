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

const NavComponent = () => {
	const [toggleHome, setHome] = useState(false);
	const [togglePage, setPage] = useState(false);
	const [toggleBlog, setBlog] = useState(false);
	const [toggleShop, setShop] = useState(false);
	const [isFixed, setIsFixed] = useState(false);
	const [toggleSearch, setToggleSearch] = useState(false);
	const searchRef = useRef();
	const nav = useNavigate();

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
				<div className="flex items-center relative justify-between">
					<div className="flex items-center  space-x-12 ">
						<img
							onClick={() => nav("/")}
							className="  h-8 object-center   w-20 "
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/h5-logo-img-01.png"
							alt=""
						/>

						<div className=" flex items-center  space-x-12   h-24  ">
							{/*HOME */}

							<div
								onMouseLeave={() => setHome(false)}
								onMouseEnter={() => setHome(true)}
								className="hover:border-b     py-9  relative   transition-transform   hover:border-b-black">
								<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									HOME
								</h1>

								{toggleHome && (
									<div className=" w-[250px]  cursor-pointer  z-50   duration-500   top-[100%]  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[240px] animate__animated     animate__fadeIn  ">
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

								{/* <div className=" w-[250px]   z-50     top-[99%]  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[240px] animate__animated     animate__fadeIn  ">
									<ul className="  text-gray-700 space-y-5 p-5 ">
										<li onMouseEnter={() => setIsOpen(true)} className="         ">
											<span className=" group-hover:border-s-[#ED9455]  border-s-0  group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
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
								</div> */}
							</div>

							{/* PAGES */}
							<div
								onMouseLeave={() => setPage(false)}
								onMouseEnter={() => setPage(true)}
								className="hover:border-b     py-9  relative   transition-transform   hover:border-b-black">
								<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									PAGES
								</h1>

								{togglePage && (
									<div className=" w-[230px]  cursor-pointer  z-50   duration-500   top-[100%]  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[200px] animate__animated     animate__fadeIn  ">
										<ul className="  text-gray-700 space-y-5 p-5 ">
											<li
												onClick={() => navRoute("/about")}
												className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												About
											</li>

											<li
												onClick={() => navRoute("/contact")}
												className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Contact
											</li>
											<li
												onClick={() => navRoute("/contact")}
												className="    group      ">
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
								className="hover:border-b     py-9  relative   transition-transform   hover:border-b-black">
								<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									BLOG
								</h1>

								{toggleBlog && (
									<div className=" w-[5000px]  cursor-pointer  z-50   duration-500  -left-[470px]  top-[100%]  border border-slate-200 bg-white  px-40 py-10 text-slate-950 absolute   h-[450px] animate__animated     animate__fadeIn  ">
										<div className=" flex items-start ">
											<div className="  flex flex-col w-[6%] items-start space-y-6 ">
												<h1 className=" tracking-[3px] font-medium text-gray-700 text-sm font-serif">
													LIST TYPES
												</h1>
												<ul className="  text-gray-700 space-y-4 ">
													<li
														onClick={() => navRoute("/rightside")}
														className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Right SideBar
													</li>

													<li
														onClick={() => navRoute("/leftside")}
														className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Left SideBar
													</li>
													<li
														onClick={() => navRoute("/noside")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														No SideBar
													</li>

													<li
														onClick={() => navRoute("/compact")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Compact
													</li>
													<li
														onClick={() => navRoute("/divided")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Divided
													</li>
													<li className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Info Box
													</li>
													<li
														onClick={() => navRoute("/category")}
														className="    group      ">
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
													<li
														onClick={() => navRoute("/column-two")}
														className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Two Colums
													</li>

													<li
														onClick={() => navRoute("/column-three")}
														className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Three Columns Wide
													</li>
													<li
														onClick={() => navRoute("/column-four")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Four Columns
													</li>
													<li
														onClick={() => navRoute("/column-four")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Four Columns Wide
													</li>

													<li
														onClick={() => navRoute("/column-five")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Five Columns
													</li>
													<li
														onClick={() => navRoute("/column-five")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Five Columns Wide
													</li>
													<li
														onClick={() => navRoute("/column-five")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Six Columns
													</li>
													<li
														onClick={() => navRoute("/column-five")}
														className="    group      ">
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
													<li
														onClick={() => navRoute("/author")}
														className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Author Page
													</li>

													<li
														onClick={() => navRoute("/archive-category")}
														className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Filter By Category
													</li>
													<li
														onClick={() => navRoute("/archive-date")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Filter By Date
													</li>
													<li
														onClick={() => navRoute("/archive-tag")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Filter By Tag
													</li>

													<li
														onClick={() => navRoute("/archive-view")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														View All Posts
													</li>
													<li
														onClick={() => navRoute("/archive-search")}
														className="    group      ">
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
													<li
														onClick={() => navRoute("/detail/31")}
														className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Standard
													</li>

													<li
														onClick={() => navRoute("/gallery-scan")}
														className="    group     ">
														<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
														Gallery
													</li>
													<li
														onClick={() => navRoute("/detailmedia/37")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Audio
													</li>
													<li
														onClick={() => navRoute("/video")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Video
													</li>

													<li
														onClick={() => navRoute("/quote")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Quote
													</li>
													<li
														onClick={() => navRoute("/link")}
														className="    group      ">
														<span className=" group-hover:border-s-[#ED9455] text-sm duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
														Link
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
								className="hover:border-b     py-9  relative   transition-transform   hover:border-b-black">
								<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									SHOP
								</h1>

								{toggleShop && (
									<div className=" w-[230px]  cursor-pointer  z-50   duration-500   top-[100%]  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[200px] animate__animated     animate__fadeIn  ">
										<ul className="  relative text-gray-700 space-y-5 p-5 w-full">
											<li
												onClick={() => navRoute("/shop-list")}
												className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Shop List
											</li>

											<li
												onClick={() => navRoute("/shop-single")}
												className="    group     ">
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
														<li
															onClick={() => navRoute("/shop-account")}
															className="    group     ">
															<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
															My Account
														</li>
														<li
															onClick={() => navRoute("/shop-cart")}
															className="    group     ">
															<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
															Cart
														</li>
														<li
															onClick={() => navRoute("/shop-checkout")}
															className="    group     ">
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
								<HoverCardTrigger className="    hover:border-b    py-9    transition-transform   hover:border-b-black ">
									<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
										LANDING
									</h1>
								</HoverCardTrigger>
							</HoverCard>
						</div>
					</div>
					{/* search bar  */}
					<div
						ref={searchRef}
						onClick={handleSearch}
						className={` font-serif cursor-pointer  flex items-center  select-none gap-2`}>
						{!toggleSearch && (
							<div className="w-[180px] mt-5 me-7 border-b animate__fadeOutRight border-b-black animate__animated  duration-1000 ">
								{" "}
							</div>
						)}
						{toggleSearch ? (
							<Input
								className={` mb-4   w-[180px]  focus:outline-0  animate__animated   outline-0 border-0 border-b border-b-black rounded-none  text-sm text-left  animate__slideInRight duration-1000 `}
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
							className="w-6 text-gray-700 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
							/>
						</svg>
					</div>
				</div>
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

export default NavComponent;
