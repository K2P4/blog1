/** @format */

import React from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
	Section2Component,
	ViewPostComponent,
} from "../../components";
import {
	useGetLatestStyle3Query,
	useGetTravelTwoQuery,
} from "../../service/endpoints/BlogEndpints";
import InstagramComponent from "../../components/Instagram.component";

const ViewPostPage = () => {
	const { data, isLoading } = useGetTravelTwoQuery();
	const dataTwo = useGetLatestStyle3Query();

	return (
		<div>
			<NavigationHomeSectionComponent />
			<ContainerComponent>
				<div className="flex  w-full     gap-10  my-28  ">
					<div className="w-[70%]">
						<ViewPostComponent
							data={data}
							dataTwo={dataTwo?.data}
							isLoading={isLoading}
						/>
					</div>

					<Section2Component />
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default ViewPostPage;
