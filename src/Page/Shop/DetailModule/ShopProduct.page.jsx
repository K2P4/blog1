/** @format */

import React from "react";
import {
	ContainerComponent,
	NavigationHomeSectionComponent,
} from "../../../components";
import { useGetShopProductDetailQuery } from "../../../service/endpoints/BlogEndpints";
import { useParams } from "react-router-dom";

const ShopProductPage = () => {
	const { id } = useParams();

	const { data, isLoading } = useGetShopProductDetailQuery(id);

	return (
		<div>
			<NavigationHomeSectionComponent />
			<ContainerComponent>
				<div className="my-20">
					{isLoading ? (
						<>Loading </>
					) : (
						<div className="">
							<div className=" w-[60%] h-[325px] items-start flex gap-4">
								<div className=" space-y-3 ">
									<img
										src={data?.image}
										className=" object-cover w-[160px] h-[100px] "
										alt=""
									/>

									<img
										src={data?.image}
										className=" object-cover w-[160px] h-[100px] "
										alt=""
									/>

									<img
										src={data?.image}
										className=" object-cover w-[160px] h-[100px] "
										alt=""
									/>
								</div>

								<img
									src={data?.image}
									className=" object-cover h-full  w-[500px] "
									alt=""
								/>
							</div>
						</div>
					)}
				</div>
			</ContainerComponent>
		</div>
	);
};

export default ShopProductPage;
