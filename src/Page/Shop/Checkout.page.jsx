/** @format */

import React, { useContext, useState } from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigateRouteComponent,
	NavigationHomeSectionComponent,
	PaymentComponent,
} from "../../components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import * as yup from "yup";
import { ShopContext } from "../../Contexts/ShopProductContext";
import { useNavigate } from "react-router-dom";
import { useCreateMutation } from "../../service/endpoints/Contact";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CheckoutPage = () => {
	const [CreateFun, { data, isLoading }] = useCreateMutation();
	const [selectedOption, setSelectedOption] = useState();
	const { cart, update, setUpdate } = useContext(ShopContext);
	const [checkSelect, setCheck] = useState(true);

	const nav = useNavigate();

	console.log(CreateFun, data, selectedOption);

	const initailValue = {
		email: "",
		firstname: "",
		lastname: "",
		company: "",
		address: "",
		phone: "",
		country: "",
		payment: "",
	};

	const handleSelect = (option) => {
		setSelectedOption(option);
		setCheck(false);
	};

	const validationSchema = yup.object({
		email: yup
			.string()
			.required("email is required")
			.email("invalid email format"),
		firstname: yup
			.string()
			.required("firstname is required")
			.min(2, "firstname should be longer 2"),
		lastname: yup
			.string()
			.required("lastname is required")
			.min(2, "lastname should be longer 2"),
		company: yup.string().required("company is required"),
		address: yup.string().required("address is required"),

		phone: yup.number().required("phone is required"),
		payment: yup.string().required("payment is required"),
	});

	const totalAmount = cart?.reduce((total, item) => {
		return Math.ceil(total) + Math.ceil(item?.price);
	}, 0);

	const updateAmount = cart?.reduce((total, item) => {
		return Math.ceil(total) + Math.ceil(item?.updatePrice);
	}, 0);

	const handleSubmit = async (value) => {
		CreateFun(value);
		console.log(value, "1223");
	};

	return (
		<div>
			<NavigationHomeSectionComponent />
			<NavigateRouteComponent Route1={"CHECKOUT"} path={"/shop-checkout"} />

			<ContainerComponent>
				<div className="my-20">
					<Formik
						validateOnChange={false}
						validateOnBlur={false}
						validationSchema={validationSchema}
						initialValues={initailValue}
						onSubmit={handleSubmit}>
						{({ isSubmitting, handleChange, handleBlur, values }) => (
							<Form className="space-y-4">
								{/* Billing Details */}
								{cart?.length > 0 && (
									<div className="">
										<h1 className="text-gray-900 text-4xl mb-3 tracking-[2px]  ">
											Billing details
										</h1>

										<div className=" space-y-5 ">
											<div className="space-y-2 flex flex-col  ">
												<Label
													className="text-gray-500 tracking-wide text-md"
													htmlFor="terms">
													First name *{" "}
												</Label>
												<input
													onChange={handleChange}
													onBlur={handleBlur}
													name="firstname"
													type="text"
													id="firstname"
													value={values.firstname}
													className=" bg-gray-50 rounded-none  border-0  py-5 tracking-wide placeholder:text-[15px] text-gray-600 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500 "
													placeholder=""
												/>
												<ErrorMessage
													component={"p"}
													name="firstname"
													className="text-red-500 text-sm font-medium"
												/>
											</div>
											<div className="space-y-2 flex flex-col  ">
												<Label
													className="text-gray-500 tracking-wide text-md"
													htmlFor="terms">
													Last name *
												</Label>
												<input
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.lastname}
													name="lastname"
													type="text"
													id="lastname"
													className=" bg-gray-50 rounded-none   border-0  py-5 tracking-wide placeholder:text-[15px] text-gray-600 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
													placeholder=""
												/>
												<ErrorMessage
													component={"p"}
													name="lastname"
													className="text-red-500 text-sm font-medium"
												/>
											</div>

											<div className="space-y-2 flex flex-col  ">
												<Label
													className="text-gray-500 tracking-wide text-md"
													htmlFor="terms">
													Company name (optional)
												</Label>
												<input
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.company}
													name="company"
													type="text"
													id="company"
													className=" bg-gray-50 rounded-none   border-0  py-5 tracking-wide placeholder:text-[15px] text-gray-600 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
													placeholder=""
												/>

												<ErrorMessage
													component={"p"}
													name="company"
													className="text-red-500 text-sm font-medium"
												/>
											</div>

											<div className="space-y-2 flex flex-col   ">
												<Label
													className="text-gray-500 tracking-wide text-md"
													htmlFor="terms">
													Country / Region *
												</Label>
												<DropdownMenu className=" ">
													<DropdownMenuTrigger
														onChange={handleChange}
														onBlur={handleBlur}
														value={(values.country = selectedOption)}
														name="country"
														type="text"
														id="country"
														placeholder="United States (US)"
														className="w-[50%]  text-gray-600 text-left border-0 tracking-wide  text-[14px] focus:ring-0 rounded-sm  h-14 ">
														{checkSelect ? "Myanmar (MM)" : selectedOption}
													</DropdownMenuTrigger>

													<DropdownMenuContent className="space-y-2 w-[530px]  overflow-scroll rounded-none">
														<DropdownMenuLabel>
															Country / Region
														</DropdownMenuLabel>
														<DropdownMenuItem
															onSelect={() => handleSelect("Myanmar (MM)")}
															value="myanmar">
															Myanmar (MM)
														</DropdownMenuItem>
														<DropdownMenuItem
															onSelect={() => handleSelect("Thailand (TH)")}
															value="thialand">
															Thailand (TH)
														</DropdownMenuItem>
														<DropdownMenuItem
															onSelect={() => handleSelect("Cambodia (CH)")}
															value="cambodia">
															Cambodia (CH)
														</DropdownMenuItem>
														<DropdownMenuItem
															onSelect={() => handleSelect("Indonesia (ID)")}
															value="indonesia">
															Indonesia (ID)
														</DropdownMenuItem>
														<DropdownMenuItem
															onSelect={() => handleSelect("Philipines (PH)")}
															value="philipines">
															Philipines (PH)
														</DropdownMenuItem>
														<DropdownMenuItem
															onSelect={() => handleSelect("Russia (RA)")}
															value="russia">
															Russia (RA)
														</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											</div>

											<div className="space-y-2 flex flex-col  ">
												<Label
													className="text-gray-500 tracking-wide text-md"
													htmlFor="terms">
													Street address *
												</Label>
												<input
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.address}
													name="address"
													type="text"
													id="address"
													className=" bg-gray-50 rounded-none   border-0  py-5  placeholder:text-[14px] tracking-wide text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
													placeholder="House number and street name"
												/>
												<ErrorMessage
													component={"p"}
													name="address"
													className="text-red-500 text-sm font-medium"
												/>
											</div>

											<div className="space-y-2 flex flex-col  ">
												<Label
													className="text-gray-500 tracking-wide text-md"
													htmlFor="terms">
													Phone *
												</Label>
												<input
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.phone}
													name="phone"
													type="text"
													id="phone"
													className=" bg-gray-50 rounded-none   border-0  py-5  placeholder:text-[14px] tracking-wide text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
													placeholder="094500..."
												/>
												<ErrorMessage
													component={"p"}
													name="phone"
													className="text-red-500 text-sm font-medium"
												/>
											</div>

											<div className="space-y-2 flex flex-col  ">
												<Label
													className="text-gray-500 tracking-wide text-md"
													htmlFor="terms">
													Email address *
												</Label>
												<input
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.email}
													name="email"
													type="email"
													id="email"
													className=" bg-gray-50 rounded-none   border-0  py-5  placeholder:text-[14px] tracking-wide text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
													placeholder="zoya@email.com"
												/>
												<ErrorMessage
													component={"p"}
													name="email"
													className="text-red-500 text-sm font-medium"
												/>
											</div>
										</div>
									</div>
								)}

								{/* Your Order */}
								<div className="   ">
									{cart?.length > 0 ? (
										<div className="mt-5">
											<h1 className="text-gray-900 text-4xl tracking-[2px]  ">
												Your order
											</h1>

											<div className=" my-5 space-y-5">
												<div className="flex border-b border-b-pink-100 pb-3 text-center font-normal text-gray-900 font-serif  text-[13px] tracking-[2.7px] items-center    justify-between ">
													<p>PRODUCT</p>
													<p className=" w-[40%] text-left">SUBTOTAL</p>
												</div>

												{cart?.map((item) => (
													<div
														key={item?.id}
														className="flex border-b border-b-pink-100 pb-3 text-center font-normal text-gray-900 font-serif   text-xs tracking-[3px] items-center    justify-between ">
														<p className="text-gray-500 ">
															{item?.name} x {item?.quantity}
														</p>
														<p className="  w-[40%] text-gray-500 text-left">
															${item?.price * item?.quantity}
														</p>
													</div>
												))}

												<div className="flex border-b border-b-pink-100 pb-3 text-center font-normal text-gray-900 font-serif   text-xs tracking-[3px] items-center    justify-between ">
													<p>SUBTOTAL</p>
													<p className="  w-[40%] text-gray-500 text-left">
														${update ? updateAmount : totalAmount}
													</p>
												</div>

												<div className="flex border-b border-b-pink-100 pb-3 text-center font-normal text-gray-900 font-serif   text-xs tracking-[3px] items-center    justify-between ">
													<p>TOTAL</p>
													<p className=" w-[40%] text-gray-500 text-left">
														${update ? updateAmount : totalAmount}
													</p>
												</div>
											</div>

											<p className="text-gray-500 mb-4 tracking-wide text-[14.6px] ">
												Your personal data will be used to process your order,
												support your experience throughout this website, and for
												other purposes described in our{" "}
												<span className="hover:text-pink-200  cursor-pointer duration-1000 transition-transform  ">
													privacy policy
												</span>
												.
											</p>
										</div>
									) : (
										<div className="mx-auto flex flex-col gap-10 align-middle justify-center">
											<h1 className="text-4xl text-center  text-gray-900 tracking-wide ">
												Your cart is currently empty.
											</h1>

											<Button
												onClick={() => nav("/shop-list")}
												className=" bg-black  mx-auto hover:bg-gray-900   text-center transform      text-stone-50 font-serif  rounded-none   border-0    font-normal  opacity-95  text-xs py-4 px-5  tracking-[2.3px] w-[22%] ">
												RETURN TO SHOP
											</Button>
										</div>
									)}
								</div>

								{cart?.length > 0 && (
									<>
										<PaymentComponent
											handleChange={handleChange}
											handleBlur={handleBlur}
											values={values}
										/>
										<Button
											onClick={handleSubmit}
											type="submit"
											className="font-serif w-[15%]   mb-5  rounded-none text-[12.5px]  px-5 hover:bg-stone-800 duration-300  text-center   py-4 bg-black tracking-[2.5px] text-white font-normal ">
											{isLoading ? (
												<Loader2 className=" mr-2 text-white h-5 w-5 animate-spin" />
											) : (
												<> PLACE ORDER</>
											)}
										</Button>
									</>
								)}
							</Form>
						)}
					</Formik>
				</div>
			</ContainerComponent>

			<FooterComponent />
		</div>
	);
};

export default CheckoutPage;
