/** @format */

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetInstagramQuery } from "../service/endpoints/BlogEndpints";

const InstagramLoadingComponent = () => {
	const { data } = useGetInstagramQuery();
	return (
		<div className="  ">
      
			<Skeleton className="h-[200px] w-[220px] rounded-sm" />
		</div>
	);
};

export default InstagramLoadingComponent;
