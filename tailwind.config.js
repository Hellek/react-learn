// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		colors: {
			transparent: colors.transparent,
			white: colors.white,
			blue: {
				400: colors.blue['400'],
				500: colors.blue['500'],
			},
			gray: {
				100: colors.gray['100'],
				600: colors.gray['600'],
				800: colors.gray['800'],
				900: colors.gray['900'],
				code: '#1a202c',
			},
			green: {
				code: '#48bb78',
				'code-light': '#0c344b',
			},
		},
		extend: {
			fontSize: {
				10: '10px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
