<script setup lang="ts">
	const isLoaded = ref(false)
	const center = ref()
	const maps = ref()

	const mapOptions: google.maps.MapOptions = {
		zoom: 8,
		center: {lat: 52.377956, lng: 4.897070},
		mapId: 'a2179001959105',
		disableDefaultUI: true
	}

	const query = ref({
		lat: 52.377956,
		lng: 4.897070
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
	<div class="not-prose h-[660px] overflow-hidden">
		<div class="w-full">
			<ScriptGoogleMaps
					ref="maps"
					:center="query"
					:markers="markers"
					:map-options="mapOptions"
					api-key="AIzaSyDSXSomToixQF1H2aYa0JE8Kg_8eKXd7y8"
					class="group !w-full !h-1/3"
					above-the-fold
					@ready="handleReady"
			/>
		</div>
	</div>
</template>
