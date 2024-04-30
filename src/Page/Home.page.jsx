/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetBlogQuery } from "../service/endpoints/BlogEndpints";
import { Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";

const HomePage = () => {
	const { data, isLoading } = useGetBlogQuery();

	const [animation, setAnimation] = useState(false);

	const changeAnimation = () => {
		setAnimation(true);
	};

	const NoAnimation = () => {
		setAnimation(false);
	};

	return (
		<div className="w-full">
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
				<div className=" relative  duration-1000">
					{isLoading ? (
						<h1>Loading</h1>
					) : (
						<>
							{data?.map((item) => (
								<SwiperSlide key={item?.id}>
									<img
										className="w-full     duration-700   bg-opacity-80  "
										src={item?.image}
										alt=""
									/>

									<div
										className={` absolute  
											 animate__fadeInUp animate__animated  opacity-95
										   duration-1000  z-30 top-[38%]  text-center  left-40  w-[80%]   text-white`}>
										<div className="flex animate__zoomIn  animate__animated  duration-1000  items-center text-center justify-center   m-auto gap-5 ">
											<p className="h-px w-[4%] bg-gray-200 "></p>
											<h1 className="  tracking-[2px] font-medium  text-center font-serif text-sm ">
												{item?.type}
											</h1>
											<p className="h-px w-[4%] bg-gray-200 "></p>
										</div>
										<h1 className="  text-5xl my-4    text-center ">
											{item?.name}
										</h1>
										<h1 className="  font-medium font-serif text-sm tracking-widest text-gray-300   text-center   ">
											{item?.date} | {item?.writer}
										</h1>
									</div>
									<p className=" absolute text-right border-b-white w-[15%] border-b left-0 top-[48%] font-semibold text-white">
										{item?.number}
									</p>
								</SwiperSlide>
							))}
						</>
					)}
				</div>
			</Swiper>
		</div>
	);
};

export default HomePage;
