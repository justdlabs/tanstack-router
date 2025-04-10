import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TextField } from "@/components/ui/text-field"
import { Link } from "@/components/ui/link"
import { Form } from "react-aria-components"

export const Route = createFileRoute("/_auth/login")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<Card>
			<Card.Header title="Login" description="Enter your credentials to access your account" />
			<Form>
				<Card.Content className="space-y-6">
					<TextField isRequired placeholder="John Doe" name="name" label="Name" />
					<TextField isRequired placeholder="john@domain.com" name="email" label="Email" />
				</Card.Content>
				<Card.Footer className="mt-6 justify-between">
					<Link intent="secondary" className="text-sm hover:underline" href="/register">
						Don't have an account?
					</Link>
					<Button type="submit">Login</Button>
				</Card.Footer>
			</Form>
		</Card>
	)
}
