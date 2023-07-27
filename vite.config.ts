import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit(), react()],
	build: {
		outDir: 'public'
	},
	resolve: {
		alias: {
			$cms: path.resolve('./src/cms_requests'),
			$components: path.resolve('./src/components'),
			$services: path.resolve('./src/services'),
			$root: path.resolve('./src'),
			$styles: path.resolve('./src/styles'),
			$data: path.resolve('./src/data'),
			$lib: path.resolve('./src/lib'),
		}
	}
});
