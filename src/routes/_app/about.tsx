import * as React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Header } from "@/components/header"
import { Container } from "ui"

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
