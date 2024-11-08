<script setup lang="ts">
	defineProps<{
		clubs: {name: string, id: string}[]
	}>();
</script>

<template>
	<section class="mt-8 p-6 bg-[#F1F4FC]">
		<div class="max-w-5xl m-auto text-center">
			<h3 class="ibm-plex-sans-medium text-2xl mb-3">Selecteer een club</h3>
			<ClubTagList :clubs="clubs" />
		</div>
	</section>
</template>

<style scoped>

</style>
