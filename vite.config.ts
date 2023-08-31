import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [sveltekit(), imagetools({force: true})],
	assetsInclude: [
		'**/*.glb',
		'**/*.svg',
		'**/*.png',
		'**/*.jpg',
		'**/*.jpeg',
		'**/*.gif',
		'**/*.webp',
		'**/*.ico',
		'**/*.avif'
	]
});
