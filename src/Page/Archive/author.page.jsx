/** @format */

import React from "react";
import {
	AuthorPostComponent,
	AuthorTwoComponent,
	ContainerComponent,
	FooterComponent,
	NavigateRouteComponent,
	NavigationHomeSectionComponent,
	ProfileComponent,
	Section2Component,
} from "../../components";
import ColumnPage from "../../Page/Columns/Column.page";
import {
	useGetInspiration1Query,
	useGetInspiration2Query,
} from "../../service/endpoints/BlogEndpints";
import InstagramComponent from "../../components/Instagram.component";

const authorPage = () => {
	const { data, isLoading } = useGetInspiration1Query();
	const dataTwo = useGetInspiration2Query();

	return (
		<div>
			<NavigationHomeSectionComponent />
			<NavigateRouteComponent
				Route1={"POSTED BY KARTHERINE BISHOP"}
				path={"/author"}
			/>

			<div className="">
				<ContainerComponent>
					<div className="flex  w-full items-start my-28 gap-8 ">
						<div className="w-[70%]">
							{/* Section One */}
							<ProfileComponent
								img={
									"https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/user-img-01.jpg"
								}
								title={"Katherine Bishop"}
								description={
									"Welcome to my blog where I share my lifestyle tips, healthy snack ideas and my opinions on the latest fashion trends. Keep up with my daily life."
								}
							/>

							<div className=" mt-20">
								<AuthorPostComponent
									dataOne={data}
									dataTwo={dataTwo?.data}
									isLoading={isLoading}
								/>
							</div>
						</div>

						{/* Section Two */}
						<AuthorTwoComponent />
					</div>
				</ContainerComponent>
			</div>

			<InstagramComponent />
			<FooterComponent />
		</div>
	);
};

export default authorPage;
