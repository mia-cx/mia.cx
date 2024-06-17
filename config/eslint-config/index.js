const { resolve } = require("node:path");

const project = resolve(__dirname, "tsconfig.json");

const config = {
	extends: [
		"@vercel/style-guide/eslint/node",
		"@vercel/style-guide/eslint/browser",
		"@vercel/style-guide/eslint/typescript",
	].map(require.resolve),
	parserOptions: {
		project,
	},
	settings: {
		"import/resolver": {
			typescript: {
				project,
			},
		},
	},
	overrides: [
		{
			files: ["**/test?(s)/**/*.[jt]s?(x)"],
			extends: [].map(require.resolve),
			overrides: [],
		},
	],
};

module.exports = config;
