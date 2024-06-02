/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	ContainerComponent,
	DetailHeaderComponent,
	FooterComponent,
	NavigationHomeSectionComponent,
} from "../components";
import { SlBag } from "react-icons/sl";
import {
	FaLinkedinIn,
	FaTwitter,
	FaFacebookF,
	FaBehance,
	FaVimeoV,
	FaSnapchatGhost,
} from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";

import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import InstagramComponent from "../components/Instagram.component";

const DetailPage = () => {
	const [toggleHome, setHome] = useState(false);
	const [togglePage, setPage] = useState(false);
	const [toggleBlog, setBlog] = useState(false);
	const [toggleShop, setShop] = useState(false);
	const [toggleCart, setCart] = useState(false);

	const [isFixed, setIsFixed] = useState(false);
	const [toggleSearch, setToggleSearch] = useState(false);
	const { id } = useParams();
	const searchRef = useRef();
	const nav = useNavigate();

	const handleSearch = () => {
		setToggleSearch(true);
	};

	const scrollToSection = (id) => {
		const element = document.getElementById(id);

		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};
		const handleMouse = (e) => {
			if (!searchRef.current.contains(e.target)) {
				setToggleSearch(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("mousedown", handleMouse);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.addEventListener("mousedown", handleMouse);
		};
	}, []);

	return (
		<div id="logo" className=" bg-white  h-auto ">
			<NavigationHomeSectionComponent/>
			<ContainerComponent>
				<DetailHeaderComponent />
			</ContainerComponent>

			<InstagramComponent />
			<FooterComponent />

			{isFixed && (
				<motion.div className=" cursor-pointer z-50  fixed  right-8 bottom-20 border border-[#FFD0D0]">
					<motion.svg
						whileHover={{ translateY: -5, duration: 0.7 }}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						onClick={() => scrollToSection("logo")}
						className="w-12 p-3 text-[#FFD0D0] h-12">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m4.5 15.75 7.5-7.5 7.5 7.5"
						/>
					</motion.svg>
				</motion.div>
			)}
		</div>
	);
};

export default DetailPage;
