import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"
import { Header } from "@/components/header"

export const Route = createFileRoute("/_app/")({
	component: HomeComponent,
})

function HomeComponent() {
	return (
		<div>
			<Header
				title="Intent UI Starter Kit"
				description="Intent UI Tanstack Router Starter Kit with Tailwind CSS, TypeScript, React, React Aria Components, Intent UI Components, Motion, and more."
			/>
			<Resources />
		</div>
	)
}

export function Resources() {
	return (
		<Container>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [&_.grid-cell]:relative [&_a]:absolute [&_a]:inset-0 [&_a]:size-full [&_a]:cursor-pointer *:[.relative]:*:data-[slot=card]:h-32">
				<div className="relative">
					<a target="_blank" href="https://intentui.com" aria-label="Intent UI" rel="noreferrer" />
					<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/50">
						<Card.Header>
							<Card.Title>Intent UI</Card.Title>
							<Card.Description>
								Intent UI is a chill set of React components, built on top of React Aria Components, all
								about keeping the web accessible.
							</Card.Description>
						</Card.Header>
					</Card>
				</div>
				<div className="relative">
					<a target="_blank" href="https://intentui.com/colors" aria-label="Colors" rel="noreferrer" />
					<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/50">
						<Card.Header>
							<Card.Title>Colors</Card.Title>
							<Card.Description>
								Get started with a variety of color palettes, including tailwind colors in amount of
								formats.
							</Card.Description>
						</Card.Header>
					</Card>
				</div>
				<div className="relative">
					<a target="_blank" href="https://intentui.com/themes" aria-label="Themes" rel="noreferrer" />
					<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/50">
						<Card.Header>
							<Card.Title>Themes</Card.Title>
							<Card.Description>
								Customize your project with a variety of themes, including light, dark, and system
								modes.
							</Card.Description>
						</Card.Header>
					</Card>
				</div>
				<div className="relative">
					<a target="_blank" href="https://intentui.com/icons" aria-label="Icons" rel="noreferrer" />
					<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/50">
						<Card.Header>
							<Card.Title>Icons</Card.Title>
							<Card.Description>
								A library of beautifully crafted react icons, perfect for enhancing the visual appeal
								and user experience of your web applications.
							</Card.Description>
						</Card.Header>
					</Card>
				</div>
				<div className="relative">
					<a target="_blank" href="https://blocks.intentui.com" aria-label="Templates" rel="noreferrer" />
					<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/50">
						<Card.Header>
							<Card.Title>Templates</Card.Title>
							<Card.Description>
								Explore a variety of templates build with Intent UI, and Next.js, Tailwind CSS, and
								more.
							</Card.Description>
						</Card.Header>
					</Card>
				</div>
			</div>
		</Container>
	)
}
