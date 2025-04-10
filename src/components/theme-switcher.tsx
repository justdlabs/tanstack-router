"use client"

import { IconDeviceDesktop2, IconMoon, IconSun } from "@intentui/icons"
import { Button } from "@/components/ui/button"
import { composeTailwindRenderProps } from "@/components/ui/primitive"
import { useTheme } from "@/components/theme-provider"

export function ThemeSwitcher({ shape = "square", intent = "outline", ...props }: React.ComponentProps<typeof Button>) {
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
			aria-label="Switch theme"
			onPress={toggleTheme}
			{...props}
		>
			{theme === "light" ? <IconSun /> : theme === "dark" ? <IconMoon /> : <IconDeviceDesktop2 />}
		</Button>
	)
}
