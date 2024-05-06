/** @format */

import React from "react";
import { Input } from "@/components/ui/input";
import { FaTelegramPlane } from "react-icons/fa";


const FooterComponent = () => {
	return (
		<div className="bg-[#1b1b1b]">
			<div className="  py-[90px]  flex items-start justify-center  gap-auto ">
				<div className="flex  flex-col gap-7  w-[25%] ">
					<h1 className="text-[#fff] text-xl tracking-wide text-center ">
						Social
					</h1>
					<ul className="flex flex-col   items-start cursor-pointer  mx-auto  text-center  gap-3">
						<li className="  text-[#8f8f8f]  hover:text-white   duration-500  text-[12px] font-serif  tracking-[3px] ">
							FACEBOOK
						</li>
						<li className="  text-[#8f8f8f] hover:text-white  duration-500  text-[12px] font-serif  tracking-[3px] ">
							PINTEREST
						</li>
						<li className="   text-[#8f8f8f] hover:text-white  duration-500  ms-1.5  text-center text-[12px] font-serif  tracking-[2px] ">
							YOUTUBE
						</li>
						<li className="  text-[#8f8f8f] hover:text-white  duration-500 text-center text-[12px] font-serif  tracking-[2px] ">
							INSTAGRAM
						</li>
						<li className="text-[#8f8f8f]  ms-1.5 hover:text-white  duration-500 text-center m-auto text-[12px] font-serif  tracking-[2px] ">
							TWITTER
						</li>
					</ul>
				</div>
				<div className=" flex  flex-col items-center gap-7 w-[40%]   ">
					<img
						width={"155"}
						height={"42"}
						className=" object-cover m-auto  "
						src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/footer-logo-img-01-300x81.png"
						alt=""
					/>

					<p className="text-[#8f8f8f] text-center w-[70%]   text-md tracking-[1px]">
						The perfect place for telling & sharing all the stories that truly
						matter.
					</p>

					<div className="bg-[#FFFFFF12] px-7 py-4 w-[70%] flex items-center justify-between">
						<input
							type="text"
							placeholder="Subscribe..."
							className=" focus:border-0 p-0 text-white bg-transparent focus:outline-none focus:ring-0   w-full border-0"
						/>
						<FaTelegramPlane className="text-[#8f8f8f] hover:text-white duration-500 h-5 w-5" />
					</div>
				</div>

				<div className="flex items-center justify-center flex-col gap-7  w-[25%] ">
					<h1 className="text-[#fff] text-xl tracking-wide text-center ">
						Posts
					</h1>
					<ul className="flex flex-col text-center  justify-center items-start cursor-pointer  mx-auto  gap-3">
						<li className="  text-[#8f8f8f]  hover:text-white   duration-500  text-[12px] font-serif   m-auto text-center tracking-[2px] ">
							BEAUTY
						</li>

						<li className="  text-[#8f8f8f]  hover:text-white   duration-500  text-[12px] font-serif   m-auto text-center tracking-[2px]  ">
							ENTERTAINMENT
						</li>

						<li className="  text-[#8f8f8f]  hover:text-white   duration-500  text-[12px] font-serif   m-auto text-center tracking-[2px]  ">
							HOME DECOR
						</li>
						<li className="  text-[#8f8f8f]  hover:text-white   duration-500  text-[12px] font-serif   m-auto text-center tracking-[2px]  ">
							LIFESTYLE
						</li>
						<li className="  text-[#8f8f8f]  hover:text-white   duration-500  text-[12px] font-serif   m-auto text-center tracking-[2px]  ">
							TRAVEL
						</li>
					</ul>
				</div>
			</div>

			<div className=" border-t-stone-600  border-t  w-full ">
				<h1 className="text-[#8f8f8f] mx-auto text-center  tracking-wide text-sm py-4">
					© 2021 Qode Interactive, All Rights Reserved
				</h1>
			</div>
		</div>
	);
};

export default FooterComponent;
