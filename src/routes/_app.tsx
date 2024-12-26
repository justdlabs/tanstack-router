import { createFileRoute, Outlet } from "@tanstack/react-router"
import { AppNavbar } from "@/components/app-navbar"

export const Route = createFileRoute("/_app")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<>
			<AppNavbar />
			<Outlet />
		</>
	)
}
