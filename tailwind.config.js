/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in-out",
			},
			boxShadow: {
				"black-opacity-50": "0 4px 6px -1px rgba(0, 0, 0, 0.5)",
				"black-opacity-75": "0 4px 6px -1px rgba(0, 0, 0, 0.75)",
			},
			fontFamily: {
				sans: ["Lora"],
				serif: ["Poppins"],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate", "flowbite/plugin")],
};
