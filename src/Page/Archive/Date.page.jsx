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
import InstagramComponent from "../../components/Instagram.component";
import {
	useGetAllProductsQuery,
	useGetLatestStyle2Query,
	useGetLatestStyleQuery,
} from "../../service/endpoints/BlogEndpints";
import { useLocation } from "react-router-dom";

const DatePage = () => {
	const { data, isLoading } = useGetAllProductsQuery();
	const location = useLocation();
	const archiveData = location?.state?.dateData;
	const currentDate = "APRIL 19,2021";
	const formatDate = new Date(archiveData);
	const [filterData, setFilterData] = useState([data]);

	useEffect(() => {
		if (archiveData) {
			const filteredDates = data?.filter((item) => {
				const itemDate = new Date(item?.date);

				// Check if month and year match
				return (
					itemDate.getMonth() === formatDate.getMonth() ||
					itemDate.getFullYear() === formatDate.getMonth()
				);
			});

			setFilterData(filteredDates);
		} else {
			const filteredDates = data?.filter((item) => {
				const itemDate = new Date(item?.date);
				const formDate = new Date(currentDate);
				// Check if month and year match
				return (
					itemDate.getMonth() == formDate.getMonth() ||
					itemDate.getFullYear() == formDate.getMonth()
				);
			});

			setFilterData(filteredDates);
		}
	}, [data]);

	return (
		<div>
			<NavigationHomeSectionComponent />
			<NavigateRouteComponent
				Route1={
					location?.state?.dateData ? location?.state?.dateData : currentDate
				}
				path={"/archive-date"}
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

export default DatePage;
