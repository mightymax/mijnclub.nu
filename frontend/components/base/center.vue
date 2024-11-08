<script setup lang="ts">
	const slots = useSlots();

	withDefaults(defineProps<{
		background?: string
		headline?: string,
		text?: string
	}>(), {
		background: '#ffffff',
		headline: undefined,
		text: undefined,
	});

	const hasSlot = !!slots.callToAction?.().length;
</script>

<template>
	<section :style="{ backgroundColor: background}" class="flex justify-center items-center text-center py-16">
		<div class="max-w-3xl">
			<h3 class="ibm-plex-sans-semibold text-2xl mb-4">{{ headline }}</h3>
			<p :class="{ 'pb-12': hasSlot }" class="text-base ibm-plex-sans-light">{{ text }}</p>
			<slot name="callToAction"></slot>
		</div>
	</section>
</template>

<style scoped>

</style>
