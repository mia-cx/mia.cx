// const config = require('./index.js');

// const extensions = [
// 	"eslint-plugin-svelte"
// ].map(require.resolve)

// config.extends.push(...extensions);
module.exports = {
	root: true,
	extends: [
		"./index.js",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
	].map(require.resolve),
};

// 	root: true,
// 	// This tells ESLint to load the config from the package `eslint-config-custom`
// 	extends: [
// 		'eslint:recommended',
// 		'@mia-cx/eslint-config',
// 		'plugin:@typescript-eslint/recommended',
// 		'plugin:svelte/recommended',
// 		'prettier',
// 	],
// 	parser: '@typescript-eslint/parser',
// 	plugins: ['@typescript-eslint'],
// 	parserOptions: {
// 		sourceType: 'module',
// 		ecmaVersion: 2020,
// 		extraFileExtensions: ['.svelte'],
// 	},
// 	env: {
// 		browser: true,
// 		es2017: true,
// 		node: true,
// 	},
// 	overrides: [
// 		{
// 			files: ['*.svelte'],
// 			parser: 'svelte-eslint-parser',
// 			parserOptions: {
// 				parser: '@typescript-eslint/parser',
// 			},
// 		},
// 	],
