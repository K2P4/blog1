/** @format */

import React from "react";
import {
	ContainerComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
} from "../../components";
import { useNavigate } from "react-router-dom";

const ColumnPage = ({ data, isLoading, width, height }) => {
	const nav = useNavigate();

	const handleDetail = (id) => {
		nav(`/detail/${id}`);
	};

	return (
		<div>
			<NavigationHomeSectionComponent />

			<ContainerComponent>
				<div className="flex flex-wrap w-full  justify-center gap-16 mx-auto  my-32">
					{isLoading ? (
						"Loading"
					) : (
						<>
							{data?.map((item) => (
								<div
									onClick={() => handleDetail(item?.id)}
									key={item?.id}
									className={`w-[${width}] h-full  `}>
									<img
										className={`object-cover w-full cursor-pointer  `}
										src={item?.image}
										alt=""
									/>

									<div className=" space-y-3  mt-7 ">
										<div className="flex   duration-1000 group   select-none items-center text-center justify-center   m-auto gap-5 ">
											<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100  bg-pink-200 "></p>
											<h1 className="  tracking-[2px]   group-hover:text-pink-300 text-[#FFD0D0] text-center font-serif text-xs ">
												{item?.type}
											</h1>
											<p className="h-px w-[30px]  duration-500 group-hover:bg-pink-100 bg-pink-200 "></p>
										</div>

										<p className=" cursor-pointer text-2xl  text-wrap  tracking-[2px] text-gray-950 text-center ">
											{item?.name}
										</p>

										<h1 className=" cursor-pointer  font-serif text-xs tracking-[3px] text-gray-400   text-center   ">
											{item?.date}
										</h1>
									</div>
								</div>
							))}
						</>
					)}
				</div>
			</ContainerComponent>

			<FooterComponent />
		</div>
	);
};

export default ColumnPage;
