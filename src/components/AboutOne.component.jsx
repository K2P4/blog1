/** @format */

import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import AssistantComponent from "./Assistant.component";

const AboutOneComponent = () => {
	return (
		<div className="w-[70%]  ">
			<div className=" space-y-4  border-b border-b-pink-100 pb-12">
				<h1 className="text-[#dfb8aa] font-medium cursor-pointer hover:text-[#f1b6a2]  text-[12.5px] tracking-[2.5px] font-serif ">
					LIFESTYLE BLOGGER
				</h1>

				<h1 className="text-5xl tracking-wide text-gray-900 ">
					Hi, I am Carolyn!
				</h1>

				<p className="text-[#696969]   text-[16.7px]  text-wrap  tracking-wide leading-[30px]">
					Ex azum san pericula usu an, in pri dolorum denique. Cu movet debitis
					cum. Vix paulo evertitur cu, conceptam constituam te his, meis euismod
					sed ad. Partem suscipit cu cum. Vix no prodesset complectitur conclud
					aturque, dicam perfecto eu per, ne vis eleifend expetenda. Idque
					petentium laboramus mea id, mei at.
				</p>

				<div className="px-3  py-5">
					<p className="text-[#8f7267]   italic  text-[23px]  text-center mx-auto text-wrap  tracking-wide leading-[35px]">
						Venenatis faucibus. Nullam quis ante. Curabitur ullamcorper
						ultricies vitae nisi etiam sit amet. Orci eget eros sapien ut
						libero?
					</p>
				</div>

				<p className="text-[#696969]   text-[16.7px]  text-wrap  tracking-wide leading-[30px]">
					Ex mea oratio evertitur, mediocrem principes no has. Quodsi copiosae
					vel eu. Te rebum diceret gloriatur sea, dolorum fabellas vulputate has
					ex, mea similique posidonium persequeris at. Et dicat referrentur usu.
					Te cum saperet inimicus. Vix paulo evertitur cu, conceptam constituam
					te his, meis euismod sed ad. Partem suscipit cu cum. Vix no prodesset
					complectitur conclud aturque, dicam perfecto eu per, ne vis eleifend
					expetenda. Idque petentium laboramus mea id, mei at minim labores
					tollit enim singulis instructior his dicant fabulas.
				</p>
			</div>

			<div className="flex items-center   mt-10  mb-20 ">
				<p className="text-[#696969] tracking-wider w-[50%] text-[14px]">
					Follow us on Social Networks
				</p>
				<div className="  duration-1000  w-full flex items-center gap-5">
					<FaFacebookF className=" text-gray-800 h-3.5 w-3.5 cursor-pointer  hover:text-gray-600 duration-500 " />
					<FaTwitter className="text-gray-800 h-3.5 w-3.5 cursor-pointer  hover:text-gray-600 duration-500 " />
					<FaPinterestP className="text-gray-800 h-3.5 w-3.5 cursor-pointer  hover:text-gray-600 duration-500 " />
					<FaInstagram className="text-gray-800 h-3.5 w-3.5 cursor-pointer  hover:text-gray-600 duration-500 " />

					<FaLinkedinIn className="text-gray-800 h-3.5 w-3.5 cursor-pointer  hover:text-gray-600 duration-500 " />
				</div>
			</div>


			<AssistantComponent/>

			

		</div>
	);
};

export default AboutOneComponent;
