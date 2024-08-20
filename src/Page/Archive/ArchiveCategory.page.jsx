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
	useGetBeautyOneQuery,
	useGetBeautyTwoQuery,
} from "../../service/endpoints/BlogEndpints";

const ArchiveCategoryPage = () => {
	const { data, isLoading } = useGetBeautyOneQuery();
	const dataTwo = useGetBeautyTwoQuery();

	return (
		<div>
			<NavigationHomeSectionComponent />
			<NavigateRouteComponent Route1={"HOME DECOR"} path={"/archive-category"} />

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

export default ArchiveCategoryPage;
