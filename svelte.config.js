import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true,
			scss: {
				prependData: '@use "src/lib/styles/variables.scss" as *;'
			}
		})
	]
};

export default config;
