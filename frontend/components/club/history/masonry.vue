<script setup lang="ts">
	import type {HistoryItem} from '~/utils/history-item.type';

	defineProps<{
		clubName: string,
		clubHistory: HistoryItem[]
	}>();
</script>

<template>
	<section class="max-w-5xl m-auto mt-16">
		<ClubHistoryAddYourOwn />

		<div class="grid grid-cols-3 gap-4">
			<HighlightItem
					v-for="(item, index) in clubHistory" :key="index"
					:url="item.url"
					:image="item.image"
					:label="item.label"
					:title="item.title"
					:description="item.description"
					:show-read-more="item.showReadMore" />
		</div>
	</section>
</template>
