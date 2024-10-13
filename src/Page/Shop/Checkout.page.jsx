/** @format */

import React, { useContext, useState } from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigateRouteComponent,
	NavigationHomeSectionComponent,
} from "../../components";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShopContext } from "../../Contexts/ShopProductContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
	const [selectedOption, setSelectedOption] = useState("United States (US)");
	const { cart, update, setUpdate } = useContext(ShopContext);
	const nav = useNavigate();

	const totalAmount = cart?.reduce((total, item) => {
		return Math.ceil(total) + Math.ceil(item?.price);
	}, 0);

	const updateAmount = cart?.reduce((total, item) => {
		return Math.ceil(total) + Math.ceil(item?.updatePrice);
	}, 0);

	return (
		<div>
			<NavigationHomeSectionComponent />
			<NavigateRouteComponent Route1={"CHECKOUT"} path={"/shop-checkout"} />

			<ContainerComponent>
				<div className="my-20">
					<div className="w-full  space-y-7  ">
						{/* Billing Details */}
						{cart?.length > 0 && (
							<div className="">
								<h1 className="text-gray-900 text-4xl tracking-[2px]  ">
									Billing details
								</h1>

								<div className=" space-y-5 ">
									<div className="space-y-2 ">
										<Label
											className="text-gray-500 tracking-wide text-md"
											htmlFor="terms">
											First name *{" "}
										</Label>
										<Input
											className=" bg-gray-50 rounded-none   py-5 tracking-wide placeholder:text-[15px] text-gray-600 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500 "
											placeholder=""
										/>
									</div>
									<div className="space-y-2 ">
										<Label
											className="text-gray-500 tracking-wide text-md"
											htmlFor="terms">
											Last name *
										</Label>
										<Input
											className=" bg-gray-50 rounded-none   py-5 tracking-wide placeholder:text-[15px] text-gray-600 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
											placeholder=""
										/>
									</div>

									<div className="space-y-2 ">
										<Label
											className="text-gray-500 tracking-wide text-md"
											htmlFor="terms">
											Company name (optional)
										</Label>
										<Input
											className=" bg-gray-50 rounded-none   py-5 tracking-wide placeholder:text-[15px] text-gray-600 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
											placeholder=""
										/>
									</div>

									<div className="space-y-2 flex flex-col ">
										<Label
											className="text-gray-500 tracking-wide text-md"
											htmlFor="terms">
											Country / Region *
										</Label>
										<Select className="border-0 ">
											<SelectTrigger className="w-[50%] text-[15px] text-gray-600  tracking-wide  text-xs focus:ring-0 rounded-sm  h-14 ">
												<SelectValue
													className=""
													placeholder="United States (US)"
												/>
											</SelectTrigger>
											<SelectContent>
												<SelectGroup className="space-y-2">
													<SelectLabel>Country / Region</SelectLabel>
													<SelectItem value="myanmar">Myanmar (MM)</SelectItem>
													<SelectItem value="thialand">
														Thailand (TH)
													</SelectItem>
													<SelectItem value="cambodia">
														Cambodia (CH)
													</SelectItem>
													<SelectItem value="indonesia">
														Indonesia (ID)
													</SelectItem>
													<SelectItem value="philipines">
														Philipines (PH)
													</SelectItem>
													<SelectItem value="russia">Russia (RA)</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>

									<div className="space-y-2 ">
										<Label
											className="text-gray-500 tracking-wide text-md"
											htmlFor="terms">
											Street address *
										</Label>
										<Input
											className=" bg-gray-50 rounded-none   py-5  placeholder:text-[14px] tracking-wide text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
											placeholder="House number and street name"
										/>
									</div>

									<div className="space-y-2 ">
										<Label
											className="text-gray-500 tracking-wide text-md"
											htmlFor="terms">
											Phone *
										</Label>
										<Input
											type="phone"
											className=" bg-gray-50 rounded-none   py-5  placeholder:text-[14px] tracking-wide text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
											placeholder="094500..."
										/>
									</div>

									<div className="space-y-2 ">
										<Label
											className="text-gray-500 tracking-wide text-md"
											htmlFor="terms">
											Email address *
										</Label>
										<Input
											type="email"
											className=" bg-gray-50 rounded-none   py-5  placeholder:text-[14px] tracking-wide text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
											placeholder="zoya@email.com"
										/>
									</div>
								</div>
							</div>
						)}

						{/* Your Order */}
						<div className="   ">
							{cart?.length > 0 ? (
								<div className="mt-5">
									<h1 className="text-gray-900 text-4xl tracking-[2px]  ">
										Your order
									</h1>

									<div className=" my-5 space-y-5">
										<div className="flex border-b border-b-pink-100 pb-3 text-center font-normal text-gray-900 font-serif  text-[13px] tracking-[2.7px] items-center    justify-between ">
											<p>PRODUCT</p>
											<p className=" w-[40%] text-left">SUBTOTAL</p>
										</div>

										{cart?.map((item) => (
											<div className="flex border-b border-b-pink-100 pb-3 text-center font-normal text-gray-900 font-serif   text-xs tracking-[3px] items-center    justify-between ">
												<p className="text-gray-500 ">
													{item?.name} x {item?.quantity}
												</p>
												<p className="  w-[40%] text-gray-500 text-left">
													${item?.price * item?.quantity}
												</p>
											</div>
										))}

										<div className="flex border-b border-b-pink-100 pb-3 text-center font-normal text-gray-900 font-serif   text-xs tracking-[3px] items-center    justify-between ">
											<p>SUBTOTAL</p>
											<p className="  w-[40%] text-gray-500 text-left">
												${update ? updateAmount : totalAmount}
											</p>
										</div>

										<div className="flex border-b border-b-pink-100 pb-3 text-center font-normal text-gray-900 font-serif   text-xs tracking-[3px] items-center    justify-between ">
											<p>TOTAL</p>
											<p className=" w-[40%] text-gray-500 text-left">
												${update ? updateAmount : totalAmount}
											</p>
										</div>
									</div>

									<p className="text-gray-500 mb-4 tracking-wide text-[14.6px] ">
										Your personal data will be used to process your order,
										support your experience throughout this website, and for
										other purposes described in our{" "}
										<span className="hover:text-pink-200  cursor-pointer duration-1000 transition-transform  ">
											privacy policy
										</span>
										.
									</p>

									<Button
										type="submit"
										className="font-serif w-[15%]   mb-5  rounded-none text-[12.5px]  px-5 hover:bg-stone-800 duration-300  text-center   py-4 bg-black tracking-[2.5px]  font-normal ">
										PLACE ORDER
									</Button>
								</div>
							) : (
								<div className="mx-auto flex flex-col gap-10 align-middle justify-center">
									<h1 className="text-4xl text-center  text-gray-900 tracking-wide ">
										Your cart is currently empty.
									</h1>

									<Button
										onClick={() => nav("/shop-list")}
										className=" bg-black  mx-auto hover:bg-gray-900   text-center transform      text-stone-50 font-serif  rounded-none     font-normal  opacity-95  text-xs py-4 px-5  tracking-[2.3px] w-[22%] ">
										RETURN TO SHOP
									</Button>
								</div>
							)}
						</div>
					</div>
				</div>
			</ContainerComponent>

			<FooterComponent />
		</div>
	);
};

export default CheckoutPage;
