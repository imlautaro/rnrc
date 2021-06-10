export default {
	modules: ['@nuxtjs/axios'],
	publicRuntimeConfig: {
		API_KEY: process.env.API_KEY,
	},
	srcDir: 'src',
	target: 'static',
}
