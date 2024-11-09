<script setup lang="ts">
	defineProps<{
		club: {name: string, id: string}
	}>()
</script>

<template>
	<a :href="'/club/' + club.id" target="_blank" class="flex bg-[#0033D9] py-2 px-4 rounded-full text-sm text-[#FFFFFF]">
		<BaseLogo fill-color="#ffffff" :size="15" :has-margin-right="false" />
		<span>{{ club.name }}</span>
	</a>
</template>

<style scoped>

</style>
