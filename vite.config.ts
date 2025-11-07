import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const PORT = 3000

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		port: PORT,
		allowedHosts: ["d2fb15995299.ngrok-free.app"]
	},
	preview: {
		port: PORT
	}
});
