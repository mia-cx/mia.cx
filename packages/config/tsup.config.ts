import { defineConfig } from 'tsup';

export default defineConfig({
	cjsInterop: true,
	clean: true,

	entry: ['./src/**/*.[tj]s'],
	external: ['prettier'],

	// experimentalDts: true,
	dts: true,
	// dts: {
	// 	resolve: true,
	// 	// entry: ['./src/**/*.[tj]s'],
	// },

	format: ['cjs', 'esm'],

	minify: 'terser',
	outDir: 'dist/',

	// splitting: true,
	target: ['esnext'],
	treeshake: 'recommended',

	tsconfig: './tsconfig.json',
});
