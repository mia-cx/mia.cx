import { defineConfig } from 'tsup';

export default defineConfig({
	cjsInterop: true,
	clean: true,

	entry: ['./src/**/*.ts'],

	experimentalDts: true,
	noExternal: ['cssesc', 'util-deprecate'],

	format: ['esm', 'cjs'],

	minify: 'terser',
	outDir: 'dist/',

	splitting: true,
	target: ['es2022'],
	treeshake: 'recommended'
});
