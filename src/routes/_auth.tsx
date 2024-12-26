import { createFileRoute, Outlet } from "@tanstack/react-router"
import { Link } from "ui"
import { IconBrandJustd } from "justd-icons"

export const Route = createFileRoute("/_auth")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="flex min-h-svh items-center justify-center bg-muted/50 p-4">
			<div className="w-full max-w-lg">
				<div className="mb-6 flex items-center justify-center">
					<Link href="/" className="grid size-14 place-content-center rounded-full border bg-fg/5">
						<IconBrandJustd className="size-5" />
					</Link>
				</div>
				<Outlet />
			</div>
		</div>
	)
}
