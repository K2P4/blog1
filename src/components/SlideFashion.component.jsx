/** @format */

import React, { useState } from "react";
import Slider from "react-slick";

const SlideFashionComponent = () => {
	const [animate, setAnimate] = useState(false);

	const handleBeforeChange = () => {
		setAnimate(false); // Reset animation state
	};

	const handleAfterChange = (index) => {
		setAnimate(true); // Trigger animation
	};
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 2000,
		beforeChange: handleBeforeChange,
		afterChange: handleAfterChange,
	};

	return (
		<Slider {...settings}>
			<div className="relative  border-0   ">
				<div className="overlay absolute inset-0       bg-gray-700  animate__animated  w-full   bg-opacity-15 "></div>

				<p className=" absolute border-b text-right w-20 border-white pb-2 text-white text-md top-[45%] ">
					2
				</p>

				<div
					className={`flex item-center   flex-col w-full left-1  duration-1000  absolute    justify-center    bottom-44 mx-auto   `}>
					<h1
						className={`leading-[60px] text-stone-50  mx-auto  cursor-pointer text-5xl my-4  ${
							animate && "animate__fadeInUp   animate__animated"
						} tracking-wider     w-[90%]   text-center`}>
						Digital collection: make capitavting photographs
					</h1>

					<h1
						className={`  cursor-pointer font-medium  ${
							animate && "animate__fadeInUp  animate__animated  "
						} font-serif text-[13px] tracking-[2px]  text-gray-50  text-center   `}>
						<span className="hover:text-pink-100 duration-500">
							MARCH 16,2021
						</span>
						|{" "}
						<span className="hover:text-pink-100 duration-500">
							BY LINDA FORD
						</span>
					</h1>
				</div>
				<img
					className="mx-auto object-cover w-full h-[510px] "
					src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/03/blog-list-img-103.jpg"
					alt=""
				/>
				<p className=" right-0 absolute border-b text-left w-20 border-white pb-2 text-white text-md top-[45%] ">
					1
				</p>
			</div>
			<div className="relative  border-0   ">
				<div className="overlay absolute inset-0       bg-gray-700  animate__animated  w-full   bg-opacity-15  "></div>

				<p className=" absolute border-b text-right w-20 border-white pb-2 text-white text-md top-[45%] ">
					2
				</p>

				<div className="flex item-center   flex-col w-full left-1  duration-1000  absolute    justify-center    bottom-44 mx-auto   ">
					<h1
						className={`leading-[60px] text-stone-50  mx-auto  cursor-pointer text-5xl my-4  ${
							animate && "animate__fadeInUp   animate__animated"
						} tracking-wider     w-[90%]   text-center`}>
						Important things to know before dyeing your hair blonde
					</h1>

					<h1
						className={`  cursor-pointer font-medium  ${
							animate && "animate__fadeInUp  animate__animated  "
						} font-serif text-[13px] tracking-[2px]  text-gray-50  text-center   `}>
						<span className="hover:text-pink-100 duration-500">
							MARCH 16,2021
						</span>
						|{" "}
						<span className="hover:text-pink-100 duration-500">
							BY LINDA FORD
						</span>
					</h1>
				</div>
				<img
					className="mx-auto object-cover w-full h-[510px] "
					src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/03/blog-list-img-13.jpg"
					alt=""
				/>
				<p className=" right-0 absolute border-b text-left w-20 border-white pb-2 text-white text-md top-[45%] ">
					3
				</p>
			</div>
			<div className="relative  border-0   ">
				<div className="overlay absolute inset-0       bg-gray-700  animate__animated  w-full   bg-opacity-15  "></div>

				<p className=" absolute border-b text-right w-20 border-white pb-2 text-white text-md top-[45%] ">
					1
				</p>

				<div className="flex item-center   flex-col w-full left-1  duration-1000  absolute    justify-center    bottom-44 mx-auto   ">
					<h1
						className={`leading-[60px] text-stone-50  mx-auto  cursor-pointer text-5xl my-4  ${
							animate && "animate__fadeInUp   animate__animated"
						} tracking-wider     w-[80%]   text-center`}>
						Everyday life in Morocco - treasures of the world
					</h1>

					<h1
						className={`  cursor-pointer font-medium  ${
							animate && "animate__fadeInUp  animate__animated  "
						} font-serif text-[13px] tracking-[2px]  text-gray-50  text-center   `}>
						<span className="hover:text-pink-100 duration-500">
							MARCH 15,2021
						</span>
						|{" "}
						<span className="hover:text-pink-100 duration-500">
							BY LINDA FORD
						</span>
					</h1>
				</div>
				<img
					className="mx-auto object-cover w-full h-[510px] "
					src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/03/blog-list-img-102.jpg"
					alt=""
				/>
				<p className=" right-0 absolute border-b text-left w-20 border-white pb-2 text-white text-md top-[45%] ">
					3
				</p>
			</div>
		</Slider>
	);
};

export default SlideFashionComponent;
