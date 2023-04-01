/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: 'https://jsonplaceholder.typicode.com',
	},
	images: {
		domains: ['via.placeholder.com'],
	},
}

module.exports = nextConfig
