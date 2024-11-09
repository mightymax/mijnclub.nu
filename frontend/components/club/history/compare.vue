<script setup lang="ts">
	defineProps<{
		imageLeft?: string,
		imageRight?: string,
		imageLeftYear?: string,
		imageRightYear?: string
	}>()
</script>

<template>
	<section class="w-full h-[720px] overflow-scroll">
		<div class="flex w-[2400px]">
			<div class="relative w-full h-[720px]">
				<img :src="imageLeft" alt="2024-recent" class="w-[1200px] h-[720px]" />
				<div class="absolute top-0 left-0 w-full h-full text-white text-2xl p-8">
					<span class="ibm-plex-sans-medium text-9xl">{{ imageLeftYear }}</span>
				</div>
			</div>
			<div class="relative w-full h-[720px]">
				<img :src="imageRight" alt="1942-historisch" class="w-[1200px] h-[720px]" />
				<div class="absolute top-0 left-0 w-full h-full text-white text-2xl p-8">
					<span class="ibm-plex-sans-medium text-9xl">{{ imageRightYear }}</span>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>

</style>
