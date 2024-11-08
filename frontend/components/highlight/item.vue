<script setup lang="ts">
	withDefaults(defineProps<{
		label?: string,
		title?: string,
		description?: string,
		readMoreText?: string
	}>(), {
		label: undefined,
		title: undefined,
		description: undefined,
		readMoreText: 'Lees meer'
	})
</script>

<template>
	<div class="pb-4">
		<img class="rounded-md mb-1" alt="image" src="https://placehold.co/600x400" />
		<label class="ibm-plex-sans-medium text-[#0033D9] leading-7 border-b-2 border-b-[#0033D9]">{{ label }}</label>
		<h3 class="ibm-plex-sans-medium text-xl my-2">{{ title }}</h3>
		<p class="ibm-plex-sans-light text-base mb-2">{{ description }}</p>
		<a href="#" class="flex items-center">
			<span class="mr-2">{{ readMoreText }}</span>
			<BaseArrowRight fill-color="#000000" />
		</a>
	</div>
</template>

<style scoped>

</style>
