"use client"

import { IconDeviceDesktop2, IconMoon, IconSun } from "justd-icons"
import { Button, composeTailwindRenderProps } from "ui"
import { useTheme } from "@/components/theme-provider"

export function ThemeSwitcher({
	shape = "square",
	intent = "outline",
	className,
	...props
}: React.ComponentProps<typeof Button>) {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
		setTheme(nextTheme)
	}

	return (
		<Button
			shape={shape}
			intent={intent}
			size="square-petite"
			className={composeTailwindRenderProps(className, "**:data-[slot=icon]:text-fg")}
			aria-label="Switch theme"
			onPress={toggleTheme}
			{...props}
		>
			{theme === "light" ? <IconSun /> : theme === "dark" ? <IconMoon /> : <IconDeviceDesktop2 />}
		</Button>
	)
}
