import Header from "@/components/header"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Werty() {
	return (
		<>
			<Header />
			<div className="px-6 py-4 pb-20">
				<section className="flex h-full flex-col items-center justify-center pt-20">
					<div className="relative mx-auto flex w-full max-w-4xl flex-col items-center">
						<a
							href="https://github.com/Alexisxde/werty-ui"
							target="_blank"
							rel="noopener noreferrer"
							className="mb-6 inline-flex">
							<span className="relative inline-block overflow-hidden rounded-full p-[1px]">
								<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]"></span>
								<div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-neutral-100 px-3 py-1 text-xs leading-5 font-medium backdrop-blur-xl dark:bg-neutral-900">
									<span className="inline-flex items-center pl-2 text-neutral-900 dark:text-neutral-100">
										Go to GitHub
										<ArrowRight className="size-4 pl-0.5" />
									</span>
								</div>
							</span>
						</a>
						<h2 className="text-center text-4xl font-medium sm:text-6xl dark:text-gray-50">
							UI kit to make beautiful,
							<span className="inline-flex bg-gradient-to-r from-slate-900 via-slate-600 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
								animated interfaces, faster
							</span>
						</h2>
						<p className="text-center text-sm leading-6 text-pretty text-gray-500 md:text-base dark:text-gray-300">
							Beautifully designed motions components. Easy copy-paste.
							Customizable. Open Source. Built for engineers and designers.
						</p>
					</div>
					<div className="flex items-center space-x-4 py-6">
						<Link href="/docs">
							<button className="inline-flex cursor-pointer items-center rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 text-sm text-neutral-100 hover:border-neutral-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200 focus:outline-none">
								Explore Docs
								<ChevronRight className="ml-1.5 h-4 w-4" />
							</button>
						</Link>
					</div>
					<span className="mt-2 text-center text-sm text-neutral-500 dark:text-neutral-400">
						Free updates and new components released regularly.
					</span>
				</section>
			</div>
		</>
	)
}
