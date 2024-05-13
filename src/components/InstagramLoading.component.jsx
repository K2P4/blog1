/** @format */

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetInstagramQuery } from "../service/endpoints/BlogEndpints";

const InstagramLoadingComponent = () => {
	const { data } = useGetInstagramQuery();
	return (
		<div className="flex items-center w-full px-3  mx-auto gap-auto">
      
			<Skeleton className="h-[125px] w-[250px] rounded-xl" />
		</div>
	);
};

export default InstagramLoadingComponent;
