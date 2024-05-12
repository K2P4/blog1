/** @format */

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SlideLoadingComponent = () => {
	return (
		<div className="flex items-center w-full justify-center mx-auto gap-auto">
			<div className="flex flex-col mx-auto w-full  space-y-3">
				<Skeleton className="h-[300px] w-[90%]  rounded-sm" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-[85%]" />
					<Skeleton className="h-4 w-[80%]" />
				</div>
			</div>

			<div className="flex flex-col mx-auto  w-[90%] space-y-3">
				<Skeleton className="h-[300px] w-full rounded-sm" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-[90%]" />
					<Skeleton className="h-4 w-[85%]" />
				</div>
			</div>
		</div>
	);
};

export default SlideLoadingComponent;
