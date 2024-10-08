/** @format */

import React, { useContext, useState } from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigateRouteComponent,
	NavigationHomeSectionComponent,
} from "../../components";
import { Button } from "@/components/ui/button";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { ShopContext } from "../../Contexts/ShopProductContext";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
	const { cart, toggleDelete, toggleAddRemove, update, setUpdate } =
		useContext(ShopContext);

	const [quantity, setQuantity] = useState(1);
	const nav = useNavigate();

	const totalAmount = cart?.reduce((total, item) => {
		return Math.ceil(total) + Math.ceil(item?.price);
	}, 0);

	const handleQuantity = (MinusSum) => {
		setQuantity(quantity + MinusSum);
	};

	const removeCart = (id) => {
		toggleDelete(id);
	};

	const updateAmount = cart?.reduce((total, item) => {
		return Math.ceil(total) + Math.ceil(item?.updatePrice);
	}, 0);

	const updateCart = () => {
		setUpdate(true);
	};

	return (
		<div>
			<NavigationHomeSectionComponent />
			<NavigateRouteComponent Route1={"CART"} path={"/shop-cart"} />
			<ContainerComponent>
				<div className="my-20">
					{update && (
						<div className=" mb-5 border-pink-100 border p-4 text-md text-gray-800">
							Cart Updated.
						</div>
					)}

					{cart?.length > 0 ? (
						<div className="">
							<Table className="border-b border-b-pink-100">
								<TableHeader>
									<TableRow className=" font-serif  text-sm tracking-[3px] ">
										<TableHead className="w-[300px] text-center font-normal text-gray-900">
											PRODUCT
										</TableHead>
										<TableHead className="text-gray-900 font-normal">
											PRICE
										</TableHead>
										<TableHead className="text-gray-900 font-normal">
											QUANITY
										</TableHead>
										<TableHead className="text-left font-normal text-gray-900">
											SUBTOTAL
										</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody className="">
									{cart.map((item) => (
										<TableRow className="" key={item.id}>
											<TableCell className="font-medium">
												<div className="flex items-center gap-10 align-middle">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														onClick={() => removeCart(item?.id)}
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className=" w-5 h-5 text-gray-800 active:scale-90 hover:text-gray-900 duration-700">
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M6 18 18 6M6 6l12 12"
														/>
													</svg>

													<img
														src={item?.image}
														className="object-cover h-full w-[150px]"
														alt=""
													/>
												</div>
											</TableCell>
											<TableCell className="text-gray-600 tracking-widest">
												${item.price}
											</TableCell>
											<TableCell>
												<Button
													className="border bg-white 
									 border-pink-100    w-[110px]  px-1 py-4 rounded-none flex  justify-center gap-4  hover:bg-white text-gray-500  items-center">
													<AiOutlineMinus
														onClick={() => toggleAddRemove(item?.id, -1)}
														className="text-gray-600 text-[14px] mx-auto text-center hover:text-pink-400 duration-500  cursor-pointer"
													/>

													<span className="w-1">{item?.quantity}</span>
													<GoPlus
														onClick={() => toggleAddRemove(item?.id, 1)}
														className="text-gray-600 text-[15px] text-center mx-auto font-medium hover:text-pink-400 duration-500  cursor-pointer"
													/>
												</Button>
											</TableCell>
											<TableCell className="text-left text-gray-600 tracking-widest">
												{update ? (
													<>${item.price * item?.quantity}</>
												) : (
													<>${item.price * 1}</>
												)}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
								{/* <TableFooter>
							<TableRow>
								<TableCell colSpan={3}>Total</TableCell>
								<TableCell className="text-right">$2,500.00</TableCell>
							</TableRow>
						</TableFooter> */}
							</Table>

							<Button
								onClick={() => setUpdate(true)}
								className="  bg-black   hover:bg-gray-900   text-center transform      text-stone-50 font-serif  rounded-none     font-normal  opacity-95  text-xs py-4 px-7  tracking-[2.3px] w-[22%] mt-5 mb-20">
								UPDATE CART
							</Button>

							<div className="space-y-4">
								<h1 className="text-4xl mb-3 text-gray-900 tracking-wide  ">
									Cart totals
								</h1>

								<div className="flex  pt-5 items-center text-[13.8px]  font-medium font-serif   border-b border-b-pink-100 pb-4 text-gray-800 tracking-widest">
									<p className="w-[20%]">SUBTOTAL</p>{" "}
									<p className="text-gray-600 text-right  tracking-widest ">
										{update ? <>${updateAmount}</> : <>${totalAmount}</>}{" "}
									</p>
								</div>

								<div className="flex  pt-5 items-center text-[13.8px]  font-medium font-serif   border-b border-b-pink-100 pb-4 text-gray-800 tracking-widest">
									<p className="w-[20%]">TOTAL</p>{" "}
									<p className="text-gray-600 text-right  tracking-widest ">
										{update ? <>${updateAmount}</> : <>${totalAmount}</>}{" "}
									</p>
								</div>

								<Button
									onClick={() => setUpdate(true)}
									className="  bg-black   hover:bg-gray-900   text-center transform      text-stone-50 font-serif  rounded-none     font-normal  opacity-95  text-xs py-4 px-7  tracking-[2.3px] w-[30%] mt-5 mb-20">
									PROCEED TO CHECKOUT
								</Button>
							</div>
						</div>
					) : (
						<div className="mx-auto flex flex-col gap-10 align-middle justify-center">
							<h1 className="text-4xl text-center  text-gray-900 tracking-wide ">
								Your cart is currently empty.
							</h1>

							<Button
								onClick={() => nav("/shop-list")}
								className=" bg-black  mx-auto hover:bg-gray-900   text-center transform      text-stone-50 font-serif  rounded-none     font-normal  opacity-95  text-xs py-4 px-5  tracking-[2.3px] w-[22%] ">
								RETURN TO SHOP
							</Button>
						</div>
					)}
				</div>
			</ContainerComponent>

			<FooterComponent />
		</div>
	);
};

export default CartPage;
