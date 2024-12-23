/** @format */

import React, { useState } from "react";
import {
	CarouselPostComponent,
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
	ReplySessionComponent,
	Section2Component,
	UserCommentComponent,
} from "../../components";

import { FiShare } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import InstagramComponent from "../../components/Instagram.component";

const LinkPage = () => {
	const [userData, setUserData] = useState([
		{
			message: "HI I AM KP . You can find everthing what you want",
			email: "",
			name: "KP",
			website: "",
		},
	]);
	return (
		<div>
			<NavigationHomeSectionComponent />

			<ContainerComponent>
				<div className="flex gap-12 mb-20">
					{/* section one */}
					<div className="w-[70%] ">
						<div className="flex flex-col items-start space-y-4 w-full ">
							<a
								target="blank"
								href="https://qodeinteractive.com/?_gl=1%2A2vhyuz%2A_gcl_au%2AMTk4Njg2NDYxMS4xNzIyNTE5NTkz&_ga=2.31852670.176043847.1722519593-1530216171.1722519593"
								className="bg-pink-50  py-16 px-5 mt-28 w-full   mb-14">
								<p className="text-center italic leading-9 tracking-wider  text-[#8d6759] mx-auto text-2xl ">
									Absolutely perfect designs for true fashion lovers.
								</p>

								<h1 className=" text-[#a38479] cursor-pointer mt-4 hover:text-[#c09d90]  text-center text-sm tracking-[1px] font-serif ">
									March 8 , 2021
								</h1>
							</a>

							{/* content1 */}
							<div className="  relative DetailParaFont  gap-3 text-justify  ">
								<span className="text-9xl align-middle flex items-center  me-5   relative top-[8px]  float-start  text-gray-900  ">
									K
								</span>
								<p className=" text-[#424242]   text-xl  mt-3 text-wrap  tracking-wide leading-[30px]">
									accum san pericula usu an, in pri dolorum denique. Cu movet
									debitis cum. Vix paulo evertitur cu, conceptam constituam te
									his, meis euismod sed ad. Partem suscipit cu cum. Vix no
									prodesset complectitur conclud aturque, dicam perfecto eu per,
									ne vis eleifend expetenda. Idque petentium laboramus mea id,
									mei at minim labores. Tollit ullamcorper ius cu, eos malis
									clita luptatum ei, vix ullum forensibus an. Esse option
									singulis id nec, nam eruditi ornatus at. Eam soluta dicunt cu.
									Est ad oporteat appellantur, per dicta pertinax cu. Iusto
									quando conceptam vim ad, an sed explicari appellantur. Augue
									utamur lobortis vim ne.
								</p>
							</div>

							{/* content 2*/}
							<div className=" text-left flex flex-col space-y-8 ">
								<div className="w-full items-start  flex gap-10">
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
											Venenatis faucibus. Nullam co ante. Curabitur ullam qur
											per ultri vitae nisi etiam sit amet. Orci eget eros sapien
											ut libero?
										</p>

										<p className="text-[#727272]     text-[17px]  text-wrap  tracking-wider leading-[30px]">
											Nam eget dui. Phasellus viverra nulla ut metus varius
											laoreet. Etiam rhoncus. Lorem ipsum gravida nibh vel velit
											auctor aliquet. Maecenas tempus, tellus eget condimen
											rhoncus, sem quam semper libero, sit amet sed ipsum.
											Curabitur ullamcorper ultricies nisi. Donec vitae sapien
											libero venenatis faucibus amet. Tempus dolerus ictis deli
											vitae sapien ut libero?
										</p>
									</div>
								</div>
								<p className=" text-[#727272]     text-lg  text-wrap  tracking-wide leading-[30px]">
									Cum socis theme sed natoque ut penatibus. Etiam ultricies nisi
									vel augue. Cura bitur tincidunt ultricies dictum felis eu pede
									sit. Etiam rhoncus. Tempus, tellus eget condimentum rhoncus,
									sem quam semper libero, amet et sem adipiscing sem neque nula
									ipsum. Etiam ultricies nisi vel augue blandit vel, luctus
									pulvinar
								</p>
							</div>

							{/* image 1*/}
							<div className="w-full">
								<img
									className=" object-cover  my-10 h-24 w-[90%]   mx-auto "
									src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/h6-img-1-972x253.jpg"
									alt=""
								/>
							</div>

							{/* content 3*/}
							<p className=" text-[#727272]     text-left  text-lg    tracking-wide leading-[30px]">
								Aenean sollicitudin, lorem auci elit consequat ipsutissem niuis
								sed odio sit amet vulputate cursus nibh a sit amet ullamcorper.
								Curabitur ultricies nisi. Nam eget dui. Cum socis Theme sed
								natoque penatibus. Etiam ultricies nisi vel augue. Cura bitur et
								ullamcorper ultricies dictum felis eu pede sit. Etiam rhoncus.
								Maecenas tempus, tellus condimentum rhoncus, sem quam semper
								libero, amet et adipiscing sem neque nula ipsum. Cum socis Theme
								sed natoque ut penatibus. Etiam ultricies nisi vel augue. Cura
								bitur tincidunt ultricies.
							</p>

							{/*image group1*/}
							<div className="flex   mx-auto  space-x-20  space-y-36 ">
								<div className=" mt-16">
									<img
										className=" object-cover h-[400px]  w-[270px]"
										src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-content-img-3.jpg"
										alt=""
									/>

									<div className="flex items-center justify-between my-2">
										<p className="  text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[3px] font-serif ">
											WOMEN'S SUNGLASSES
										</p>

										<p className="  text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[3px] font-serif ">
											BY JOE
										</p>
									</div>
								</div>

								<div className="  mt-10">
									<img
										className=" object-cover h-[400px]  w-[270px]"
										src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-content-img-5.jpg"
										alt=""
									/>

									<div className="flex items-center justify-between my-2">
										<p className="  text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[3px] font-serif ">
											WOMEN'S CLUTCH
										</p>

										<p className="  text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6] text-center text-[12px] tracking-[3px] font-serif ">
											BY JOE
										</p>
									</div>
								</div>
							</div>

							{/*image group2*/}
							<div className="flex   mx-auto  space-x-20 space-y-10   ">
								<div className="  mb-16 ">
									<img
										className=" object-cover h-[280px]  w-[200px]"
										src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-content-img-12.jpg"
										alt=""
									/>

									<p className=" my-2 text-left text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6]  text-[12px] tracking-[3px] font-serif ">
										BEAUTY & MAKEUP
									</p>
								</div>

								<div className="  ">
									<img
										className=" object-cover h-[280px]  w-[200px]"
										src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-content-img-15.jpg"
										alt=""
									/>

									<p className=" my-2 text-left text-[#cfac9f] cursor-pointer hover:text-[#e2b6a6]  text-[12px] tracking-[3px] font-serif ">
										INSPIRATION & STYLE
									</p>
								</div>
							</div>

							{/* content4*/}
							<div className="  relative DetailParaFont  gap-3   ">
								<span className="text-9xl align-middle flex items-center  me-5   relative top-[8px]  float-start  text-gray-900  ">
									R
								</span>
								<p className=" text-[#424242]   text-xl  mt-3 text-wrap  tracking-wide leading-[30px]">
									ollit ullamcorper ius cu, eos malis clita luptatum ei, vix
									ullum forensibus an. Esse option singulis id nec, nam eruditi
									ornatus at. Eam soluta dicunt cu. Est ad oporteat appellantur,
									per dicta pertinax cu. Iusto quando conceptam vim ad, an sed
									explicari appellantur. Accumsan pericula usu an, in pri
									dolorum denique. Cu movet debitis cum. Vix paulo evertitur cu,
									conceptam constituam te his, meis euismod sed ad. Partem
									suscipit cu cum. Vix no prodesset complectitur concludaturque,
									dicam perfecto eu per, ne vis eleifend expetenda. Idque
									petentium laboramus mea id, mei at minim labores. Quaestio
									omittantur id usu. Pri ei facilis definitionem. Meis
									moderatius consectetuer nam an, populo praesent mea in,
									euismod dissentiet definitionem.
								</p>
							</div>

							{/* image 2*/}
							<div className="w-full ">
								<img
									className=" object-cover   mx-auto "
									src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-content-img-7.jpg"
									alt=""
								/>
							</div>

							{/* content4*/}
							<div className=" space-y-4 ">
								<p className="text-[#727272]     text-left  text-lg    tracking-wide leading-[30px]">
									Accumsan pericula usu an, in pri dolorum denique. Cu movet
									debitis cum. Vix paulo evertitur cu, conceptam constituam te
									his, meis euismod sed ad. Partem suscipit cu cum. Vix no
									prodesset complectitur concludaturque, dicam perfecto eu per,
									ne vis eleifend expetenda. Pa sea dicta dicant equidem, est cu
									errem libris. Eu eos inani urbanitas, pertinax sadipscing per.
								</p>

								<p className="text-[#727272]     text-left  text-lg    tracking-wide leading-[30px]">
									Eam soluta dicunt cu. Est ad oporteat appellantur, per dicta
									pertinax cu. Iusto quando conceptam vim ad, an sed explicari
									appellantur. Accumsan pericula usu an, in pri dolorum denique.
									Cu movet debitis cum. Vix paulo evertitur cu, conceptam
									constituam te his, meis euismod sed ad. Partem suscipit cu
									cum. Vix no prodesset complectitur concludaturque, dicam
									perfecto eu per, ne vis eleifend expetenda. Idque petentium
									laboramus mea id, mei at minim labores. Quaestio omittantur id
									usu. Pri ei facilis definitionem. Meis moderatius consectetuer
									nam an, populo praesent mea in, euismod dissentiet
									definitionem quo ne.
								</p>
							</div>

							{/* image 3*/}
							<div className="w-full  flex items-center flex-wrap gap-auto ">
								<img
									className=" object-cover  h-[400px] my-8 w-[32%]  mx-auto "
									src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-content-img-8.jpg"
									alt=""
								/>

								<img
									className=" object-cover  h-[400px] my-8 w-[32%]  mx-auto "
									src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-content-img-9.jpg"
									alt=""
								/>

								<img
									className=" object-cover  h-[400px] my-8 w-[32%]  mx-auto "
									src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/blog-content-img-10.jpg"
									alt=""
								/>
							</div>

							{/* content5*/}
							<div className=" space-y-7 ">
								<ul className="list-disc  list-inside space-y-4">
									<li className="text-[#727272]     text-left  text-lg    tracking-wide leading-[30px]">
										Maecenas tempus, tellus eget condimentum rhoncus, sem quam
										semper
									</li>
									<li className="text-[#727272]     text-left  text-lg    tracking-wide leading-[30px]">
										Donec sodales magna. Sed consequat, bibendum sodales, augue
										velit
									</li>
									<li className="text-[#727272]     text-left  text-lg    tracking-wide leading-[30px]">
										Cum sociis theme natoque penatibus et magnis dis parturient
										montes
									</li>
								</ul>

								<p className="text-[#727272]     text-left  text-lg    tracking-wide leading-[30px]">
									Maecenas tempus, tellus eget condimentum rhoncus, sem quam
									semper libero, amet et adipiscing sem neque nula ipsum. Etiam
									ultricies nisi vel augue. Lorem ipsum dolor sit amet,
									consectetu adipiscing elit. Aenean commodo ligula eget dolor.
									Cum socis Theme sed natoque ut penatibus. Etiam ultricies nisi
									vel augue. Cura bitur tincidunt ultricies dictum felis eu pede
									sit. Etiam rhoncus. Sem quam semper libero, amet et adipiscing
									sem neque nula ipsum. Etiam ultricies nisi vel augue blandit
									vel, luctus pulvinar.
								</p>
							</div>

							{/* Share*/}
							<div className="flex items-center w-full  border-b border-b-gray-200 py-9  justify-between ">
								<Button
									className="  w-auto  cursor-pointer  hover:bg-[#E1ACAC] hover:text-gray-50  duration-300 font-light text-xs  py-1    px-5 border-[#cfac9f]  rounded-none font-serif text-[#ababab] tracking-[2px] "
									variant="outline">
									MAGAZINE
								</Button>

								<div className="group ">
									<div className="flex animate__animated  animate__fadeIn  group-hover:hidden duration-1000 cursor-pointer items-center align-middle space-x-2">
										<FiShare className=" h-5  text-gray-800 w-5 " />
										<p className="  font-serif text-gray-800 tracking-[3px] text-xs ">
											SHARE
										</p>
									</div>

									<div className="hidden  animate__fadeInRight animate__animated duration-1000 group-hover:flex  w-full items-center justify-center gap-2">
										<FaFacebookF className=" text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
										<FaTwitter className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
										<FaPinterestP className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
										<FaInstagram className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />

										<FaLinkedinIn className="text-gray-800 h-3.5 w-3.5  hover:text-gray-600 duration-500 " />
									</div>
								</div>
							</div>

							{/* Carousel Post*/}
							<CarouselPostComponent gallery={true} />

							{/* Profile */}
							<UserCommentComponent
								setUserData={setUserData}
								userData={userData}
							/>

							<ReplySessionComponent
								setUserData={setUserData}
								userData={userData}
							/>
						</div>
					</div>
					<Section2Component />
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default LinkPage;
