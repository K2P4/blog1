/** @format */

import React from "react";

const UserCommentComponent = ({ userData }) => {
	
	return (
		<div>
			<div className="">
				<div className="w-full flex items-center p-9 bg-[#faf7f9] gap-7 rounded-sm">
					<img
						className=" rounded-full  h-36 w-36 object-cover "
						src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/user-img-1-150x150.jpg"
						alt=""
					/>

					<div className=" w-full space-y-2">
						<h1 className=" cursor-pointer select-none text-left text-xl  w-[90%] text-gray-800  tracking-wide">
							Nicole Cunningham
						</h1>
						<p className="text-[#727272]     text-left  text-md    tracking-wide leading-[30px]">
							Verterem tacimates et vel, no duo reque vitae convenire. In sumo
							quot minimum has. At blandit tacimates sadipscing usu.
						</p>
					</div>
				</div>

				{userData?.length >= 0 &&
					userData?.map((user) => (
						<div className="w-full flex items-center p-9 bg-[#faf7f9] gap-7 rounded-sm">
							<img
								className=" rounded-full  h-36 w-36 object-cover "
								src="https://secure.gravatar.com/avatar/00834863e2fe5241473b9748173769c2?s=90&d=mm&r=g"
								alt=""
							/>

							<div className=" w-full space-y-2">
								<h1 className=" cursor-pointer select-none text-left text-xl  w-[90%] text-gray-800  tracking-wide">
									{user.name}
								</h1>
								<p className="text-[#727272]     text-left  text-md    tracking-wide leading-[30px]">
									{user.message}
								</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default UserCommentComponent;
