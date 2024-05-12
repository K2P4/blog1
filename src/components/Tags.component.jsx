/** @format */

import React from "react";
import { Button } from "@/components/ui/button";
import { useGetTagsQuery } from "../service/endpoints/BlogEndpints";

const TagsComponent = () => {
	const { data } = useGetTagsQuery();

	return (
		<div>
			{" "}
			<h1 className=" text-center text-3xl   text-gray-800 font-medium tracking-wide ">
				Tags
			</h1>
			<div className="w-full flex flex-wrap justify-center  p-2 items-center gap-2 mt-3 mx-auto">
				{data?.map((item) => (
					<Button
						key={item?.id}
						className="  w-auto  cursor-pointer  hover:bg-[#E1ACAC] hover:text-gray-50  duration-300 font-light text-xs  py-1    px-5 border-[#cfac9f]  rounded-none font-serif text-[#ababab] tracking-[2px] "
						variant="outline">
						{item?.name}
					</Button>
				))}
			</div>
		</div>
	);
};

export default TagsComponent;
