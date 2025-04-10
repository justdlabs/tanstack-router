import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Link } from "@/components/ui/link"
import { IconBrandIntentui } from "@intentui/icons"

export const Route = createFileRoute("/_auth")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="flex min-h-svh items-center justify-center bg-muted/50 p-4">
			<div className="w-full max-w-md">
				<div className="mb-6 flex items-center justify-center">
					<Link href="/" aria-label="Goto homepage">
						<IconBrandIntentui className="size-10" />
					</Link>
				</div>
				<Outlet />
			</div>
		</div>
	)
}
