/** @format */

import React from "react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import ContainerComponent from "./Container.component";
import { NavLink, useNavigate } from "react-router-dom";

const NavComponent = () => {
	const nav = useNavigate();

	return (
		<div className="    bg-[#fcfcfc]">
			<ContainerComponent>
				<div className="flex items-center justify-between">
					<div className="flex items-center  space-x-12 ">
						<img
							onClick={() => nav("/")}
							className="  h-8 object-center   w-20 "
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/h5-logo-img-01.png"
							alt=""
						/>

						<div className=" flex items-center  space-x-12   h-24  ">
							<div
								className={
									"hover:border-b     transition-transform  hover:py-8 duration-500 hover:border-b-black"
								}>
								<Popover>
									<PopoverTrigger className="  font-serif     text-gray-700    tracking-[3px] text-[14px] ">
										HOME
									</PopoverTrigger>
									<PopoverContent className="w-[200px] h-[230px] animate__animated duration-1000 animate__fadeIn ">
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
									</PopoverContent>
								</Popover>
							</div>

							<div
								className={
									"hover:border-b    transition-transform  hover:py-8 duration-500 hover:border-b-black"
								}>
								<Popover>
									<PopoverTrigger className="  font-serif     text-gray-700    tracking-[3px] text-[14px] ">
										PAGES
									</PopoverTrigger>
									<PopoverContent className=" w-[200px] h-[180px] animate__animated  animate__animated duration-1000 animate__fadeIn  ">
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
									</PopoverContent>
								</Popover>
							</div>

							{/* BLOG */}
							<div
								className={
									"hover:border-b    transition-transform  hover:py-8 duration-500 hover:border-b-black"
								}>
								<Popover>
									<PopoverTrigger className="  font-serif     text-gray-700    tracking-[3px] text-[14px] ">
										BLOG
									</PopoverTrigger>
									<PopoverContent className="  flex  items-start    px-32 py-10  justify-between w-screen h-[450px] animate__animated  animate__animated duration-1000 animate__fadeIn  ">
										<div className=" w-[25%] flex flex-col items-start space-y-6 ">
											<h1 className=" tracking-[3px] font-medium text-gray-800 text-md font-serif">
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
										<div className=" w-[25%] flex flex-col items-start space-y-6 ">
											<h1 className=" font-medium eas tracking-[3px] text-gray-800 text-md font-serif">
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
										<div className=" w-[25%] flex flex-col items-start space-y-6 ">
											<h1 className=" tracking-[3px] font-medium text-gray-800 text-md font-serif">
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
										<div className=" w-[25%] flex flex-col items-start space-y-6 ">
											<h1 className=" tracking-[3px] font-medium text-gray-800 text-md font-serif">
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
									</PopoverContent>
								</Popover>
							</div>

							{/* SHOP */}
							<div
								className={
									"hover:border-b    transition-transform  hover:py-8 duration-500 hover:border-b-black"
								}>
								<Popover>
									<PopoverTrigger className="  font-serif     text-gray-700    tracking-[3px] text-[14px] ">
										SHOP
									</PopoverTrigger>
									<PopoverContent className=" w-[230px] h-[180px] animate__animated  duration-1000 animate__fadeIn  ">
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

												<HoverCardContent className="h-[150px]    absolute   -top-20   animate__fadeIn   animate__animated     left-28 w-[230px]">
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
									</PopoverContent>
								</Popover>
							</div>

							<div
								className={
									"hover:border-b    transition-transform  hover:py-8 duration-500 hover:border-b-black"
								}>
								<Popover>
									<PopoverTrigger className="  font-serif     text-gray-700    tracking-[3px] text-[14px] ">
										LANDING
									</PopoverTrigger>
									<PopoverContent className=" w-[200px] h-[180px] animate__animated  animate__animated duration-1000 animate__fadeIn  ">
										<ul className="  text-gray-700 space-y-5 p-5 ">
											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Shop List
											</li>

											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Shop Single
											</li>
											<li className="    group      ">
												<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
												Shop Pages
											</li>
										</ul>
									</PopoverContent>
								</Popover>
							</div>
						</div>

						{/* <NavigationMenu className=" h-24 ">
							<NavigationMenuList>
								<NavigationMenuItem className="hover:border-b  duration-1000  transition-transform  hover:border-b-black  ">
									<NavigationMenuTrigger className="  font-serif   font-medium  text-gray-700    tracking-[3px] text-xs  ">
										HOME{" "}
									</NavigationMenuTrigger>

									<NavigationMenuContent className="w-full duration-1000">
										<ul className="w-[250px] text-gray-700 space-y-5 h-[200px] p-5 ">
											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455] text-sm  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
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
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem className="hover:border-b  duration-1000 hover:border-b-black ">
									<NavigationMenuTrigger className="font-serif   font-medium    text-gray-700    tracking-[3px] text-xs  ">
										PAGES{" "}
									</NavigationMenuTrigger>

									<NavigationMenuContent>
										<ul className="w-[200px]  m-auto text-gray-700 space-y-5 h-[150px] p-5 ">
											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												About
											</li>

											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												About Me
											</li>
											<li className="    group      ">
												<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
												Contact
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem className="hover:border-b  duration-1000 hover:border-b-black ">
									<NavigationMenuTrigger className="font-serif   font-medium    text-gray-700    tracking-[3px] text-xs   ">
										BLOG{" "}
									</NavigationMenuTrigger>

									<NavigationMenuContent>
										<ul className=" w-[4000px] h-[500px]   m-auto text-gray-700 space-y-5  p-5 ">
											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												About
											</li>

											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												About Me
											</li>
											<li className="    group      ">
												<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
												Contact
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem className="hover:border-b  duration-1000 hover:border-b-black ">
									<NavigationMenuTrigger className="font-serif   font-medium    text-gray-700    tracking-[3px] text-xs  ">
										SHOP{" "}
									</NavigationMenuTrigger>

									<NavigationMenuContent>
										<NavigationMenuLink>JPASdas</NavigationMenuLink>
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem className="hover:border-b  duration-1000 hover:border-b-black ">
									<NavigationMenuTrigger className="font-serif   font-medium    text-gray-700    tracking-[3px] text-xs  ">
										LANDING{" "}
									</NavigationMenuTrigger>

									<NavigationMenuContent>
										<NavigationMenuLink>Link</NavigationMenuLink>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu> */}
					</div>

					<div className=" font-serif flex items-center gap-2">
						<p className="font-serif font-normal   text-gray-700 tracking-[3px] text-sm  ">
							SEARCH
						</p>

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
