/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Color especial: Barbacha
				barbacha: 'rgb(234, 28, 35)', // Naranja brillante
			  }
		},
	},
	plugins: [],
}
