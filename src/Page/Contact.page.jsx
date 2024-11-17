/** @format */

import React, { useState } from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
} from "../components";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import InstagramComponent from "../components/Instagram.component";
import { useNavigate } from "react-router-dom";
import { useCreateMutation } from "../service/endpoints/Contact";
import { Loader2 } from "lucide-react";
import { Formik, Form, ErrorMessage } from "formik";

const ContactPage = () => {
	const nav = useNavigate();
	const [CreateFun, { data, isLoading }] = useCreateMutation();
	const [animate, setAnimate] = useState(false);

	const initailValue = {
		message: "",
		email: "",
		name: "",
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
	});

	const navRoute = (path) => {
		nav(path);
	};

	

	const handleSubmit = async (value) => {
		CreateFun(value);
		setTimeout(() => {
			setAnimate(true);
		}, 3000);
	};
	return (
		<div className=" ">
			<NavigationHomeSectionComponent />

			<div className="bg-pink-50 mb-8">
				<ContainerComponent>
					<h1 className="  text-gray-500 text-xs space-x-3 tracking-[2.5px] font-serif py-10 ">
						<span
							onClick={() => navRoute("/HomeSection")}
							className=" cursor-pointer hover:text-gray-700 duration-1000 ">
							HOME
						</span>
						<span>|</span>
						<span
							onClick={() => navRoute("/contact")}
							className=" cursor-pointer hover:text-gray-700 duration-1000 ">
							CONTACT
						</span>
					</h1>
				</ContainerComponent>
			</div>

			<ContainerComponent>
				<div className="flex gap-10 mb-20 items-start">
					<div className="w-[70%]">
						{/* Reply Session */}
						<Formik
							validateOnChange={false}
							validateOnBlur={false}
							validationSchema={validationSchema}
							initialValues={initailValue}
							onSubmit={handleSubmit}>
							{({ isSubmitting, handleChange, handleBlur, values }) => (
								<Form className="w-full relative">
									<p className="h-[65px] z-50  -top-10 left-[50%] w-[1px] absolute  duration-500   bg-[#fde7e7] "></p>
									<div className="bg-[#f8f2f6] w-full  mt-32  p-9">
										<h1 className=" text-3xl text-gray-800 tracking-wide text-center mx-auto ">
											Contact Us!
										</h1>
										<p className="text-[#727272]   mb-7  mt-3   text-center  text-md    tracking-wider ">
											We provide production services for all types of
											advertising
										</p>

										<div className=" space-y-4 flex flex-col">
											<Input
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.message}
												name={"message"}
												type={"message"}
												className="h-[190px]  tracking-wide placeholder:text-[15px] text-gray-500 focus:ring-0 focus:outline-none focus:border-0 focus:placeholder:text-black placeholder:text-gray-500 pb-36 ps-4"
												placeholder="Write a message "
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
													placeholder="Your Name "
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
													placeholder="Your Email "
												/>
												<ErrorMessage
													component={"p"}
													name="email"
													className="text-red-500 text-xs font-medium"
												/>
											</div>
										</div>
									</div>

									<Button
										type="submit"
										className="font-serif w-[25%] mt-4  mb-5  rounded-none text-sm  px-5 hover:bg-stone-800 duration-300  text-center   py-3 bg-black tracking-[3px] font-normal">
										{isLoading ? (
											<Loader2 className=" mr-2 text-white h-5 w-5 animate-spin" />
										) : (
											"CONTACT"
										)}
									</Button>
								</Form>
							)}
						</Formik>

						{animate && (
							<p className="text-lg tracking-wide text-gray-900 text-center border border-green-300 p-3 mx-auto">
								Thank you for your message.It has been sent.
							</p>
						)}
					</div>

					<div className=" w-[25%]  mt-32">
						<iframe
							title="Google Map"
							width="full"
							height="370"
							style={{ border: 0 }}
							loading="lazy"
							allowFullScreen
							referrerPolicy="no-referrer-when-downgrade"
							src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.5543839354787!2d-0.17935342438491114!3d51.613053102980814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3e8b599007%3A0x9020efb93b7fd562!2sLondon%20Studio%20Centre!5e0!3m2!1sen!2smm!4v1718461074218!5m2!1sen!2smm`}></iframe>

						<div
							className=" justify-center flex flex-col items-center m-auto mt-5 space-y-3
                            ">
							<h1 className="text-sm text-gray-600 tracking-wide text-center">
								London Studio
							</h1>

							<div className=" space-y-1 ">
								<p className="text-gray-400 text-xs text-center tracking-wider">
									zoya@qodeinteractive.com
								</p>
								<p className="text-gray-400 text-xs text-center tracking-wider">
									Westminster, London, UK
								</p>
								<p className="text-gray-400 text-xs text-center tracking-wider">
									(00)207-123-1234
								</p>
							</div>
						</div>
					</div>
				</div>
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default ContactPage;
