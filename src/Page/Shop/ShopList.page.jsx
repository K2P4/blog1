/** @format */

import React from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
	ShopProductComponent,
	ShopSectionTwoComponent,
} from "../../components";
import {
	useGetProductsQuery,
	useGetShopProductQuery,
} from "../../service/endpoints/BlogEndpints";
import InstagramComponent from "../../components/Instagram.component";

const ShopListPage = () => {
	const { data, isLoading } = useGetShopProductQuery();
	const filterData = data?.slice(0, 12);
	const filterDataTwo = data?.slice(12, data?.length);

	return (
		<div>
			<NavigationHomeSectionComponent />

			<ContainerComponent>
				<div className=" my-20 flex gap-10">
					{/* Section One */}
					<div className="w-[75%]">
						<ShopProductComponent
							dataOne={filterData}
							dataTwo={filterDataTwo}
							isLoading={isLoading}
						/>
					</div>

					{/* Section Two */}
					<ShopSectionTwoComponent />
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default ShopListPage;
