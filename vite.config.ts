import { TanStackRouterVite } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import tailwindcss from "@tailwindcss/vite"

import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [TanStackRouterVite({}), react(), tailwindcss(), tsconfigPaths()],
})
