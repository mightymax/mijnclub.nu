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

		<masonry-wall :items="clubHistory" :ssr-columns="1" :column-width="300" :gap="16">
			<template #default="{ item }">
				<HighlightItem
						:url="item.url"
						:image="item.image"
						:label="item.label"
						:title="item.title"
						:description="item.description"
						:show-read-more="item.showReadMore" />
			</template>
		</masonry-wall>
	</section>
</template>

<style scoped>

</style>
