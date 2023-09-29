/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Outfit', 'sans-serif']
			},
			colors: {
				white: 'hsl(0, 0%, 100%)',
				lightGray: 'hsl(212, 45%, 89%)',
				grayishBlue: 'hsl(220, 15%, 55%)',
				darkBlue: 'hsl(218, 44%, 22%)'
			}
		},
	},
	plugins: [],
}
