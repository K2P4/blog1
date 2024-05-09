/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailQuery } from "../service/endpoints/BlogEndpints";
import DetailPostComponent from "./DetailPost.component";

const DetailHeaderComponent = () => {
	const { id } = useParams();
	const { data } = useGetDetailQuery(id);

	return (
		<div className="flex gap-12 ">
			{/* section one */}
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
					<div className="  relative DetailParaFont  gap-3 text-justify  ">
						<span className="text-9xl align-middle flex items-center  me-5   relative top-[8px]  float-start  text-gray-900  ">
							K
						</span>
						<p className=" text-[#424242]   text-xl  mt-3 text-wrap  tracking-wide leading-[30px]">
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

					{/* content 2*/}
					<div className=" text-justify flex flex-col space-y-8 ">
						<div className="w-full items-start flex gap-10">
							<img
								className=" float-left relative top-[22px] object-cover h-[600px] w-[45%] "
								src="https://images.unsplash.com/photo-1603831905217-8c2f485a2e20?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt=""
							/>

							<div className="flex items-start mt-[15px]  text-left flex-col  space-y-6  ">
								<p className="text-[#727272]     text-md  text-wrap  tracking-wider leading-[30px]">
									Semper ultricies nisi vel augue blandit vel, luctus proin
									pulvinar del. Aenean sollicitudin, lorem auci elit del con
									sequat ipsutissem ut niuis sed odio cursus.
								</p>

								<p className="text-[#8f7267]    italic tracking-wider  text-[24px]   text-wrap  leading-[34px]">
									Venenatis faucibus. Nullam co ante. Curabitur ullam qur per
									ultri vitae nisi etiam sit amet. Orci eget eros sapien ut
									libero?
								</p>

								<p className="text-[#727272]     text-[17px]  text-wrap  tracking-wider leading-[30px]">
									Nam eget dui. Phasellus viverra nulla ut metus varius laoreet.
									Etiam rhoncus. Lorem ipsum gravida nibh vel velit auctor
									aliquet. Maecenas tempus, tellus eget condimen rhoncus, sem
									quam semper libero, sit amet sed ipsum. Curabitur ullamcorper
									ultricies nisi. Donec vitae sapien libero venenatis faucibus
									amet. Tempus dolerus ictis deli vitae sapien ut libero?
								</p>
							</div>
						</div>
						<p className=" text-[#727272]     text-lg  text-wrap  tracking-wide leading-[30px]">
							Cum socis theme sed natoque ut penatibus. Etiam ultricies nisi vel
							augue. Cura bitur tincidunt ultricies dictum felis eu pede sit.
							Etiam rhoncus. Tempus, tellus eget condimentum rhoncus, sem quam
							semper libero, amet et sem adipiscing sem neque nula ipsum. Etiam
							ultricies nisi vel augue blandit vel, luctus pulvinar
						</p>
					</div>

					<div className="w-full">
						<img
							className=" object-cover  my-10 h-24 w-[90%]   mx-auto "
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/h6-img-1-972x253.jpg"
							alt=""
						/>
					</div>

					{/* content 3*/}
					<p className=" text-[#727272]     text-justify  text-lg    tracking-wide leading-[30px]">
						Aenean sollicitudin, lorem auci elit consequat ipsutissem niuis sed
						odio sit amet vulputate cursus nibh a sit amet ullamcorper.
						Curabitur ultricies nisi. Nam eget dui. Cum socis Theme sed natoque
						penatibus. Etiam ultricies nisi vel augue. Cura bitur et ullamcorper
						ultricies dictum felis eu pede sit. Etiam rhoncus. Maecenas tempus,
						tellus condimentum rhoncus, sem quam semper libero, amet et
						adipiscing sem neque nula ipsum. Cum socis Theme sed natoque ut
						penatibus. Etiam ultricies nisi vel augue. Cura bitur tincidunt
						ultricies.
					</p>
				</div>
			</div>

			{/*seciont 2*/}
			<div className="w-[25%] relative   mx-auto ">
				<div className="flex items-center flex-col mx-auto gap-14">
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

					{/* Categories */}
					<div className=" w-full  mx-auto ">
						<h1 className="  text-center mb-4  text-2xl tracking-[2px] ">
							Categories
						</h1>

						<ul className="flex flex-col items-center align-middle space-y-4">
							<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2] text-center text-[12px] tracking-[3px] font-serif ">
								BEAUTY
							</li>
							<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2] text-center text-[12px] tracking-[3px] font-serif ">
								ENTERTAINMENT
							</li>
							<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2] text-center text-[12px] tracking-[3px] font-serif ">
								HOME DECOR
							</li>
							<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2]text-center text-[12px] tracking-[3px] font-serif ">
								INSPIRATION
							</li>
							<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2]text-center text-[12px] tracking-[3px] font-serif ">
								INTERIOR
							</li>
							<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2] text-center text-[12px] tracking-[3px] font-serif ">
								LIFESTYLE
							</li>
							<li className="   text-[#cfac9f] cursor-pointer hover:text-[#f0b6a2] text-center text-[12px] tracking-[3px] font-serif ">
								TRAVEL
							</li>
						</ul>
					</div>

					{/* Popular Post */}
					<DetailPostComponent />

					<div className="relative">
						{/* <p className="h-[65px] z-50    w-[1px] absolute  duration-500   bg-[#fde7e7] "></p> */}
						<div className="bg-[#faf7f9] w-full p-7">
							<h1 className=" text-center text-3xl   text-gray-900 font-medium tracking-wider  ">
								Subscribe to Newsletter
							</h1>

							<p className="text-center text-sm  tracking-wider text-gray-600 ">
								Receive news via email
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailHeaderComponent;
