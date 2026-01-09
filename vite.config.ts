import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const PORT = 3000;

export default defineConfig({
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    server: {
        port: PORT,
    },
    preview: {
        port: PORT,
        allowedHosts: ["ryterm.xyz"],
    },
});
