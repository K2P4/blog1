/** @format */

import React, { useRef, useState } from "react";
import NavComponent from "./Nav.component";
import LatestStyleComponent from "./LatestStyle.component";

const LifeStyleComponent = () => {
	return (
		<div className="  h-[5000px]">
			<img
				className=" w-full zoom-infinite  h-[300px] object-cover mx-auto   "
				src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/h5-rev-img-1.jpg"
				alt=""
			/>

			<div className="w-full">
				<NavComponent />
			</div>

			<LatestStyleComponent />
		</div>
	);
};

export default LifeStyleComponent;
