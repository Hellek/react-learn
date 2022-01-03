const CracoAlias = require('craco-alias')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'tsconfig',
				baseUrl: './src',
				tsConfigPath: './tsconfig.extend.json',
			},
		},
	],
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
	webpack: {
		plugins: {
			add: [
				ProgressBarPlugin(),
			],
		},
	},
}
