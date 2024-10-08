/** @format */

import React from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigateRouteComponent,
	NavigationHomeSectionComponent,
} from "../../components";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const CheckoutPage = () => {
	return (
		<div>
			<NavigationHomeSectionComponent />
			<NavigateRouteComponent Route1={"CHECKOUT"} path={"/shop-checkout"} />

			<ContainerComponent>
				<div className="my-20">
					<div className="w-full  space-y-7  ">
						<h1 className="text-gray-900 text-4xl tracking-[2px]  ">
							Billing details
						</h1>

						<div className=" space-y-3 ">
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

							<div className="space-y-2 ">
								<Label
									className="text-gray-500 tracking-wide text-md"
									htmlFor="terms">
									Country / Region *
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
									Street address *
								</Label>
								<Input
									className=" bg-gray-50 rounded-none   py-5  placeholder:text-[14px] tracking-wide text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
									placeholder="House number and street name"
								/>
							</div>
						</div>

						<Button
							type="submit"
							className="font-serif w-[15%]   mb-5  rounded-none text-[12.5px]  px-5 hover:bg-stone-800 duration-300  text-center   py-4 bg-black tracking-[2.5px]  font-normal ">
							PLACE ORDER
						</Button>
					</div>
				</div>
			</ContainerComponent>

			<FooterComponent />
		</div>
	);
};

export default CheckoutPage;
