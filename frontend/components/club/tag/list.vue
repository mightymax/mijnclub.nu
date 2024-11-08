<script setup lang="ts">
	defineProps<{
		clubs: {name: string, id: string}[]
	}>();
</script>

<template>
	<div class="flex flex-wrap justify-center gap-4">
		<ClubTagItem v-for="club in clubs" :key="club.id" :club="club" />
	</div>
</template>

<style scoped>

</style>
