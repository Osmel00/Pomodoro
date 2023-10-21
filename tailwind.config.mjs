/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'main-background':'#1E213F',
				'orange':'#F87070',
				 'light-blue':'#70F3F8',
				 'purple':'#D881F8',
				 'gray-metal':'#D7E0FF',
				 'silver-custom':'#EFF1FA',
				  'dark-blue':'#161932',

			},
			fontFamily:{
				'Kumbh-Sans':['"Kumbh Sans"','sans-serif'],
				'Space-Mono':['"Space Mono"','monospace'],
				'Roboto-Slab':['"Roboto Slab"','serif'],
				
			}
		},
	},
	plugins: [],
}
