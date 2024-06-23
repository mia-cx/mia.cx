import { defineConfig } from 'tsup';

export default defineConfig({
	cjsInterop: true,
	clean: true,

	entry: ['./src/**/*.ts'],

	dts: true,

	format: ['cjs', 'esm'],

	// minify: 'terser',
	outDir: 'dist/',

	// splitting: true,
	target: ['esnext'],
	// treeshake: 'recommended'
});
