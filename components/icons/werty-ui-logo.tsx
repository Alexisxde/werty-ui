import { cn } from "@/lib/utils"
import type { SVGProps } from "react"

export function WertyUILogo(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="101"
			height="46"
			viewBox="0 0 101 46"
			fill="none"
			className={cn("text-zinc-950 dark:text-white", props.className)}
			{...props}>
			<circle cx="30.4576" cy="22.5112" r="10" fill="#57C9CD" />
			<circle cx="50.4576" cy="35.0112" r="10" fill="#55CDBE" />
			<circle cx="10.4576" cy="10.0112" r="10" fill="#58C4DC" />
			<circle cx="90.4576" cy="10.0112" r="10" fill="#58C4DC" />
			<circle cx="70.4576" cy="22.5112" r="10" fill="#57C9CD" />
			<circle cx="50.4576" cy="10.0112" r="10" fill="#54CFB7" />
		</svg>
	)
}
