import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import stylelint from 'vite-plugin-stylelint';
import { sveltekit } from '@sveltejs/kit/vite';

const linterOptions = {
	chokidar: true,
	fix: true,
	lintInWorker: true,
	lintOnStart: true
};

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/lib/styles/variables.scss" as *;'
			}
		}
	},
	plugins: [sveltekit(), eslint(linterOptions), stylelint(linterOptions)]
});
