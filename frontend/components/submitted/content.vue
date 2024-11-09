<script setup lang="ts">

</script>

<template>
	<section class="max-w-5xl m-auto mt-16">
		<div class="section-header flex justify-between items-center mb-16">
			<h1 class="flex-1 ibm-plex-sans-medium text-4xl">Nieuwe toevoegingen</h1>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
			<slot name="submitted" />
		</div>
	</section>
</template>

<style scoped>

</style>
