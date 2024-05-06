/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailQuery } from "../service/endpoints/BlogEndpints";

const DetailHeaderComponent = () => {
	const { id } = useParams();
	const { data } = useGetDetailQuery(id);

	console.log(data);

	return (
		<div className="flex gap-12 ">
			<div className="w-[70%] ">
				<div className="flex flex-col items-start space-y-4 ">
					<div className="flex  h-0  mt-28  cursor-pointer  duration-1000 group   select-none items-center text-center justify-center  mx-auto gap-5 ">
						<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
						<h1 className="  tracking-[2px]   group-hover:text-pink-300 text-[#FFD0D0] text-center font-serif text-xs ">
							{data?.type}
						</h1>
						<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
					</div>
					<h1 className=" h-auto   text-5xl  leading-snug text-wrap  tracking-[2px] text-gray-950 text-center ">
						{data?.name}
					</h1>

					{/* header */}
					<h1 className=" m-auto   cursor-pointer font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
						<span className="hover:text-[#d8b8b8] duration-500">
							{data?.date}{" "}
						</span>{" "}
						|{" "}
						<span className="hover:text-[#d8b8b8] duration-500">
							{data?.writer}
						</span>
					</h1>

					{/* image */}
					<div className=" ">
						<img
							className="  object-cover   mt-7 w-full "
							src={data?.image}
							alt=""
						/>
					</div>

					{/* content1 */}
					<div className="flex items-start ">
						<span className="text-8xl   text-gray-900  ">K</span>
						<p>
							accum san pericula usu an, in pri dolorum denique. Cu movet
							debitis cum. Vix paulo evertitur cu, conceptam constituam te his,
							meis euismod sed ad. Partem suscipit cu cum. Vix no prodesset
							complectitur conclud aturque, dicam perfecto eu per, ne vis
							eleifend expetenda. Idque petentium laboramus mea id, mei at minim
							labores. Tollit ullamcorper ius cu, eos malis clita luptatum ei,
							vix ullum forensibus an. Esse option singulis id nec, nam eruditi
							ornatus at. Eam soluta dicunt cu. Est ad oporteat appellantur, per
							dicta pertinax cu. Iusto quando conceptam vim ad, an sed explicari
							appellantur. Augue utamur lobortis vim ne.
						</p>
					</div>
				</div>
			</div>

			<div className="w-[25%] relative  flex flex-col items-center mx-auto ">
				<p className="h-[65px] z-50  top-20  w-[1px] absolute  duration-500   bg-[#fde7e7] "></p>
				<div className="bg-[#faf7f9] w-full  mt-32  p-7">
					<img
						className="   w-40 h-40  object-cover mx-auto "
						src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/user-img-1.png"
						alt=""
					/>

					<h1 className=" my-2 text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[3px] font-serif ">
						BLOGGER
					</h1>
					<p className="text-gray-500 leading-7  w-[95%] mx-auto text-md tracking-[1px] text-center">
						Welcome to my blog where I share my lifestyle tips, healthy snack
						ideas...
					</p>
				</div>

				<div className=" w-full  mx-auto ">
					<h1 className="  text-center mb-4  text-2xl tracking-[2px] ">
						Categories
					</h1>

					<ul className="flex flex-col items-center align-middle space-y-4">
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[3px] font-serif ">
							BEAUTY
						</li>
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[3px] font-serif ">
							ENTERTAINMENT
						</li>
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[3px] font-serif ">
							HOME DECOR
						</li>
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[3px] font-serif ">
							INSPIRATION
						</li>
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[3px] font-serif ">
							INTERIOR
						</li>
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[3px] font-serif ">
							LIFESTYLE
						</li>
						<li className="   text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[3px] font-serif ">
							TRAVEL
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DetailHeaderComponent;
