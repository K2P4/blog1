/** @format */

import React, { useContext, useEffect, useRef, useState } from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
	ProductLoadingComponent,
	RelatedComponent,
	StarComponent,
} from "../../../components";
import { useGetShopProductDetailQuery } from "../../../service/endpoints/BlogEndpints";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import InstagramComponent from "../../../components/Instagram.component";
import { ShopContext } from "../../../Contexts/ShopProductContext";

const ShopProductPage = () => {
	const { id } = useParams();
	const [quantity, setQuantity] = useState(1);
	const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");
	const [checkOpacity, setOpacity] = useState(true);
	const menuRef = useRef();
	const { addCart, cart, submitBlock, setBlock } = useContext(ShopContext);
	const customOrigin = {
		transformOrigin: `${menuRef?.current?.offsetLeft}px + ${menuRef?.current?.offsetTop}px`,
	};

	const { data, isLoading } = useGetShopProductDetailQuery(id);

	const handleQuantity = (MinusSum) => {
		setQuantity(quantity + MinusSum);
	};

	const handleMouseMove = (e) => {
		const { left, top, width, height } =
			e.currentTarget.getBoundingClientRect();
		const x = ((e.pageX - left) / width) * 100;
		const y = ((e.pageY - top) / height) * 50;

		setBackgroundPosition(`${x}% ${y}%`);
		setOpacity(true);
	};

	const handleMouseLeave = () => {
		setBackgroundPosition("0% 0%");
		setOpacity(false);
	};

	useEffect(() => {
		const filterBlock = cart?.filter((item) => item.id != id);

		if (filterBlock) {
			setBlock(false);
		} else {
			setBlock(true);
		}
	}, [id]);

	const handleCart = () => {
		const newCart = {
			id: data?.id,
			name: data?.name,
			image: data?.image,
			quantity: quantity,
			updatePrice: 0,
			price: data?.price,
		};
		addCart(newCart);
		setBlock(!submitBlock);
	};

	return (
		<div>
			<NavigationHomeSectionComponent />
			<ContainerComponent>
				<div className="my-20">
					<div className="mb-20">
						{isLoading ? (
							<ProductLoadingComponent  widthOne={"50"} />
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

									<div
										style={{
											backgroundImage: `url(${data?.image})`, // Replace with your detailed image
											backgroundPosition: backgroundPosition,
											objectFit: "cover",
											backgroundSize: "200%", // This controls the zoom level (200% for 2x zoom)
										}}
										onMouseLeave={handleMouseLeave}
										onMouseMove={handleMouseMove}
										className="w-full h-full  relative bg-cover bg-no-repeat  group overflow-hidden cursor-crosshair ">
										<img
											style={customOrigin}
											src={data?.image}
											className={` ${
												checkOpacity ? "opacity-0" : "opacity-100"
											}  duration-500 ease-in-out      transition-transform   object-cover h-full  w-full `}
											alt=""
										/>
										{data?.type ? (
											<Button className=" absolute hover:bg-stone-50 bg-stone-50 font-serif font-normal text-[#757575] border-pink-200 border tracking-[2.2px]  top-4 right-6 text-xs py-1 px-3 text-center rounded-none">
												{data?.type}
											</Button>
										) : (
											""
										)}
									</div>
								</div>

								{/* Section Two */}
								<div className="w-[45%] ">
									<div className=" space-y-3 ">
										<h1 className="text-gray-900 text-[45px]   tracking-[1.9px]  ">
											{data?.name}
										</h1>

										{data?.review && (
											<div className="flex gap-4 items-center">
												<StarComponent
													key={data?.id}
													rating={data?.ratingtotal}
												/>
												<p className="text-gray-500  text-sm tracking-wide ">
													({data?.review.length} Customer Review)
												</p>
											</div>
										)}

										<h1 className="text-[14.5px] flex items-center gap-3 tracking-[2.5px] font-serif text-gray-500">
											${data?.price}{" "}
											{data?.disPrice && (
												<span className="text-gray-600">
													(${data?.disPrice})
												</span>
											)}
										</h1>

										<p className="w-full   leading-7 text-[16px] text-gray-500 tracking-wide ">
											{data?.description}
										</p>
									</div>

									<div className="flex items-center my-9 gap-5">
										<Button
											className="border bg-white 
									 border-pink-100  w-36  px-3 py-4 rounded-none flex  justify-center gap-10  hover:bg-white text-gray-500  items-center">
											<AiOutlineMinus
												onClick={() => quantity > 1 && handleQuantity(-1)}
												className="text-gray-600 text-[14px] mx-auto text-center hover:text-pink-400 duration-500  cursor-pointer"
											/>

											<span className="w-2">{quantity}</span>
											<GoPlus
												onClick={() => quantity >= 0 && handleQuantity(+1)}
												className="text-gray-600 text-[15px] text-center mx-auto font-medium hover:text-pink-400 duration-500  cursor-pointer"
											/>
										</Button>
										<Button
											onClick={handleCart}
											disabled={submitBlock}
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
						<RelatedComponent
							product={data?.name}
							review={data?.review}
							dimension={data?.dimension}
							weight={data?.weighrt}
						/>
					</div>
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default ShopProductPage;
