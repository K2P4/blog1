/** @format */

import React, { useState } from "react";
import { createContext } from "react";

export const ShopContext = createContext();

const ShopProductContext = ({ children }) => {
	const [price, setPrice] = useState(20);
	const [filterProduct, setFilterProduct] = useState([]);

	return (
		<div>
			<ShopContext.Provider
				value={{ price, setPrice, filterProduct, setFilterProduct }}>
				{children}
			</ShopContext.Provider>
		</div>
	);
};

export default ShopProductContext;
