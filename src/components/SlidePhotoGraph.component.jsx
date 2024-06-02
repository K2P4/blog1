/** @format */

import React from "react";
import Slider from "react-slick";

const SlidePhotoGraphComponent = () => {
	const settings = {
		
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 2000,
		
	};

	return (
		<div className="slider-container w-full  py-8">
			<Slider {...settings}>
				<div className="relative">
					<p className=" absolute border-b text-right w-20 border-white pb-2 text-white text-md top-[45%] ">
						2
					</p>
					<img
						className="mx-auto object-cover w-full "
						src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-img-76.jpg"
						alt=""
					/>
					<p className=" right-0 absolute border-b text-left w-20 border-white pb-2 text-white text-md top-[45%] ">
						1
					</p>
				</div>
				<div className="relative">
					<p className=" absolute border-b text-right w-20 border-white pb-2 text-white text-md top-[45%] ">
						2
					</p>
					<img
						className="mx-auto object-cover w-full "
						src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/01/blog-img-5.jpg"
						alt=""
					/>
					<p className=" right-0 absolute border-b text-left w-20 border-white pb-2 text-white text-md top-[45%] ">
						3
					</p>
				</div>
				<div className="relative">
					<p className=" absolute border-b text-right w-20 border-white pb-2 text-white text-md top-[45%] ">
						1
					</p>
					<img
						className="mx-auto object-cover w-full "
						src="https://zoya.qodeinteractive.com/wp-content/uploads/2020/11/blog-img-48.jpg"
						alt=""
					/>
					<p className=" right-0 absolute border-b text-left w-20 border-white pb-2 text-white text-md top-[45%] ">
						3
					</p>
				</div>
			</Slider>
		</div>
	);
};

export default SlidePhotoGraphComponent;
