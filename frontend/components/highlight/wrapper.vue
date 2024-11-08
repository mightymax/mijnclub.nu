<script setup lang="ts">

</script>

<template>
	<section class="max-w-5xl m-auto mt-16">
		<h1 class="ibm-plex-sans-medium text-4xl mb-16">Uitgelicht</h1>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-7 ">
			<slot name="highlights" />
		</div>
	</section>
</template>

<style scoped>

</style>
