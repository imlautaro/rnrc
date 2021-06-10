export default {
	axios: {
		proxy: true,
	},
	modules: ['@nuxtjs/axios'],
	proxy: {
		'/api/': {
			target: 'https://api.thecatapi.com/v1',
			pathRewrite: { '^/api/': '' },
		},
	},
	publicRuntimeConfig: {
		API_KEY: process.env.API_KEY,
	},
	srcDir: 'src',
	target: 'static',
}
