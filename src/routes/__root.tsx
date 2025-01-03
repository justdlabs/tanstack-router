import { Providers } from "@/components/providers"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import * as React from "react"

export const Route = createRootRoute({
	component: RootComponent,
})

function RootComponent() {
	return (
		<Providers>
			<Outlet />
			{process.env.NODE_ENV === "development" && <TanStackRouterDevtools position="bottom-right" />}
		</Providers>
	)
}
