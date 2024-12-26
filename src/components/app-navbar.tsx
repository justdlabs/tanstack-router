"use client"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { IconBrandJustd, IconCirclePerson, IconSearch, IconShoppingBag } from "justd-icons"
import { Button, Navbar, Separator } from "ui"

export function AppNavbar(props: React.ComponentProps<typeof Navbar>) {
	return (
		<Navbar {...props}>
			<Navbar.Nav>
				<Navbar.Logo aria-label="Goto documenation of Navbar" href="/">
					<IconBrandJustd className="size-6 sm:size-5" />
				</Navbar.Logo>
				<Navbar.Section>
					<Navbar.Item href="/">Home</Navbar.Item>
					<Navbar.Item href="/about">About</Navbar.Item>
				</Navbar.Section>

				<Navbar.Section className="ml-auto hidden md:flex">
					<Navbar.Flex className="sm:gap-x-1">
						<Button appearance="plain" size="square-petite" aria-label="Search for products">
							<IconSearch />
						</Button>
						<Button appearance="plain" size="square-petite" aria-label="Your Bag">
							<IconShoppingBag />
						</Button>
						<ThemeSwitcher appearance="plain" />
					</Navbar.Flex>
					<Separator orientation="vertical" className="mr-3 ml-1 h-6" />
					<Navbar.Item href="/login">Login</Navbar.Item>
				</Navbar.Section>
			</Navbar.Nav>

			<Navbar.Compact>
				<Navbar.Flex>
					<Navbar.Trigger className="-ml-2" />
					<Separator orientation="vertical" className="h-6 sm:mx-1" />
					<Navbar.Logo aria-label="Goto documenation of Navbar" href="/">
						<IconBrandJustd className="size-5" />
					</Navbar.Logo>
				</Navbar.Flex>
				<Navbar.Flex>
					<Navbar.Flex>
						<Button appearance="plain" size="square-petite" aria-label="Search for products">
							<IconSearch />
						</Button>
						<Button appearance="plain" size="square-petite" aria-label="Your Bag">
							<IconShoppingBag />
						</Button>
						<ThemeSwitcher appearance="plain" />
					</Navbar.Flex>
					<Separator orientation="vertical" className="mr-3 ml-1 h-6" />
					<Navbar.Item href="/login">
						<IconCirclePerson />
					</Navbar.Item>
				</Navbar.Flex>
			</Navbar.Compact>
		</Navbar>
	)
}
