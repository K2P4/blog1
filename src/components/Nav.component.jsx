/** @format */

import React from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import ContainerComponent from "./Container.component";
import { useNavigate } from "react-router-dom";

const NavComponent = () => {
	const nav = useNavigate();

	return (
		<div className="   bg-[#fcfcfc]">
			<ContainerComponent>
				<div className="flex items-center justify-between">
					<div className="flex items-center  space-x-6">
						<img
							onClick={() => nav("/")}
							className="  h-10 object-center   w-20 "
							src="https://zoya.qodeinteractive.com/wp-content/uploads/2021/04/h5-logo-img-01.png"
							alt=""
						/>
						<NavigationMenu className=" h-24 ">
							<NavigationMenuList>
								<NavigationMenuItem className="hover:border-b  duration-1000  transition-transform  hover:border-b-black  ">
									<NavigationMenuTrigger className="  font-serif   font-medium  text-gray-700    tracking-[3px] text-xs  ">
										HOME{" "}
									</NavigationMenuTrigger>

									<NavigationMenuContent className="w-full duration-1000">
										<ul className="w-[250px] text-gray-700 space-y-5 h-[200px] p-5 ">
											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Main Home
											</li>

											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Travel Blog
											</li>
											<li className="    group      ">
												<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
												Lifestyle Blog
											</li>
											<li className="    group      ">
												<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												Fashion Blog
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem className="hover:border-b  duration-1000 hover:border-b-black ">
									<NavigationMenuTrigger className="font-serif   font-medium    text-gray-700    tracking-[3px] text-xs  ">
										PAGES{" "}
									</NavigationMenuTrigger>

									<NavigationMenuContent>
										<ul className="w-[200px]  m-auto text-gray-700 space-y-5 h-[150px] p-5 ">
											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												About
											</li>

											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												About Me
											</li>
											<li className="    group      ">
												<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
												Contact
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem className="hover:border-b  duration-1000 hover:border-b-black ">
									<NavigationMenuTrigger className="font-serif   font-medium    text-gray-700    tracking-[3px] text-xs   ">
										BLOG{" "}
									</NavigationMenuTrigger>

									<NavigationMenuContent>
										<ul className=" w-[4000px] h-[500px]   m-auto text-gray-700 space-y-5  p-5 ">
											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												About
											</li>

											<li className="    group     ">
												<span className=" group-hover:border-s-[#ED9455]  duration-500 group-hover:ms-3   group-hover:me-2 group-hover:border-s "></span>
												About Me
											</li>
											<li className="    group      ">
												<span className=" group-hover:border-s-[#ED9455] duration-500 group-hover:ms-3  group-hover:me-2 group-hover:border-s "></span>
												Contact
											</li>
										</ul>
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem className="hover:border-b  duration-1000 hover:border-b-black ">
									<NavigationMenuTrigger className="font-serif   font-medium    text-gray-700    tracking-[3px] text-xs  ">
										SHOP{" "}
									</NavigationMenuTrigger>

									<NavigationMenuContent>
										<NavigationMenuLink>JPASdas</NavigationMenuLink>
									</NavigationMenuContent>
								</NavigationMenuItem>

								<NavigationMenuItem className="hover:border-b  duration-1000 hover:border-b-black ">
									<NavigationMenuTrigger className="font-serif   font-medium    text-gray-700    tracking-[3px] text-xs  ">
										LANDING{" "}
									</NavigationMenuTrigger>

									<NavigationMenuContent>
										<NavigationMenuLink>Link</NavigationMenuLink>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>

					<div className=" font-serif flex items-center gap-2">
						<p className="font-serif font-normal   text-gray-700 tracking-[3px] text-sm  ">
							SEARCH
						</p>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 text-gray-700 h-6">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
							/>
						</svg>
					</div>
				</div>
			</ContainerComponent>
		</div>
	);
};

export default NavComponent;
