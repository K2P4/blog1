/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ContainerComponent, SearchComponent } from "../components";
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
	const [sliderWidth, setSliderWidth] = useState(0);
	const [activeMenu, setActiveMenu] = useState(1);
	const [NavData, setNavData] = useState("");
	const menuRef = useRef([]);

	const { cart, toggleDelete, setBlock } = useContext(ShopContext);
	const { id } = useParams();
	const searchRef = useRef();
	const nav = useNavigate();
	const [sliderPosition, setSliderPosition] = useState(0);

	const removeCart = () => {
		toggleDelete(id);
		setBlock(false);
	};

	const handleSection = (
		active,
		conditionOne,
		conditionTwo,
		conditionThree,
		conditionFour
	) => {
		setActiveMenu(active);
		setHome(conditionOne);
		setPage(conditionTwo);
		setBlog(conditionThree);
		setShop(conditionFour);
	};

	useEffect(() => {
		if (menuRef.current[activeMenu]) {
			const menuItem = menuRef.current[activeMenu];
			setSliderPosition(menuItem.offsetLeft);
			setSliderWidth(menuItem.offsetWidth); // Adjust slider position based on active menu item
		}
	}, [activeMenu]);

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
			if (!searchRef?.current?.contains(e.target)) {
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
							style={{ left: `${sliderPosition}px` }}
							className=" flex items-center  space-x-16  justify-center mx-auto   h-24  ">
							{/*HOME */}

							<div
								ref={(el) => (menuRef.current[1] = el)}
								onMouseEnter={() => handleSection(1, true, false, false, false)}
								className=" w-full     relative   transition-transform  ">
								<h1 className="  text-center mx-auto w-full font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									HOME
								</h1>

								{toggleHome && (
									<div
										onMouseLeave={() => setHome(false)}
										className=" w-[250px]  cursor-pointer  z-50   duration-500   top-14  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[240px] animate__animated     animate__fadeIn  ">
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
								ref={(el) => (menuRef.current[2] = el)}
								onMouseEnter={() => handleSection(2, false, true, false, false)}
								className=" w-full   relative   transition-transform   ">
								<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									PAGES
								</h1>

								{togglePage && (
									<div
										onMouseLeave={() => setPage(false)}
										className=" w-[230px]  cursor-pointer  z-50   duration-500   top-14  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[200px] animate__animated     animate__fadeIn  ">
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
								ref={(el) => (menuRef.current[3] = el)}
								onMouseEnter={() => handleSection(3, false, false, true, false)}
								className=" w-full     relative   transition-transform   ">
								<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									BLOG
								</h1>

								{toggleBlog && (
									<div
										onMouseLeave={() => setBlog(false)}
										className=" w-[5000px]  cursor-pointer  z-50   duration-500  -left-[700px]  top-14  border border-slate-200 bg-white  px-40 py-10 text-slate-950 absolute   h-[475px] animate__animated     animate__fadeIn  ">
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
								ref={(el) => (menuRef.current[4] = el)}
								onMouseEnter={() => handleSection(4, false, false, false, true)}
								className="   w-full   relative   transition-transform   ">
								<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
									SHOP
								</h1>

								{toggleShop && (
									<div
										onMouseLeave={() => setShop(false)}
										className=" w-[230px]  cursor-pointer  z-50   duration-500   top-14  -left-[90px] border border-slate-200 bg-white p-4 text-slate-950 absolute   h-[200px] animate__animated     animate__fadeIn  ">
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
								<HoverCardTrigger
									ref={(el) => (menuRef.current[5] = el)}
									onMouseEnter={() =>
										handleSection(5, false, false, false, false)
									}
									className="       py-9    transition-transform   hover:border-b-black ">
									<h1 className="  font-serif select-none  text-[13px]    text-gray-700    tracking-[3px]  ">
										LANDING
									</h1>
								</HoverCardTrigger>
							</HoverCard>

							{/* Cart */}

							{!isFixed && (
								<div
									onMouseLeave={() => setCart(false)}
									onMouseEnter={() => setCart(true)}
									className="flex     relative   transition-transform    group items-end gap-1">
									<SlBag className=" w-5 h-5" />
									<p className=" font-serif text-xs duration-700  cursor-pointer group-hover:text-[#e2bfbf] ">
										{cart.length}
									</p>

									{toggleCart &&
										(cart?.length == 0 ? (
											<div className=" w-[350px]   text-gray-500 z-50   duration-1000   top-14  -left-[90px] border border-slate-200 bg-white p-4  absolute   h-[100px] animate__animated     animate__fadeIn  ">
												No Products in the cart.
											</div>
										) : (
											<div className=" w-[400px]   space-y-5 text-gray-500 z-50   duration-1000   top-14  -left-[90px] border border-pink-100 bg-white p-4  absolute   h-[auto] animate__animated     animate__fadeIn  ">
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

						{/* Slide Bar */}
						<div
							className=" absolute  text-center  w-full  top-24 z-40 duration-1000 border-b border-b-black transition-all "
							style={{
								left: `${sliderPosition - 7}px`,
								width: `${sliderWidth + 12}px`,
							}} // Adjust the width as needed
						/>
					</div>
				</ContainerComponent>
			</div>
			<div className="border-b-[#d1d1d1] border-b  ">
				<ContainerComponent>
					<div className="flex items-center gap-28  w-full justify-center  py-14 ">
						{/* search bar  */}
						<div className="w-[25%] mx-auto">
							<SearchComponent
								
								fullWidth="w-[300px]"
								fontSize="text-[16px]"
							/>
						</div>

						<img
							className=" w-[45%]    mx-auto h-full object-contain "
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/logo-main-img-01.png"
							alt=""
						/>

						<div className="flex w-[25%]  items-center gap-2 ">
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
