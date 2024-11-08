<script setup lang="ts">
	const isLoaded = ref(false)
	const center = ref()
	const maps = ref()

	const query = ref({
		lat: -37.7995487,
		lng: 144.9867841,
	})

	const markers = ref([])

	function handleReady({map}: any) {
		center.value = map.value.getCenter()
		map.value.addListener('center_changed', () => {
			center.value = map.value.getCenter()
		})
		isLoaded.value = true
	}
</script>

<template>
	<div class="not-prose h-1/3">
		<div class="w-full h-1/3">
			<ScriptGoogleMaps
					ref="maps"
					:center="query"
					:markers="markers"
					api-key="AIzaSyDSXSomToixQF1H2aYa0JE8Kg_8eKXd7y8"
					class="group !w-full !h-1/3"
					above-the-fold
					@ready="handleReady"
			/>
		</div>
	</div>
</template>
