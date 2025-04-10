import { createFileRoute } from "@tanstack/react-router"
import { Form } from "react-aria-components"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TextField } from "@/components/ui/text-field"
import { Link } from "@/components/ui/link"

export const Route = createFileRoute("/_auth/register")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<Card>
			<Card.Header title="Register" description="Create an account to start your journey" />
			<Form>
				<Card.Content className="space-y-6">
					<TextField isRequired placeholder="John Doe" name="name" label="Name" />
					<TextField isRequired placeholder="john@domain.com" name="email" label="Email" />
					<TextField isRequired isRevealable type="password" name="password" label="Password" />
				</Card.Content>
				<Card.Footer className="mt-6 justify-between">
					<Link intent="secondary" className="text-sm hover:underline" href="/login">
						Already have an account?
					</Link>
					<Button type="submit">Register</Button>
				</Card.Footer>
			</Form>
		</Card>
	)
}
