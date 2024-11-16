/** @format */

import React from "react";
import { useGetDateCollectionsQuery } from "../service/endpoints/BlogEndpints";
import { useNavigate } from "react-router-dom";

const ArchiveComponent = () => {
	const { data } = useGetDateCollectionsQuery();
	const nav = useNavigate();

	const transferData = (dateData) => {
		nav("/archive-date", { state: { dateData: dateData } });
		window.location.reload();
	};

return (
		<div>
			<h1 className=" text-center text-3xl   text-gray-800 font-medium tracking-wide  ">
				Archive
			</h1>

			<div className="w-full space-y-4 mt-5">
				{data?.map((item) => (
					<h1
						onClick={() => transferData(item?.date)}
						key={item?.id}
						className="  text-[#dfb8aa]  font-medium mx-auto cursor-pointer hover:text-[#ebbcac] text-center text-[12px] tracking-[3px] font-serif ">
						{item?.date}
					</h1>
				))}
			</div>
		</div>
	);
};

export default ArchiveComponent;
