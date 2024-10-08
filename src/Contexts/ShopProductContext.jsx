/** @format */

import React, { useState } from "react";
import { createContext } from "react";

export const ShopContext = createContext();

const ShopProductContext = ({ children }) => {
	const [price, setPrice] = useState(20);
	const [filterProduct, setFilterProduct] = useState([]);
	const [update, setUpdate] = useState(false);
	const [cart, setCart] = useState([]);
	const [submitBlock, setBlock] = useState(false);

	const addCart = (newCart) => {
		setCart([...cart, newCart]);
	};
	const toggleDelete = (id) => {
		setCart(cart.filter((item) => item.id != id));
	};

	const toggleAddRemove = (itemId, addQ) => {
		setCart(
			cart.map((el) => {
				if (el.id == itemId) {
					const newQuantity = el.quantity + addQ;
					const newPrice = el.price * newQuantity;

					return {
						...el,
						quantity: newQuantity,
						updatePrice: newPrice,
					};
				}
				return el;
			})
		);
	};

	return (
		<div>
			<ShopContext.Provider
				value={{
					submitBlock,
					toggleAddRemove,
					update,
					setUpdate,
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
