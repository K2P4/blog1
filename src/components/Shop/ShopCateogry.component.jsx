/** @format */

import React, { useContext } from "react";
import { ShopContext } from "../../Contexts/ShopProductContext";
import {
	useGetProductsQuery,
	useGetShopProductQuery,
} from "../../service/endpoints/BlogEndpints";

const ShopCateogryComponent = () => {
	const { setFilterProduct } = useContext(ShopContext);
	const { data, isLoading } = useGetShopProductQuery();

	const handleCategory = (status) => {
		const ProductCategory = data?.filter((item) =>
			item?.category?.toLowerCase().includes(status?.toLowerCase())
		);

		
		if (ProductCategory) {
			setFilterProduct(ProductCategory);
		} else {
			window.alert("NOTHING FOUND HERE");
		}

		// 	if (product?.category.toLowerCase().includes(status.toLowerCase())) {
		// 		setFilterProduct(ProductCategory);
		// 		console.log("Found")
		// 	} else {
		// 		setFilterProduct(data);
		// 		window.Error("NOTHING FOUND HERE");
		// 	}
		// });
	};

	return (
		<div className=" space-y-4 w-full mx-auto ">
			<h1 className="text-gray-900 text-[28.5px] tracking-[2.1px] text-center mx-auto ">
				Categories
			</h1>

			<div className=" space-y-5">
				<p
					onClick={() => handleCategory("beauty")}
					className="  text-xs  cursor-pointer duration-300 hover:text-[#f5baba]  text-center font-serif text-[#e2abab] tracking-[2.2px]">
					BEAUTY
				</p>
				<p
					onClick={() => handleCategory("decoration")}
					className="  text-xs  cursor-pointer duration-300 hover:text-[#f5baba]  text-center font-serif text-[#e2abab] tracking-[2.2px]">
					DECORATION
				</p>
				<p
					onClick={() => handleCategory("inspiration")}
					className="  text-xs  cursor-pointer duration-300 hover:text-[#f5baba]  text-center font-serif text-[#e2abab] tracking-[2.2px]">
					INSPIRATION
				</p>
				<p
					onClick={() => handleCategory("lifestyle")}
					className="  text-xs  cursor-pointer duration-300 hover:text-[#f5baba]  text-center font-serif text-[#e2abab] tracking-[2.2px]">
					LIFESTYLE
				</p>
			</div>
		</div>
	);
};

export default ShopCateogryComponent;
