<script setup lang="ts">
	defineProps<{
		clubName: string,
		years: number
	}>()
</script>

<template>
	<section class="bg-amber-100 text-center py-8 emoji-bg">
		<div class="max-w-5xl m-auto">
			🎉 🎉 {{ clubName }} viert het {{ years }} jarige jubileum! 🎉 🎉
		</div>
	</section>
</template>

<style scoped>
	.emoji-bg {
		background-size: 145px 139.2px;
		background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 145 139.2" width="145" height="139.2" style="opacity: 0.1; filter: grayscale(0.3);"><text x="0em" y="1em" font-size="58" transform="rotate(56 36.25 34.8)">👑</text><text x="1.25em" y="2em" font-size="58" transform="rotate(56 108.75 92.8)">🎩</text></svg>');
	}
</style>
