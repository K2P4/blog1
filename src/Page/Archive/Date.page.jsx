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
import InstagramComponent from "../../components/Instagram.component";
import {
	useGetLatestStyle2Query,
	useGetLatestStyleQuery,
} from "../../service/endpoints/BlogEndpints";

const DatePage = () => {
	const { data, isLoading } = useGetLatestStyleQuery();

	const dataTwo = useGetLatestStyle2Query();



	return (
		<div>
			<NavigationHomeSectionComponent />
			<NavigateRouteComponent Route1={`2021 APRIL`} path={"/archive-date"} />

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

export default DatePage;
