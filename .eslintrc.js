module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es2021: true,
	},
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
		'airbnb',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: [
		'react',
		'@typescript-eslint',
		'simple-import-sort',
	],
	rules: {
		'max-len': ['warn', { code: 120, ignoreComments: true, ignoreTemplateLiterals: true }],
		semi: [
			'error',
			'never',
		],
		'arrow-parens': [
			'error',
			'as-needed',
		],
		'no-multiple-empty-lines': [
			'warn',
			{
				max: 1,
				maxBOF: 0,
			},
		],
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					// Style imports
					['^.+\\.less$', '^.+\\.s?css$'],
					// react related packages, other packages
					['^react', '(\\w-/)*'],
					// Side effect imports, Alias, Relative
					[
						'^\\u0000',
						'^@assets',
						'^@pages',
						'^@store',
						'^@router',
						'^@',
						'^\\.',
					],
				],
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] }],
		'lines-between-class-members': [
			'error',
			'always',
			{ exceptAfterSingleLine: true },
		],
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.tsx'],
			},
		],
		'react/jsx-one-expression-per-line': 'off',
		// unnecessary rules https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/interactive-supports-focus': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'class-methods-use-this': 'off',
		'no-underscore-dangle': ['error', { allowAfterThis: true }],
		camelcase: ['error', { allow: ['given_name', 'family_name', 'product_id', 'vendor_id', 'customer_email'] }],
		'@typescript-eslint/type-annotation-spacing': ['warn',
			{
				after: true,
			},
		],
		'@typescript-eslint/member-delimiter-style': [
			'warn',
			{
				multiline: {
					delimiter: 'none',
				},
				singleline: {
					delimiter: 'comma',
				},
			},
		],
	},
}
