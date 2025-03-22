import Link from "next/link"
import GitHubIcon from "./icons/github"
import { WertyUILogo } from "./icons/werty-ui-logo"
import ThemeSwitch from "./theme-switch"

export default function Header() {
	return (
		<header className="relative top-0 z-10 px-6 py-5 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0">
			<div className="mx-auto flex w-full items-center justify-between md:max-w-7xl">
				<a href="/" className="relative flex items-center space-x-2">
					<WertyUILogo className="h-6 w-auto" />
					<div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
						Werty UI
					</div>
					<span className="mb-4 ml-0 rounded-sm bg-zinc-800 px-1.5 py-0.5 text-[10px] leading-none font-medium text-zinc-50 select-none">
						beta
					</span>
				</a>
				<div className="flex items-center space-x-6">
					<nav className="hidden items-center space-x-6 sm:flex">
						<Link
							href="/docs"
							className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100">
							Components
						</Link>
						<Link
							href="/showcase"
							className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100">
							Showcase
						</Link>
					</nav>
					<div className="hidden h-8 w-[0.5px] bg-neutral-200 sm:flex dark:bg-neutral-800" />
					<nav className="flex items-center space-x-2">
						<a
							href="https://github.com/Alexisxde/werty-ui"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex h-9 w-9 items-center justify-center">
							<GitHubIcon className="h-4 w-4 fill-neutral-900 dark:fill-neutral-100" />
						</a>
						<ThemeSwitch />
					</nav>
				</div>
			</div>
		</header>
	)
}
