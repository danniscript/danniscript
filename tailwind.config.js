/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				test: {
					DEFAULT: 'rgba(255, 0, 0, 0.2)',
					red: 'rgba(255, 0, 0, 0.2)',
					green: 'rgba(0, 255, 0, 0.2)',
					blue: 'rgba(0, 0, 255, 0.2)',
					purple: 'rgba(255, 0, 255, 0.2)'
				}
			}
		}
	},
	plugins: []
}
