/** @format */

import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ReplySessionComponent = ({ setUserData, userData }) => {
	const initailValue = {
		message: "",
		email: "",
		name: "",
		website: "",
	};

	const validationSchema = yup.object({
		email: yup
			.string()
			.required("email is required")
			.email("invalid email format"),
		name: yup
			.string()
			.required("name is required")
			.min(4, "name should be 4 at least"),
		message: yup.string().required("message is required"),
		website: yup.string(),
	});

	const handleSubmit = (value) => {
		setUserData([...userData, value]);
		console.log(value);
	};

	return (
		<div>
			{/* Reply Session */}
			<Formik
				validateOnChange={false}
				validateOnBlur={false}
				validationSchema={validationSchema}
				initialValues={initailValue}
				onSubmit={handleSubmit}>
				{({ isSubmitting, handleChange, handleBlur, values }) => (
					<Form className="w-full relative">
						<p className="h-[65px] z-50  top-20 left-[50%] w-[1px] absolute  duration-500   bg-[#fde7e7] "></p>
						<div className="bg-[#faf7f9] w-full  mt-32  p-9">
							<h1 className=" text-3xl text-gray-800 tracking-wide text-center mx-auto ">
								Leave a Reply
							</h1>
							<p className="text-[#727272]   mb-7  mt-3   text-center  text-md    tracking-wider ">
								Your email address will not be published. Required fields are
								marked *
							</p>

							<div className=" space-y-4 flex flex-col">
								<Input
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.message}
									name={"message"}
									type={"message"}
									className="h-[200px]  tracking-wide placeholder:text-[15px] text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500 pb-36 ps-4"
									placeholder="Your Comment *"
								/>

								<ErrorMessage
									component={"p"}
									name="message"
									className="text-red-500 text-xs font-medium"
								/>

								<div className="flex items-center gap-2">
									<Input
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.name}
										name={"name"}
										type={"name"}
										className="  py-4 tracking-wide placeholder:text-[15px] text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500 "
										placeholder="Your Name *"
									/>

									<ErrorMessage
										component={"p"}
										name="name"
										className="text-red-500 text-xs font-medium"
									/>
									<Input
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
										name={"email"}
										type={"email"}
										className="  py-4 tracking-wide placeholder:text-[15px] text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500 "
										placeholder="Your Email *"
									/>

									<ErrorMessage
										component={"p"}
										name="email"
										className="text-red-500 text-xs font-medium"
									/>
								</div>

								<Input
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.website}
									name={"website"}
									type={"website"}
									className="  py-4 tracking-wide placeholder:text-[15px] text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500 "
									placeholder="Website *"
								/>

								<div className="flex items-center space-x-2">
									<Checkbox
										id="terms"
										className="  focus-visible:ring-blue-500  checked:bg-blue-500   "
									/>
									<label
										htmlFor="terms"
										className="text-sm font-medium  tracking-wide text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
										Save my name, email, and website in this browser for the
										next time I comment.
									</label>
								</div>

								<Button
									type="submit"
									className="font-serif w-[30%]    rounded-none text-sm  px-16 hover:bg-stone-800 duration-300  text-center   py-4 bg-black tracking-[3px] font-normal">
									POST COMMENT
								</Button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ReplySessionComponent;
