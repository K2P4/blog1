/** @format */

import React, { useEffect, useState } from "react";
import {
	useGetAllProductsQuery,
	useGetInspiration1Query,
} from "../service/endpoints/BlogEndpints";
import {
	NavigationHomeSectionComponent,
	AboutTwoComponent,
	ContainerComponent,
	FooterComponent,
	AuthorPostComponent,
	AuthorTwoComponent,
} from "../components";
import { motion } from "framer-motion";
import InstagramComponent from "../components/Instagram.component";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryListPage = () => {
	const { data, isLoading } = useGetAllProductsQuery();
	const location = useLocation();
	const CategoryData = location?.state?.categoryData;
	const [filterData, setFilterData] = useState([data]);

	const nav = useNavigate();

	const navRoute = (path) => {
		nav(path);
	};

	useEffect(() => {
		if (CategoryData) {
			const result = data?.filter((product) =>
				product?.type.toLowerCase().includes(CategoryData?.toLowerCase())
			);
			setFilterData(result);
		} else {
			const result = data?.filter((product) =>
				product?.type.toLowerCase().includes("BEAUTY")
			);
			setFilterData(result);
		}
	}, [data]);

	return (
		<div>
			<NavigationHomeSectionComponent />
			<div className="bg-pink-50 mb-8">
				<ContainerComponent>
					<h1 className="  m text-gray-500 text-xs space-x-3 tracking-[2.5px] font-serif py-10 ">
						<span
							onClick={() => navRoute("/HomeSection")}
							className=" cursor-pointer hover:text-gray-700 duration-1000 ">
							HOME
						</span>
						<span>|</span>
						<span
							onClick={() => navRoute("/category")}
							className=" cursor-pointer hover:text-gray-700 duration-1000 ">
							{CategoryData}
						</span>
					</h1>
				</ContainerComponent>
			</div>

			<ContainerComponent>
				<div className="flex  w-full  my-32 gap-8 ">
					<div className="w-[70%] ">
						{/* Section One */}

						<AuthorPostComponent
							dataOne={filterData}
							dataTwo={filterData}
							isLoading={isLoading}
						/>
					</div>

					<AuthorTwoComponent />
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default CategoryListPage;
