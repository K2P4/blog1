/** @format */

import React from "react";
import { useGetInstagramQuery } from "../service/endpoints/BlogEndpints";
import { FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import InstagramLoadingComponent from "./InstagramLoading.component";

const InstagramComponent = () => {
	const { data, isLoading } = useGetInstagramQuery();

	return (
		<div className="mb-2">
			{isLoading ? (
				<InstagramLoadingComponent />
			) : (
				<div className="flex items-center relative justify-center px-3 gap-2">
					{data?.map((item) => (
						<div key={item?.id} className=" relative group">
							<FaInstagram className=" hidden group-hover:flex h-6 w-6 text-white   absolute top-4 left-5  animate__animated  animate__slideInUp duration-1000  " />

							<img
								src={item?.image}
								className=" h-[154px] object-cover  opacity-90  hover:opacity-100  "
								alt=""
							/>
						</div>
					))}

					<Button className=" hover:bg-gray-50 duration-700   absolute   select-text  rounded-none  text-xs px-6  text-[#ffd8d8]  bg-white tracking-[3px] font-serif">
						FOLLOW US ON INSTAGRAM
					</Button>
				</div>
			)}
		</div>
	);
};

export default InstagramComponent;
