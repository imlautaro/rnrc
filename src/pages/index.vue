<template>
	<div>
		<h1>Random Number with Random Cat App</h1>
		<p>
			Tap the button to get a random number between 0 and 100 with a
			random cat.
		</p>
		<button @click="run()">Run</button>
		<div v-if="cat != null && number != null">
			<img :src="cat" width="300" />
			<h2>Your random number is {{ number }}</h2>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cat: null,
			number: null,
		}
	},
	head() {
		return {
			title: 'Random Number App',
		}
	},
	methods: {
		run() {
			this.$axios
				.$get('/api/images/search', {
					headers: { 'x-api-key': this.$config.API_KEY },
				})
				.then((res) => {
					this.cat = res[0].url
					this.number = Math.round(Math.random() * 100)
				})
		},
	},
}
</script>
