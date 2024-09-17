/** @format */

import React, { useContext, useState } from "react";
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
import { ShopContext } from "../../Contexts/ShopProductContext";

const ShopListPage = () => {
	const { data, isLoading } = useGetShopProductQuery();
	const { price, setPrice, setFilterProduct } = useContext(ShopContext);

	const FilterPrice = (newPrice) => {
		const chgPrice = data?.filter((item) => Math.ceil(item?.price) > price);
		const sortingPrice = chgPrice?.sort((a, b) => a.price - b.price);
		setFilterProduct(sortingPrice);
	};

	return (
		<div>
			<NavigationHomeSectionComponent />

			<ContainerComponent>
				<div className=" my-20 flex gap-10">
					{/* Section One */}
					<div className="w-[75%]">
						<ShopProductComponent dataAll={data} isLoading={isLoading} />
					</div>

					{/* Section Two */}
					<ShopSectionTwoComponent
						FilterPrice={FilterPrice}
						price={price}
						setPrice={setPrice}
					/>
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default ShopListPage;
