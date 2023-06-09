module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:all',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:markdown/recommended'
	],
	plugins: ['svelte3', '@typescript-eslint'],
	rules: {
		'array-element-newline': ['error', 'consistent'],
		'capitalized-comments': [
			'warn',
			'always',
			{
				ignoreConsecutiveComments: true,
				ignoreInlineComments: true
			}
		],
		'dot-location': ['error', 'property'],
		'function-call-argument-newline': ['error', 'consistent'],
		'id-length': [
			'error',
			{
				exceptions: ['i']
			}
		],
		'implicit-arrow-linebreak': 'off',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'init-declarations': 'off',
		'max-statements': 'off',
		'multiline-comment-style': ['error', 'separate-lines'],
		'multiline-ternary': ['error', 'never'],
		'no-async-promise-executor': 'off',
		'no-await-in-loop': 'off',
		'no-console': [
			'warn',
			{
				allow: ['error', 'info', 'warn']
			}
		],
		'no-invalid-this': 'off',
		'no-magic-numbers': [
			'error',
			{
				ignore: [-1, 0, 1, 10, 100]
			}
		],
		'no-new': 'off',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'no-return-await': 'off',
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true
			}
		],
		'no-ternary': 'off',
		'no-underscore-dangle': 'off',
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true
			}
		],
		'one-var': ['error', 'never'],
		'padded-blocks': ['error', 'never'],
		'prefer-destructuring': 'off',
		'prefer-named-capture-group': 'off',
		'quote-props': ['error', 'as-needed'],
		'require-atomic-updates': 'off',
		'require-unicode-regexp': 'off',
		semi: ['error', 'always'],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				asyncArrow: 'always',
				named: 'never'
			}
		]
	},
	ignorePatterns: ['*.cjs'],
	overrides: [
		{ files: ['*.svelte'], processor: 'svelte3/svelte3' },
		{
			files: '**/*.md',
			processor: 'markdown/markdown'
		},
		{
			files: '**/*.md/*.js',
			rules: {
				'import/no-unresolved': 'off'
			}
		}
	],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
