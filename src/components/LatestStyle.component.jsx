/** @format */
import React from "react";
import { useNavigate } from "react-router-dom";
import ContainerComponent from "./Container.component";
import { motion } from "framer-motion";
import BlogLoadingComponent from "./BlogLoading.component";
import { useGetLatestStyleQuery } from "../service/endpoints/BlogEndpints";
import LatestStyle2Component from "./LatestStyle2.component";
import LatestStyle3Component from "./LatestStyle3.component";

const LatestStyleComponent = () => {
	const { data, isLoading } = useGetLatestStyleQuery();
	const nav = useNavigate();

	const handleDetail = (id) => {
		nav(`/detail/${id}`);
	};

	return (
		<div className=" ">
			{isLoading ? (
				<div className=" flex  justify-center  flex-wrap items-center ">
					<BlogLoadingComponent />
				</div>
			) : (
				<ContainerComponent>
					<div className="space-y-4">
						<div className="flex  h-0  mt-28    duration-1000 group   select-none items-center text-center justify-center cursor-pointer  mx-auto gap-4 ">
							<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
							<h1 className="  tracking-[2px]   group-hover:text-[#f5bebe] text-[#ecc1c1] text-center font-serif text-xs ">
								FASHION
							</h1>
							<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
						</div>
						<h1 className=" text-center text-[41px]  text-gray-900 font-normal tracking-wide  ">
							Latest Posts
						</h1>
					</div>
					<div className="flex items-center gap-12 justify-center flex-wrap  mt-12">
						{data?.map((item) => (
							<div
								key={item?.id}
								onClick={() => handleDetail(item?.id)}
								className="  cursor-pointer w-[20%]   h-auto">
								<div className="relative  overflow-hidden">
									<motion.img
										src={item?.image}
										alt="Your image"
										className="w-full h-full"
										initial={{ scale: 1.05 }}
										whileHover={{ scale: 1.06, y: -5 }}
										transition={{ duration: 0.5 }}
									/>
								</div>

								<div className="cursor-pointer flex flex-col items-start gap-3 py-5">
									<p className=" text-lg  w-full text-left text-wrap  tracking-[1.5px] text-gray-950  ">
										{item?.name}
									</p>

									<h1 className="   font-serif text-xs tracking-[3px] text-gray-500 text-left     ">
										{item?.date}
									</h1>
								</div>
							</div>
						))}
					</div>
				</ContainerComponent>
			)}

			<div className=" relative py-20">
				<img
					className=" object-cover  "
					src="https://zoya.qodeinteractive.com/wp-content/uploads/2020/07/blog-list-img-104.jpg"
					alt=""
				/>
				<div className=" w-full left-1 duration-1000  absolute   slideContent flex items-center flex-col justify-center   bottom-32 mx-auto  ">
					<div className="flex  h-0  mt-28    duration-1000 group   select-none items-center text-center justify-center cursor-pointer  mx-auto gap-4 ">
						<p className="h-px w-[40px]  duration-500 group-hover:bg-stone-50  bg-stone-100 "></p>
						<h1 className="  tracking-[2px]   group-hover:text-[#e0e0e0] text-stone-100 text-center font-serif text-xs ">
							BEAUTY
						</h1>
						<p className="h-px w-[40px]  duration-500 group-hover:bg-stone-50  bg-stone-100 "></p>
					</div>
					<h1 className="  cursor-pointer text-5xl mt-6 mb-4  animate__fadeInUp  animate__animated  duration-1000   text-white w-full   text-center ">
						We can’t get enough of these new trends
					</h1>

					<h1 className="  text-stone-200 cursor-pointer font-medium  animate__fadeInUp  animate__animated  duration-1000 font-serif text-[13px] tracking-[2px]    text-center   ">
						<span className="hover:text-pink-100 duration-500">
							NOVEMBER 1, 2020
						</span>
						|{" "}
						<span className="hover:text-pink-100 duration-500">
							{" "}
							BY LINDA FORD
						</span>
					</h1>
				</div>
			</div>

			<LatestStyle2Component />
			<LatestStyle3Component />
			
		</div>
	);
};

export default LatestStyleComponent;
