import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const PORT = 3000;

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		port: PORT,
	},
	preview: {
		port: PORT,
		allowedHosts: ["ryterm.xyz"],
	},
});
