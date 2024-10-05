/** @format */

import React, { useState } from "react";
import { createContext } from "react";

export const ShopContext = createContext();

const ShopProductContext = ({ children }) => {
	const [price, setPrice] = useState(20);
	const [filterProduct, setFilterProduct] = useState([]);
	const [cart, setCart] = useState([]);

	const addCart = (newCart) => {
		setCart([...cart, newCart]);
	};
	return (
		<div>
			<ShopContext.Provider
				value={{
					price,
					addCart,
					cart,
					setPrice,
					filterProduct,
					setFilterProduct,
				}}>
				{children}
			</ShopContext.Provider>
		</div>
	);
};

export default ShopProductContext;
