/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetHomeSlideQuery } from "../service/endpoints/BlogEndpints";
import BlogLoadingComponent from "./BlogLoading.component";
import { Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper/core";

SwiperCore.use([Scrollbar]);
const SlideCarouselComponent = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const nav = useNavigate();

	const handleDetail = (id) => {
		nav(`/detail/${id}`);
	};

	const handleSlideChange = (swiper) => {
		setActiveIndex(swiper.activeIndex);
	};

	const { data, isloading } = useGetHomeSlideQuery();

	return (
		<div className="w-full m-auto">
			{isloading && <BlogLoadingComponent />}
			<Swiper
				slidesPerView={2}
				loop={true}
				spaceBetween={10}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
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
								.classList.add("animate__fadeIn", "bg-opacity-25");
							slide
								.querySelector(".slideContent")
								.classList.remove("hidden", "duration-1000");
						} else {
							slide
								.querySelector(".overlay")
								.classList.remove("animate__fadeIn", "bg-opacity-25");

							slide
								.querySelector(".slideContent")
								.classList.add("hidden", "duration-1000");
						}
					});
				}}
				modules={[Scrollbar, Autoplay]}
				className="mySwiper h-[440px] animate__slideInLeft animate__animated  duration-1000 w-full mx-auto  ">
				{data?.map((item) => (
					<SwiperSlide
						onClick={() => handleDetail(item?.id)}
						className="relative cursor-grab duration-1000  ">
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
								<h1 className=" cursor-pointer hover:text-gray-100  duration-100 tracking-[2.5px] font-medium  text-white text-center font-serif text-[12px] ">
									{item?.type}
								</h1>

								<div className=" border w-[40px]  border-stone-50"></div>
							</div>

							<h1 className="  cursor-pointer text-3xl my-4  animate__fadeInUp  animate__animated  duration-1000   text-white w-full   text-center ">
								Roadtrip with closest friends
							</h1>

							<h1 className="  cursor-pointer font-medium  animate__fadeInUp  animate__animated  duration-1000 font-serif text-[13px] tracking-[2px]  text-gray-50  text-center   ">
								<span className="hover:text-pink-100 duration-500">
									{item?.date}
								</span>
								|{" "}
								<span className="hover:text-pink-100 duration-500">
									{item?.writer}
								</span>
							</h1>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default SlideCarouselComponent;
