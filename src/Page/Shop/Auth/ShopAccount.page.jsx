/** @format */

import React from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigateRouteComponent,
	NavigationHomeSectionComponent,
} from "../../../components";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ShopAccountPage = () => {
	return (
		<div>
			<NavigationHomeSectionComponent />

			<NavigateRouteComponent Route1={"MY ACCOUNT"} path={"/shop-account"} />

			<ContainerComponent>
				<div className="my-20">
					{/* Reply Session */}

					<div className="w-full  space-y-7  ">
						<h1 className="text-gray-900 text-4xl tracking-[2px]  ">Login</h1>

						<div className=" space-y-4 ">
							<div className="space-y-2 ">
								<Label
									className="text-gray-500 tracking-wide text-md"
									htmlFor="terms">
									Username or email address *
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
									Password *
								</Label>
								<Input
									className=" bg-gray-50 rounded-none   py-5 tracking-wide placeholder:text-[15px] text-gray-600 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
									placeholder=""
								/>
							</div>
						</div>

						<Button
							type="submit"
							className="font-serif w-[15%]   mb-5  rounded-none text-[12.5px]  px-5 hover:bg-stone-800 duration-300  text-center   py-4 bg-black tracking-[2.5px]  font-normal ">
							LOG IN
						</Button>
					</div>

					<div className="space-y-3 mt-5">
						<div className="flex items-center gap-2">
							<input
								type="checkbox"
								className="h-3 w-3  rounded-sm focus:ring-0 focus:outline-none  form-checkbox text-blue "
							/>

							<p className="text-[#8f8f8f]  w-[80%]  text-[14px] text-wrap  tracking-wider">
								Remember me
							</p>
						</div>

						<p className="text-gray-700 cursor-pointer hover:text-[#cfac9f] duration-1000 transition-transform font-thin">
							Lost your password ?
						</p>
					</div>
				</div>
			</ContainerComponent>

			<FooterComponent />
		</div>
	);
};

export default ShopAccountPage;
