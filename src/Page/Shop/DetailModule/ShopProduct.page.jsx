/** @format */

import React, { useState } from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
	RelatedComponent,
} from "../../../components";
import { useGetShopProductDetailQuery } from "../../../service/endpoints/BlogEndpints";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import InstagramComponent from "../../../components/Instagram.component";

const ShopProductPage = () => {
	const { id } = useParams();
	const [quantity, setQuantity] = useState(1);

	const { data, isLoading } = useGetShopProductDetailQuery(id);
	console.log(data);

	return (
		<div>
			<NavigationHomeSectionComponent />
			<ContainerComponent>
				<div className="my-20">
					<div className="mb-20">
						{isLoading ? (
							<>Loading </>
						) : (
							<div className="flex  gap-8 items-start">
								{/* Section One */}
								<div className=" w-[55%] h-[325px] items-start flex gap-4">
									<div className=" space-y-3 ">
										<img
											src={data?.image}
											className=" object-cover w-[160px] h-[100px] "
											alt=""
										/>

										<img
											src={data?.image}
											className=" object-cover w-[160px] h-[100px] "
											alt=""
										/>

										<img
											src={data?.image}
											className=" object-cover w-[160px] h-[100px] "
											alt=""
										/>
									</div>

									<div className="w-full h-full relative">
										<img
											src={data?.image}
											className="  object-cover h-full  w-[500px] "
											alt=""
										/>

										<Button className=" absolute hover:bg-stone-50 bg-stone-50 font-serif font-normal text-[#757575] border-pink-200 border tracking-[2.2px]  top-4 right-6 text-xs py-1 px-3 text-center rounded-none">
											{data?.type}
										</Button>
									</div>
								</div>

								{/* Section Two */}
								<div className="w-[45%] ">
									<div className=" space-y-3 ">
										<h1 className="text-gray-900 text-[45px]   tracking-[1.9px]  ">
											{data?.name}
										</h1>

										<h1 className="text-[14.5px]  tracking-[2.5px] font-serif text-gray-500">
											${data?.price}
										</h1>

										<p className="w-full   leading-7 text-[16px] text-gray-500 tracking-wide ">
											{data?.description}
										</p>
									</div>

									<div className="flex items-center my-9 gap-5">
										<Button
											className="border bg-white 
									 border-pink-100 py-4 flex px-3  justify-center gap-10  hover:bg-white text-gray-500  items-center">
											<AiOutlineMinus className="text-gray-600 text-[14px] hover:text-pink-400 duration-500  cursor-pointer" />

											{quantity}
											<GoPlus className="text-gray-600 text-[15px]  font-medium hover:text-pink-400 duration-500  cursor-pointer" />
										</Button>
										<Button
											type="submit"
											className="  bg-black   hover:bg-gray-900  flex justify-center items-end gap-2 text-center transform      text-stone-50 font-serif  rounded-none     font-normal  opacity-95  text-sm py-4 px-7  tracking-[2.3px] w-auto   ">
											ADD TO CART
										</Button>
									</div>

									<div className=" space-y-1 ">
										<h1 className=" tracking-[2.1px] text-[12.6px]   font-serif text-gray-500 text-md ">
											SKU :{" "}
											<span className=" font-medium font-sans ">
												{data?.sku}
											</span>
										</h1>

										<h1 className=" tracking-[2.1px] text-[12.6px]   font-serif text-gray-500 text-md ">
											CATEGORIES :{" "}
											<span className=" font-sans  font-medium">
												{data?.category}
											</span>
										</h1>

										<h1 className=" tracking-[2.1px] text-[12.6px]   font-serif text-gray-500 text-md ">
											TAGS :{" "}
											<span className=" font-sans  font-medium">
												{data?.tag}
											</span>
										</h1>
									</div>
								</div>
							</div>
						)}
					</div>

					<div className="">
						<RelatedComponent review={data?.review} dimension={data?.dimension} weight={data?.weight} />
					</div>
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default ShopProductPage;
