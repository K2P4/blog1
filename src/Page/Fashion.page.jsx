/** @format */

import React from "react";
import FashionNavComponent from "../components/FashionNav.component";
import {
	ContainerComponent,
	FashionContentComponent,
	FooterComponent,
	SlideFashionComponent,
} from "../components";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useGetFashionItemQuery } from "../service/endpoints/BlogEndpints";
import InstagramComponent from "../components/Instagram.component";

const FashionPage = () => {
	const { data, isLoading } = useGetFashionItemQuery();

	const FashionItem = data?.map((item) => item);

	return (
		<div className="  ">
			<FashionNavComponent />

			<ContainerComponent>
				<SlideFashionComponent />

				<div className="  ">
					{/* Subcribe*/}
					<div className="relative  my-20">
						<p className="h-[65px] z-50  -top-12  left-[50%]  w-[1px] absolute  duration-500   bg-[#fde7e7] "></p>
						<div className="bg-[#fcf6f6] w-full py-7 px-6">
							<h1 className=" text-center text-3xl   text-gray-800  font-medium tracking-wider  ">
								Subscribe to Newsletter
							</h1>

							<p className="text-center text-md my-4  tracking-wider text-gray-500 ">
								Be the first to receive the latest news on upcoming posts &
								more.
							</p>

							<div className="bg-white py-3 px-6  mb-5  mx-auto w-[70%] flex items-center justify-between">
								<input
									type="text"
									placeholder="Subscribe..."
									className=" focus:border-0 p-0 text-[#8f8f8f] bg-transparent focus:outline-none focus:ring-0   w-full border-0"
								/>
								<FaTelegramPlane className="text-[#8f8f8f] hover:text-white duration-500 h-5 w-5" />
							</div>
						</div>
					</div>

					{/* Content Group One*/}
					{data && (
						<div className="flex  mb-20 items-start   w-full gap-5 ">
							<div className=" space-y-12 w-full">
								<FashionContentComponent
									img={FashionItem[0]?.image}
									wid="100%"
									wid3="50%"
									wid2="50%"
									id={FashionItem[0]?.id}
									name={FashionItem[0]?.name}
									type={FashionItem[0]?.type}
									writer={FashionItem[0]?.writer}
									date={FashionItem[0]?.date}
								/>
								<FashionContentComponent
									img={FashionItem[1]?.image}
									id={FashionItem[1]?.id}
									wid="100%"
									wid2="50%"
									wid3="50%"
									name={FashionItem[1]?.name}
									type={FashionItem[1]?.type}
									writer={FashionItem[1]?.writer}
									date={FashionItem[1]?.date}
								/>
							</div>

							{/* IMage2 */}
							<div className="w-[40%]">
								<img
									className=" mx-auto object-cover"
									src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/h2-img-4.jpg"
									alt=""
								/>
							</div>
						</div>
					)}

					{/* Advertise One*/}
					<div className=" relative pt-14 pb-20">
						<img
							className=" object-cover  "
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2020/11/blog-list-img-16.jpg"
							alt=""
						/>
						<div className=" w-full left-1 duration-1000  absolute   slideContent flex items-center flex-col justify-center   bottom-40 mx-auto  ">
							<h1 className="  cursor-pointer text-6xl mt-6 mb-4  animate__fadeInUp  animate__animated  duration-1000   text-white w-full   text-center ">
								Be classy, be fashionable
							</h1>

							<h1 className="  text-stone-100 cursor-pointer font-medium  animate__fadeInUp  animate__animated  duration-1000 font-serif text-[13px] tracking-[2px]    text-center   ">
								<span className="hover:text-pink-100 duration-500">
									NOVEMBER 14, 2020
								</span>
								|{" "}
								<span className="hover:text-pink-100 duration-500">
									{" "}
									BY KATHERINE BISHOP
								</span>
							</h1>
						</div>
					</div>

					{data && (
						<div className=" space-y-12">
							<FashionContentComponent
								img={FashionItem[2]?.image}
								wid="70%"
								wid3="50%"
								wid2="50%"
								id={FashionItem[2]?.id}
								name={FashionItem[2]?.name}
								type={FashionItem[2]?.type}
								writer={FashionItem[2]?.writer}
								date={FashionItem[2]?.date}
							/>
							<FashionContentComponent
								img={FashionItem[3]?.image}
								wid="70%"
								wid3="50%"
								wid2="50%"
								id={FashionItem[3]?.id}
								name={FashionItem[3]?.name}
								type={FashionItem[3]?.type}
								writer={FashionItem[3]?.writer}
								date={FashionItem[3]?.date}
							/>
							<FashionContentComponent
								img={FashionItem[4]?.image}
								name={FashionItem[4]?.name}
								id={FashionItem[4]?.id}
								wid="70%"
								wid3="50%"
								wid2="50%"
								type={FashionItem[4]?.type}
								writer={FashionItem[4]?.writer}
								date={FashionItem[4]?.date}
							/>
						</div>
					)}

					{/* Advertise Two*/}
					<div className="my-20">
						<img
							className=" object-cover mx-auto w-[80%] "
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/h2-img-3.jpg"
							alt=""
						/>
					</div>

					{data && (
						<FashionContentComponent
							img={FashionItem[5]?.image}
							wid="70%"
							wid3="50%"
							wid2="50%"
							id={FashionItem[2]?.id}
							name={FashionItem[5]?.name}
							type={FashionItem[5]?.type}
							writer={FashionItem[5]?.writer}
							date={FashionItem[5]?.date}
						/>
					)}

					{/* Advertise Three*/}
					<div className=" relative pt-14 pb-20">
						<img
							className=" object-cover  "
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/02/blog-list-img-19.jpg"
							alt=""
						/>
						<div className=" w-full left-1 duration-1000  absolute   slideContent flex items-center flex-col justify-center   bottom-40 mx-auto  ">
							<h1 className="  cursor-pointer text-6xl mt-6 mb-4  animate__fadeInUp  animate__animated  duration-1000   text-white w-full   text-center ">
								Perfect New Year’s Eve outfits 2022
							</h1>

							<h1 className="  text-stone-100 cursor-pointer font-medium  animate__fadeInUp  animate__animated  duration-1000 font-serif text-[13px] tracking-[2px]    text-center   ">
								<span className="hover:text-pink-100 duration-500">
									FEBRUARY 14, 2021
								</span>
								|{" "}
								<span className="hover:text-pink-100 duration-500">
									{" "}
									BY KATHERINE BISHOP
								</span>
							</h1>
						</div>
					</div>

					{data && (
						<div className="flex  mb-20 items-start  w-full gap-5 ">
							<div className=" space-y-12 w-full">
								<FashionContentComponent
									img={FashionItem[6]?.image}
									wid="100%"
									wid3="50%"
									wid2="50%"
									id={FashionItem[6]?.id}
									name={FashionItem[6]?.name}
									type={FashionItem[6]?.type}
									writer={FashionItem[6]?.writer}
									date={FashionItem[6]?.date}
								/>
								<FashionContentComponent
									img={FashionItem[7]?.image}
									id={FashionItem[7]?.id}
									wid="100%"
									wid2="50%"
									wid3="50%"
									name={FashionItem[7]?.name}
									type={FashionItem[7]?.type}
									writer={FashionItem[7]?.writer}
									date={FashionItem[7]?.date}
								/>
							</div>

							{/* IMage2 */}
							<div className="w-[40%]">
								<img
									className=" mx-auto object-cover"
									src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/h2-img-5.jpg"
									alt=""
								/>
							</div>
						</div>
					)}
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default FashionPage;
