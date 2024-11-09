<script setup lang="ts">
	const isOpen = ref(false);
</script>

<template>
	<div class="section-header flex justify-between items-center mb-16">
		<h1 class="flex-1 ibm-plex-sans-medium text-4xl">Clubhistorie</h1>
		<button @click="isOpen = !isOpen" class="flex items-center">
			<span class="mr-2">Voeg zelf je eigen clubhistorie toe</span>
			<BaseArrowRight fill-color="#000000" />
		</button>
	</div>

	<UModal v-model="isOpen">
		<WebAnnotationsAdd />
	</UModal>
</template>

<style scoped>

</style>
