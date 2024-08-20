/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	ContainerComponent,
	FooterComponent,
	PostLayoutComponent,
	Section2Component,
	SlideCarouselCompnent
	
} from "../components";
import { motion } from "framer-motion";
import InstagramComponent from "./Instagram.component";

const HomeSectionComponent = () => {
	const [isFixed, setIsFixed] = useState(false);
	const [toggleSearch, setToggleSearch] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const nav = useNavigate();

	const handleHomePage2 = () => {
		nav("HomePage2");
	};

	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.activeIndex);
	};

	const searchRef = useRef();

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
		<div className=" bg-white  h-auto ">
			{/* Home Section Carousel */}
			<SlideCarouselCompnent />

			<ContainerComponent>
				<div className="flex gap-12">
					{/* Section One */}
					<section className="w-[70%]">
						<div className=" space-y-4">
							<PostLayoutComponent
								path={31}
								type={"INSPRIATION"}
								title={"Ready For A Weekend"}
								image={
									"https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-img-1.jpg"
								}
								date={"MARCH 1 2021"}
								writer={"BY KATHRINE BISHOP"}
							/>

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

							<PostLayoutComponent
								path={32}
								type={"LIFESTYLE"}
								title={"Best skincare routine for dry skin"}
								image={
									"https://zoya.qodeinteractive.com/wp-content/uploads/2021/03/blog-img-8.jpg"
								}
								date={"MARCH 5, 2021"}
								writer={"BY KATHRINE BISHOP"}
							/>

							<PostLayoutComponent
								path={33}
								type={"LIFESTYLE"}
								title={"Amazing dresses and gowns for prom"}
								image={
									"https://zoya.qodeinteractive.com/wp-content/uploads/2021/03/blog-img-9.jpg"
								}
								date={"MARCH 5, 2021"}
								writer={"BY KATHRINE BISHOP"}
							/>

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

							<PostLayoutComponent
								path={34}
								type={"TRAVEL"}
								title={"Ten best recipes for a light dinner"}
								image={
									"https://zoya.qodeinteractive.com/wp-content/uploads/2021/03/blog-img-10.jpg"
								}
								date={"MARCH 8, 2021"}
								writer={"BY KATHRINE BISHOP"}
							/>

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

					{/* Section Two */}
					<Section2Component />
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default HomeSectionComponent;
