// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: {enabled: true},
	modules: [
		'@nuxt/scripts',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/leaflet',
		'nuxt-mapbox'
	],
	mapbox: {
		accessToken: 'pk.eyJ1IjoicHZhbnphZGVsIiwiYSI6ImNtMzlrMHJ6bzAxZHMycXF5amUyZzdmc2sifQ.kNdsxWppwlXEUiYcOARYMg'
	}
})
