import { cloudflare } from "unenv"
import { defineConfig } from "@tanstack/start/config"

export default defineConfig({
	server: {
		preset: "cloudflare-pages",
		unenv: cloudflare,
	},
})
