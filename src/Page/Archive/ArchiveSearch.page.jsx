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
import { useLocation, useNavigate } from "react-router-dom";

const ArchiveSearchPage = () => {
	const { data, isLoading } = useGetAllProductsQuery();
	const [submitQuery, setSubmitQuery] = useState(false);
	const location = useLocation();
	const NavData = location.state?.NavData;
	const [searchData, setData] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(data);
	const navigate = useNavigate();

	useEffect(() => {
		if (NavData) {
			const result = data?.filter((product) =>
				product?.name.toLowerCase().includes(NavData?.toLowerCase())
			);
			setFilteredProducts(result);
		} else {
			const result = data?.filter((product) =>
				product?.name.toLowerCase().includes(searchData?.toLowerCase())
			);
			setFilteredProducts(result);
		}
	}, [submitQuery, data]);

	const hanldeSearch = (e) => {
		setData(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitQuery(!submitQuery);
		navigate(location.pathname, { replace: true, state: null });
	};

	return (
		<div>
			<NavigationHomeSectionComponent />
			<NavigateRouteComponent
				Route1={`SEARCH RESULTS FOR ${
					NavData ? NavData : submitQuery ? searchData : ""
				}   `}
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
										type="text"
										onChange={hanldeSearch}
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
								searchData={searchData}
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
