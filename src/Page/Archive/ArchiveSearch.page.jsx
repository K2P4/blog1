/** @format */

import React, { useState, useEffect } from "react";

import {
	AuthorPostComponent,
	AuthorTwoComponent,
	ContainerComponent,
	FooterComponent,
	NavigateRouteComponent,
	NavigationHomeSectionComponent,
} from "../../components";
import InstagramComponent from "../../components/Instagram.component";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetAllProductsQuery } from "../../service/endpoints/BlogEndpints";

const ArchiveSearchPage = () => {
	const { data, isLoading } = useGetAllProductsQuery();
	const [submitQuery, setSubmitQuery] = useState("");
	const [searchData, setData] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(data);

	useEffect(() => {
		const result = data?.filter((product) =>
			product?.name.toLowerCase().includes(searchData.toLowerCase())
		);
		setFilteredProducts(result); // Update filtered products
	}, [submitQuery, data]);

	const handleSearch = (e) => {
		setData(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitQuery(searchData);
	};

	return (
		<div>
			<NavigationHomeSectionComponent />
			<NavigateRouteComponent
				Route1={`SEARCH RESULTS FOR " ${searchData} "`}
				path={"/author"}
			/>

			<ContainerComponent>
				<div className="flex  w-full items-start my-28 gap-8 ">
					<div className="w-[70%]">
						<div className="w-full">
							{/* Search Section */}
							<form onSubmit={handleSubmit} className=" mb-20 space-y-3 ">
								<h1 className="text-[30px]  tracking-wide text-gray-800 ">
									Search Post :
								</h1>

								<div className="flex w-full  ">
									<Input
										value={searchData}
										onChange={handleSearch}
										type="text"
										className=" border border-e-0  focus:ring-0  focus:border-slate-200    border-slate-200 w-[470px] rounded-none tracking-wide placeholder:text-slate-600 text-md  "
										placeholder="Search"
									/>
									<Button
										className="font-serif  font-light text-sm py-4  text-white tracking-[2.5px] rounded-none px-10 bg-black"
										type="submit">
										SEARCH
									</Button>
								</div>
								<p className="text-slate-600 tracking-wide text-sm">
									If you are not happy with the results below please do another
									search
								</p>
							</form>

							<AuthorPostComponent
								handleSearch={handleSearch}
								dataOne={filteredProducts}
								isLoading={isLoading}
								pageCondition={true}
							/>
						</div>
					</div>

					<AuthorTwoComponent />
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default ArchiveSearchPage;
