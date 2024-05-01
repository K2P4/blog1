/** @format */

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Input } from "@/components/ui/input";

import ContainerComponent from "./Container.component";
import { NavLink, useNavigate } from "react-router-dom";

const NavComponent = () => {
	const [toggleHome, setHome] = useState(false);
	const searchRef = useRef();

	const nav = useNavigate();
	const [toggleSearch, setToggleSearch] = useState(false);

	const handleSearch = () => {
		setToggleSearch(true);
	};

	// const handleNavigate = () => {
	// 	setOp
	// }

	useEffect(() => {
		const handleMouse = (e) => {
			if (!searchRef.current.contains(e.target)) {
				setToggleSearch(false);
			}
		};

		window.addEventListener("mousedown", handleMouse);
		return () => {
			window.addEventListener("mousedown", handleMouse);
		};
	}, []);

	return (
		<div className="    bg-[#fcfcfc]">
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
									<div className=" w-[250px]   z-50   duration-500   top-[100%]  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[240px] animate__animated     animate__fadeIn  ">
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
							<HoverCard>
								<HoverCardTrigger className=" hover:border-b    py-9    transition-transform   hover:border-b-black ">
									<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
										PAGES
									</h1>
								</HoverCardTrigger>
								<HoverCardContent className=" w-[200px] h-[200px] animate__animated     animate__fadeInDown ">
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
								</HoverCardContent>
							</HoverCard>

							{/* BLOG */}

							<HoverCard>
								<HoverCardTrigger className="    hover:border-b    py-9    transition-transform   hover:border-b-black ">
									<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
										BLOG
									</h1>
								</HoverCardTrigger>

								<HoverCardContent className=" w-[3000px]  select-none absolute -top-1   px-36 py-10  -left-[540px]    animate__animated animate__fadeInDown  ">
									<div className=" flex items-start ">
										<div className="  flex flex-col w-[10%] items-start space-y-6 ">
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
										<div className="  flex flex-col w-[10%] items-start space-y-6 ">
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
										<div className="  flex flex-col w-[10%] items-start space-y-6 ">
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
										<div className="  flex flex-col w-[10%] items-start space-y-6 ">
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
								</HoverCardContent>
							</HoverCard>

							{/* SHOP */}

							<HoverCard>
								<HoverCardTrigger className="    hover:border-b    py-9    transition-transform   hover:border-b-black ">
									<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
										SHOP
									</h1>
								</HoverCardTrigger>
								<HoverCardContent className=" w-[230px] h-[180px] animate__animated  duration-1000 animate__fadeInDown  ">
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
								</HoverCardContent>
							</HoverCard>

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
						className={` font-serif  flex items-center  select-none gap-2`}>
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
		</div>
	);
};

export default NavComponent;
