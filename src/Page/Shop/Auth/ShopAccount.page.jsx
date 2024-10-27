/** @format */

import React, { useState } from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigateRouteComponent,
	NavigationHomeSectionComponent,
} from "../../../components";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useToast } from "../../../hooks/use-toast";
import {
	useGetAuthQuery,
	useSigninMutation,
} from "../../../service/endpoints/Auth";

const ShopAccountPage = () => {
	// const [fun, data] = useSigninMutation();
	const { data } = useGetAuthQuery();
	const [check, setCheck] = useState();
	const { toast } = useToast();

	const handleCheckboxChange = (event) => {
		setCheck(event.target.checked);
	};

	console.log(data);

	const initailValue = {
		email: "",
		password: "",
	};

	const validationSchema = yup.object({
		email: yup
			.string()
			.required("email is required")
			.email("invalid email format"),
		password: yup
			.string()
			.required("password is required")
			.min(5, "password shold be 5 letters"),
	});

	const handleSubmit = async (value, action) => {
		const filterData = data?.filter((item) => item?.email == value.email);

		if (filterData[0].password == value.password) {
			if (localStorage.getItem("token")) {
				alert("You are already logged in here !");
			} else if (check) {
				localStorage.setItem("token", JSON.stringify(value));
				toast({
					description: "Log In Sucessfully !",
				});
			} else if (!check) {
				localStorage.removeItem("token");
				toast({
					description: "Log In Sucessfully !",
				});
			}
		} else {
			toast({
				description: "Password Incorrect Try Again !",
			});
		}

		action.reset();
	};

	return (
		<div>
			<NavigationHomeSectionComponent />

			<NavigateRouteComponent Route1={"MY ACCOUNT"} path={"/shop-account"} />

			<ContainerComponent>
				<Formik
					validateOnChange={false}
					validateOnBlur={false}
					validationSchema={validationSchema}
					initialValues={initailValue}
					onSubmit={handleSubmit}
					className="">
					{/* Reply Session */}

					{({ isSubmitting, handleChange, handleBlur, values }) => (
						<Form className="my-20">
							<div className="w-full  space-y-7   ">
								<h1 className="text-gray-900 text-4xl tracking-[2px]  ">
									Login
								</h1>

								<div className=" space-y-4 ">
									<div className="space-y-2 ">
										<Label
											className="text-gray-500 tracking-wide text-md"
											htmlFor="terms">
											Username or email address *
										</Label>
										<Input
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
											name={"email"}
											type={"email"}
											className=" bg-gray-50 rounded-none   py-5 tracking-wide placeholder:text-[15px] text-gray-600 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500 "
											placeholder=""
										/>

										<ErrorMessage
											component={"p"}
											name="email"
											className="text-red-500 text-sm font-medium"
										/>
									</div>
									<div className="space-y-2 ">
										<Label
											className="text-gray-500 tracking-wide text-md"
											htmlFor="terms">
											Password *
										</Label>
										<Input
											name={"password"}
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.password}
											type={"password"}
											className=" bg-gray-50 rounded-none   py-5 tracking-wide placeholder:text-[15px] text-gray-600 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500"
											placeholder=""
										/>

										<ErrorMessage
											component={"p"}
											name="password"
											className="text-red-500 text-sm font-medium"
										/>
									</div>
								</div>

								<Button
									type="submit"
									className="font-serif w-[15%]   mb-5  rounded-none text-[12.5px]  px-5 hover:bg-stone-800 duration-300  text-center   py-4 bg-black tracking-[2.5px]  font-normal ">
									LOG IN
								</Button>
							</div>

							<div className="space-y-3 mt-5">
								<div className="flex items-center gap-2">
									<input
										onChange={handleCheckboxChange}
										checked={check}
										type="checkbox"
										className="h-3 w-3  rounded-sm focus:ring-0 focus:outline-none  form-checkbox text-blue "
									/>

									<p className="text-[#8f8f8f]  w-[80%]  text-[14px] text-wrap  tracking-wider">
										Remember me
									</p>
								</div>

								<p className="text-gray-700 cursor-pointer hover:text-[#cfac9f] duration-1000 transition-transform font-thin">
									Lost your password ?
								</p>
							</div>
						</Form>
					)}
				</Formik>
			</ContainerComponent>

			<FooterComponent />
		</div>
	);
};

export default ShopAccountPage;
