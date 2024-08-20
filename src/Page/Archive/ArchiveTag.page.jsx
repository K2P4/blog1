/** @format */

import React from "react";
import {
	AuthorPostComponent,
	AuthorTwoComponent,
	ContainerComponent,
	FooterComponent,
	NavigateRouteComponent,
	NavigationHomeSectionComponent,
} from "../../components";
import {
	useGetTravelOneQuery,
	useGetTravelTwoQuery,
} from "../../service/endpoints/BlogEndpints";
import InstagramComponent from "../../components/Instagram.component";

const ArchiveTagPage = () => {
	const { data, isLoading } = useGetTravelOneQuery();
	const dataTwo = useGetTravelTwoQuery();

	return (
		<div>
			<NavigationHomeSectionComponent />
			<NavigateRouteComponent
				Route1={`POSTS TAGGED "TRAVEL"`}
				path={"/archive-tag"}
			/>

			<ContainerComponent>
				<div className="flex  w-full items-start my-32 gap-8  ">
					<div className="w-[70%] ">
						{/* Section One */}

						<AuthorPostComponent
							dataOne={data}
							dataTwo={dataTwo?.data}
							isLoading={isLoading}
						/>
					</div>

					{/* Section Two */}
					<AuthorTwoComponent />
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default ArchiveTagPage;
