<script setup lang="ts">
	withDefaults(defineProps<{
		buttonLink?: string,
		buttonText?: string
	}>(), {
		buttonLink: '#',
		buttonText: 'Button'
	});
</script>

<template>
	<a :href="buttonLink" class="inline-flex items-center rounded-full bg-[#0033D9] text-white px-6 py-4">
		<span class="mr-2">{{ buttonText }}</span>
		<BaseArrowRight />
	</a>
</template>

<style scoped>

</style>
