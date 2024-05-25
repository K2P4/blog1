/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetBlogQuery } from "../service/endpoints/BlogEndpints";
import { Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import {
	HiroSectionLoading,
	LatestPostComponent,
	PopularPostComponent,
	ProductsComponent,
	Slide1Component,
	Slide2Component,
	FooterComponent,
	NavComponent,
} from "../components";
import { Input } from "@/components/ui/input";
import { FaTelegramPlane } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";

import InstagramComponent from "../components/Instagram.component";

const HomePage = () => {
	const { data, isLoading } = useGetBlogQuery();
	const [showBox, setShowBox] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowBox(true);
		}, 8000);

		return () => clearTimeout(timer);
	}, []);

	const [animation, setAnimation] = useState(false);

	const changeAnimation = () => {
		setAnimation(true);
	};

	const NoAnimation = () => {
		setAnimation(false);
	};

	return (
		<div className="">
			<div className={` ${showBox && "  opacity-30 "} `}>
				<NavComponent />
				<div id="home" className={`w-full mb-32 `}>
					<Swiper
						effect={"fade"}
						slidesPerView={1}
						loop={true}
						centeredSlides={true}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						modules={[EffectFade, Autoplay]}
						className="mySwiper">
						<div className=" relative w-full  duration-1000">
							<SwiperSlide>
								<img
									className="w-full     duration-700   bg-opacity-80  "
									src="https://zoya.qodeinteractive.com/wp-content/uploads/2020/11/blog-list-img-101.jpg"
									alt=""
								/>

								<div
									className={` absolute  
											 animate__fadeInUp animate__animated  opacity-95
										   duration-1000  z-30 top-[38%]  text-center  left-40  w-[80%]   text-white`}>
									<div className="flex animate__zoomIn  animate__animated  duration-1000  items-center text-center justify-center   m-auto gap-5 ">
										<p className="h-px w-[4%] bg-gray-200 "></p>
										<h1 className="  tracking-[2px] font-medium  text-center font-serif text-sm ">
											BEAUTY
										</h1>
										<p className="h-px w-[4%] bg-gray-200 "></p>
									</div>
									<h1 className="  text-5xl my-4    text-center ">
										Roadtrip with closest friends
									</h1>
									<h1 className="  font-medium font-serif text-sm tracking-widest  text-gray-200  text-center   ">
										JULY 1 2020 | BY LINDA FORD
									</h1>
								</div>
								<p className=" absolute text-right border-b-white w-[15%] border-b left-0 top-[48%] font-semibold text-white">
									1
								</p>
							</SwiperSlide>

							<SwiperSlide>
								<img
									className="w-full     duration-700   bg-opacity-80  "
									src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-list-img-75.jpg"
									alt=""
								/>

								<div className=" absolute animate__fadeInUp animate__animated   opacity-95 duration-1000  z-30 top-[38%]  text-center  left-40  w-[80%]   text-white">
									<div className="flex animate__zoomIn  animate__animated  duration-1000  items-center text-center justify-center   m-auto gap-5 ">
										<p className="h-px w-[4%] bg-gray-200 "></p>
										<h1 className="  tracking-[2px] font-medium  text-center font-serif text-sm ">
											INSPIRATION
										</h1>
										<p className="h-px w-[4%] bg-gray-200 "></p>
									</div>
									<h1 className="  text-5xl my-4    text-center ">
										Detail that make evey outfit great
									</h1>
									<h1 className="  font-medium font-serif text-sm tracking-widest  text-gray-200  text-center   ">
										APRIL 19,2021 | BY LINDA FORD
									</h1>
								</div>
								<p className=" absolute text-right border-b-white w-[15%] border-b left-0 top-[48%] font-semibold text-white">
									2
								</p>
							</SwiperSlide>

							<SwiperSlide>
								<img
									className="w-full     duration-700   bg-opacity-80  "
									src="https://zoya.qodeinteractive.com/wp-content/uploads/2020/07/blog-list-img-105.jpg"
									alt=""
								/>

								<div
									className={` absolute  
											 animate__fadeInUp animate__animated  opacity-95
										   duration-1000  z-30 top-[38%]  text-center  left-40  w-[80%]   text-white`}>
									<div className="flex animate__zoomIn  animate__animated  duration-1000  items-center text-center justify-center   m-auto gap-5 ">
										<p className="h-px w-[4%] bg-gray-200 "></p>
										<h1 className="  tracking-[2px] font-medium  text-center font-serif text-sm ">
											TRAVEL
										</h1>
										<p className="h-px w-[4%] bg-gray-200 "></p>
									</div>
									<h1 className="  text-5xl my-4    text-center ">
										Get useful travel tips ,news & advice
									</h1>
									<h1 className="  font-medium font-serif text-sm tracking-widest  text-gray-200  text-center   ">
										JULY 2,2020 | BY LINDA FORD
									</h1>
								</div>
								<p className=" absolute text-right border-b-white w-[15%] border-b left-0 top-[48%] font-semibold text-white">
									3
								</p>
							</SwiperSlide>
						</div>
					</Swiper>
				</div>

				<LatestPostComponent />
				<Slide1Component />
				<PopularPostComponent />
				<Slide2Component />
				<ProductsComponent />
				<InstagramComponent />
				<FooterComponent />
			</div>

			{showBox && (
				<div className="fixed    align-middle  top-12  left-96 mx-auto  h-[510px] bg-[#faf9f7] w-auto duration-500  animate__fadeInUp animate__animated z-50 ">
					<img
						className=" object-cover w-full mx-auto  "
						src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/popup-img-2.jpg"
						alt=""
					/>

					<div className=" px-12 py-16 ">
						<div className="flex items-center justify-between">
							<h1 className="  tracking-wider text-2xl text-gray-800   ">
								Sign up for Zoya Newsletter
							</h1>
							<motion.svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								whileHover={{ rotate: 90, scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
								onClick={() => setShowBox(false)}
								className="w-8 active:scale-95   cursor-pointer duration-500  text-[#8f8f8f] h-8">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18 18 6M6 6l12 12"
								/>
							</motion.svg>
						</div>

						<p className="text-[#8f8f8f]  w-[80%]  text-[15px] mt-3  text-wrap  tracking-wider">
							Subscribe to our newsletter to find out about our latest posts &
							updates
						</p>

						<div className="  cursor-pointer bg-white my-7  px-6 py-5 w-full flex items-center justify-between">
							<input
								type="text"
								placeholder="Subscribe..."
								className=" focus:border-0 p-0 text-[#8f8f8f] bg-transparent focus:outline-none focus:ring-0   w-full border-0"
							/>
							<FaTelegramPlane className="text-[#8f8f8f] hover:text-white duration-500 h-5 w-5" />
						</div>

						<div className="flex items-center gap-2">
							<input
								type="checkbox"
								className="h-3 w-3  focus:ring-0 focus:outline-none  form-checkbox text-[#8f8f8f] "
							/>

							<p className="text-[#8f8f8f]  w-[80%]  text-[14px] text-wrap  tracking-wider">
								Prevent This Pop-up
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default HomePage;
