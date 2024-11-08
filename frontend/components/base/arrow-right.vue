<script setup lang="ts">
	withDefaults(defineProps<{
		fillColor?: string
	}>(), {
		fillColor: '#FFFFFF'
	});
</script>

<template>
	<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<mask id="mask0_2028_163" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
			<rect x="0.5" width="24" height="24" :fill="fillColor"/>
		</mask>
		<g mask="url(#mask0_2028_163)">
			<path d="M15.5 19L14.075 17.6L18.675 13H2.5V11H18.675L14.1 6.4L15.5 5L22.5 12L15.5 19Z" :fill="fillColor"/>
		</g>
	</svg>
</template>

<style scoped>

</style>
