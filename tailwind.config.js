/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
			fontFamily: {
				inter: ['Inter', 'ui-serif'],
			},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
				primary: "#E35509",
				secondary: "#C5571D",
				tertiary: "#BD6334",
				text: {
					100: "#E8E8E8",
					200: "#C7C7C7",
					500: "#B7B7B7",
				},
				background: {
					600: "#494949",
					800: "#303030",
					850: "#212121",
					900: "#1D1D1D",
				},
				accent: {
					green: '#40B659',
					red: '#B64040'
				}
			}
  	}
  },
  plugins: [require("tailwindcss-animate"), require('tailwind-scrollbar')],
}

