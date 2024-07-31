/** @format */

import React from "react";
import { useGetProductsQuery } from "../../service/endpoints/BlogEndpints";
import ColumnPage from "./Column.page";

const ColumnTwoPage = () => {
	const { data, isLoading } = useGetProductsQuery();

	return (
		<div>
			<ColumnPage width={"500px"} height={"480px"} data={data} isLoading={isLoading} />
		</div>
	);
};

export default ColumnTwoPage;
