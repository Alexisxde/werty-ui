import { remarkCodeHike } from "@code-hike/mdx"
import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	eslint: {
		// ! Warning: This allows production builds to successfully complete even if your project has ESLint errors.
		ignoreDuringBuilds: true
	}
}

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm, [remarkCodeHike, { theme: "css-variables" }]]
	}
})

export default withMDX(nextConfig)
