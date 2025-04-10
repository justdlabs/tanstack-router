import * as React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Header } from "@/components/header"

export const Route = createFileRoute("/_app/about")({
	component: AboutComponent,
})

function AboutComponent() {
	return (
		<>
			<Header title={"About"} description={"Learn more about the project"} />
		</>
	)
}
