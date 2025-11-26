/*! 🌼 daisyUI 5.1.13 */
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const BASE_PATH = process.argv.includes('dev') ? '' : process.env.BASE_PATH;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter({
			precompress: true
		}),
		paths: {
			base: BASE_PATH
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
