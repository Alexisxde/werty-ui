import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./globals.css"
import { GeistMono } from "geist/font/mono"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const geistMono = GeistMono

export const metadata: Metadata = {
	title: "Werty UI",
	description:
		"UI kit to make beautiful, animated interfaces, faster. Open-source and customizable."
}

interface Props {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.className} ${geistMono.variable} bg-neutral-100 font-sans antialiased dark:bg-neutral-900`}>
				<ThemeProvider attribute="class">
					<TooltipProvider>
						<div className="isolate min-h-screen">{children}</div>
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
