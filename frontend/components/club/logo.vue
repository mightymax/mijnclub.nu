<script setup lang="ts">
	withDefaults(defineProps<{
		logoImage?: string
	}>(), {
		logoImage: undefined
	});
</script>

<template>
	<div v-if="logoImage" class="mt-8 w-24 h-24 aspect-square mr-4">
		<img :src="logoImage" alt="Club logo" class="object-contain w-full h-full" />
	</div>

	<button v-else class="mt-8 w-24 h-24 aspect-square mr-4">
		<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000">
			<path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
		</svg>
	</button>
</template>

<style scoped>

</style>
