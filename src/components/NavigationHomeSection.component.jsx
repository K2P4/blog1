/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ContainerComponent } from "../components";
import { SlBag } from "react-icons/sl";
import {
	FaLinkedinIn,
	FaTwitter,
	FaFacebookF,
	FaBehance,
	FaVimeoV,
	FaSnapchatGhost,
} from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Input } from "@/components/ui/input";
import { ShopContext } from "../Contexts/ShopProductContext";
import { ListItem } from "@mui/material";

const NavigationHomeSectionComponent = () => {
	const [toggleHome, setHome] = useState(false);
	const [togglePage, setPage] = useState(false);
	const [toggleBlog, setBlog] = useState(false);
	const [toggleShop, setShop] = useState(false);
	const [toggleCart, setCart] = useState(false);
	const [isFixed, setIsFixed] = useState(false);
	const [toggleSearch, setToggleSearch] = useState(false);
	const { cart, toggleDelete, setBlock } = useContext(ShopContext);
	const { id } = useParams();
	const searchRef = useRef();
	const nav = useNavigate();

	const handleSearch = () => {
		setToggleSearch(true);
	};

	const removeCart = () => {
		toggleDelete(id);
		setBlock(false);
	};

	const scrollToSection = (id) => {
		const element = document.getElementById(id);

		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const navRoute = (route) => {
		nav(route);
	};

	const totalAmount = cart?.reduce((total, item) => {
		return Math.ceil(total) + Math.ceil(item?.price);
	}, 0);

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
		<div id="logo">
			{" "}
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
								onClick={() => navRoute("/")}
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
														<li
															onClick={() => navRoute("/shop-cart")}
															className="    group     ">
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
										{cart.length}
									</p>

									{toggleCart &&
										(cart?.length == 0 ? (
											<div className=" w-[350px]   text-gray-500 z-50   duration-1000   top-[100%]  -left-[90px] border border-slate-200 bg-white p-4  absolute   h-[100px] animate__animated     animate__fadeIn  ">
												No Products in the cart.
											</div>
										) : (
											<div className=" w-[400px]   space-y-5 text-gray-500 z-50   duration-1000   top-[100%]  -left-[90px] border border-pink-100 bg-white p-4  absolute   h-[auto] animate__animated     animate__fadeIn  ">
												{cart?.map((item) => (
													<div
														key={item?.id}
														className="flex  h-[100px] items-center justify-between align-middle">
														<img
															src={item?.image}
															className=" w-[130px] h-full border border-pink-200 p-1 object-cover "
															alt=""
														/>

														<div className=" w-[150px] text-left  space-y-2 ">
															<h1 className="text-xl text-gray-800 tracking-wider">
																{item?.name}
															</h1>
															<p className="text-gray-400 tracking-widest text-sm">
																QUANTIY: {item?.quantity}
															</p>
															<p className="text-gray-400  tracking-widest text-sm">
																${Math.ceil(item?.price * item?.quantity)}
															</p>
														</div>

														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth={1.5}
															onClick={removeCart}
															stroke="currentColor"
															className=" w-5 h-5 active:scale-90 select-none hover:text-gray-900 duration-700 transition-transform cursor-pointer  text-gray-800 ">
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M6 18 18 6M6 6l12 12"
															/>
														</svg>
													</div>
												))}

												<div className="flex  pt-5 items-center text-xl justify-between text-gray-800 tracking-widest">
													TOTAL : <p>${totalAmount}</p>
												</div>

												<div className="flex w-full items-center justify-between gap-5">
													<Button
														onClick={() => navRoute("/shop-cart")}
														className="  bg-black   hover:bg-gray-900   text-center transform      text-stone-50 font-serif  rounded-none     font-normal  opacity-95  text-xs py-4 px-7  tracking-[2.3px] w-full   ">
														VIEW CART
													</Button>

													<Button
														onClick={() => navRoute("/shop-checkout")}
														className="  bg-black   hover:bg-gray-900   text-center transform      text-stone-50 font-serif  rounded-none     font-normal  opacity-95  text-xs py-4 px-7  tracking-[2.3px] w-full   ">
														CHECKOUT
													</Button>
												</div>
											</div>
										))}
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
				</ContainerComponent>
			</div>
			<div className="border-b-[#d1d1d1] border-b  ">
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
			<Outlet />
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

export default NavigationHomeSectionComponent;
