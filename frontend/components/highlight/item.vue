<script setup lang="ts">
	withDefaults(defineProps<{
		url?: string,
		image?: string,
		label?: string,
		title?: string,
		description?: string,
		readMoreText?: string,
		showReadMore?: boolean
	}>(), {
		url: '#',
		image: 'https://placehold.co/600x400',
		label: undefined,
		title: undefined,
		description: undefined,
		readMoreText: 'Lees meer',
		showReadMore: true
	})
</script>

<template>
	<div class="pb-4">
		<a :href="url">
			<img class="rounded-md mb-1" alt="image" :src="image" />
		</a>
		<label class="ibm-plex-sans-medium text-[#0033D9] leading-7 border-b-2 border-b-[#0033D9]">{{ label }}</label>
		<h3 class="ibm-plex-sans-medium text-xl my-2">{{ title }}</h3>
		<p class="ibm-plex-sans-light text-base mb-2">{{ description }}</p>
		<a v-if="showReadMore" :href="url" class="flex items-center">
			<span class="mr-2">{{ readMoreText }}</span>
			<BaseArrowRight fill-color="#000000" />
		</a>
	</div>
</template>

<style scoped>

</style>
