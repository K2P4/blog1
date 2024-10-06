/** @format */

import React, { useState } from "react";
import { createContext } from "react";

export const ShopContext = createContext();

const ShopProductContext = ({ children }) => {
	const [price, setPrice] = useState(20);
	const [filterProduct, setFilterProduct] = useState([]);
	const [cart, setCart] = useState([]);
	const [submitBlock, setBlock] = useState(false);

	const addCart = (newCart) => {
		setCart([...cart, newCart]);
	};
	const toggleDelete = (id) => {
		setCart(cart.filter((item) => item.id != id));
	};

	return (
		<div>
			<ShopContext.Provider
				value={{
					submitBlock,
					setBlock,
					toggleDelete,
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
