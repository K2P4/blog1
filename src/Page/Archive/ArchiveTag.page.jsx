/** @format */

import React, { useEffect, useState } from "react";
import {
	AuthorPostComponent,
	AuthorTwoComponent,
	ContainerComponent,
	FooterComponent,
	NavigateRouteComponent,
	NavigationHomeSectionComponent,
} from "../../components";
import {
	useGetAllProductsQuery,
	useGetTravelOneQuery,
	useGetTravelTwoQuery,
} from "../../service/endpoints/BlogEndpints";
import InstagramComponent from "../../components/Instagram.component";
import { useLocation, useNavigate } from "react-router-dom";

const ArchiveTagPage = () => {
	const { data, isLoading } = useGetAllProductsQuery();
	const location = useLocation();
	const TagData = location?.state?.tagData;
	const [filterData, setFilterData] = useState([data]);

	const nav = useNavigate();

	useEffect(() => {
		if (TagData) {
			const result = data?.filter((product) =>
				product?.type.toLowerCase().includes(TagData?.toLowerCase())
			);
			setFilterData(result);
		} else {
			const result = data?.filter((product) =>
				product?.type.toLowerCase().includes("TRAVEL")
			);
			setFilterData(result);
		}
	}, [data]);

	return (
		<div>
			<NavigationHomeSectionComponent />
			<NavigateRouteComponent
				Route1={`POSTS TAGGED "${TagData ? TagData : "TRAVEL"}"`}
				path={"/archive-tag"}
			/>

			<ContainerComponent>
				<div className="flex  w-full items-start my-32 gap-8  ">
					<div className="w-[70%] ">
						{/* Section One */}

						<AuthorPostComponent
							dataOne={filterData}
							dataTwo={filterData}
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
