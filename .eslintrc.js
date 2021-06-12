module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: [
		'simple-import-sort',
	],
	rules: {
		//general
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					// Style imports
					['^.+\\.s?css$'],
					// react related packages, other packages
					['^react', '(\\w-/)*'],
					// Side effect imports, Alias, Relative
					[
						'^\\u0000',
						'^@declarations',
						'^@core',
						'^@i18n',
						'^@theme',
						'^@store',
						'^@router',
						'^@icons',
						'^@ui',
						'^@',
						'^\\.',
					],
				],
			},
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'object-curly-newline': [
			'error',
			{
				ObjectPattern: {
					consistent: true,
				},
			},
		],
		'arrow-parens': [
			'error',
			'as-needed',
		],
		indent: [
			'error',
			'tab',
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'eol-last': [
			'warn',
			'always',
		],
		semi: [
			'error',
			'never',
		],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		'no-multiple-empty-lines': [
			'warn',
			{
				max: 2,
			},
		],
		// typescript
		'@typescript-eslint/no-explicit-any': 'off',
		//react
		// 'react/jsx-no-literals': 'off',
		'react/react-in-jsx-scope': 'off',
	},
}
