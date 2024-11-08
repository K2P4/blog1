/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent = ({ widthL, fontSize, fullWidth }) => {
	const searchRef = useRef();
	const nav = useNavigate();
	const [NavData, setNavData] = useState("");
	const [toggleSearch, setToggleSearch] = useState(false);
	useEffect(() => {
		const handleMouse = (e) => {
			if (!searchRef.current.contains(e.target)) {
				setToggleSearch(false);
			}
		};

		window.addEventListener("mousedown", handleMouse);
		return () => {
			window.addEventListener("mousedown", handleMouse);
		};
	}, []);

	const handleChange = (e) => {
		setNavData(e.target.value);
	};

	const handleSearch = () => {
		setToggleSearch(true);
	};

	const transferSearch = () => {
		nav("/archive-search", { state: { NavData: NavData, status: true } });
	};

	return (
		<div>
			{/* search bar  */}
			<form
				onSubmit={transferSearch}
				ref={searchRef}
				onClick={handleSearch}
				className={` font-serif  ${fullWidth}  cursor-pointer mx-auto  flex items-center  select-none gap-2`}>
				{!toggleSearch && (
					<div
						className={`   mt-5 me-7 border-b animate__fadeOutRight border-b-black animate__animated  duration-1000 `}>
						{" "}
					</div>
				)}

				{toggleSearch ? (
					<input
						type="text"
						value={NavData}
						onChange={handleChange}
						className={` mb-2   bg-transparent  focus:border-0 focus:ring-0 focus:outline-0  w-[100px]  outline-none  animate__animated ring-0 border-0 border-b border-b-black rounded-none  text-sm text-left  animate__slideInRight duration-1000 `}
					/>
				) : (
					<p
						className={`font-serif font-normal duration-700     text-gray-700 tracking-[3px] ${fontSize}  `}>
						SEARCH
					</p>
				)}

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
			</form>
		</div>
	);
};

export default SearchComponent;
