<script setup lang="ts">

</script>

<template>
	<section class="max-w-5xl m-auto mt-16">
		<div class="section-header flex justify-between items-center mb-16">
			<h1 class="flex-1 ibm-plex-sans-medium text-4xl">Clubhistorie</h1>
			<a href="#" class="flex items-center">
				<span class="mr-2">Voeg zelf je eigen clubhistorie toe</span>
				<BaseArrowRight fill-color="#000000" />
			</a>
		</div>

		<div class="grid-masonry">
			<HighlightItem
					image="https://placehold.co/600x400"
					label="WV-HEDW"
					title="Amateurvoetbal West I 1970-1971"
					:show-read-more="false" />
			<HighlightItem
					image="https://placehold.co/400x620"
					label="WV-HEDW"
					title="Amateurvoetbal West I 1970-1971"
					:show-read-more="false" />
			<HighlightItem
					image="https://placehold.co/400x400"
					label="WV-HEDW"
					title="Amateurvoetbal West I 1970-1971"
					:show-read-more="false" />
			<HighlightItem
					image="https://placehold.co/400x620"
					label="WV-HEDW"
					title="Amateurvoetbal West I 1970-1971"
					:show-read-more="false" />
			<HighlightItem
					image="https://placehold.co/600x400"
					label="WV-HEDW"
					title="Amateurvoetbal West I 1970-1971"
					:show-read-more="false" />
			<HighlightItem
					image="https://placehold.co/400x400"
					label="WV-HEDW"
					title="Amateurvoetbal West I 1970-1971"
					:show-read-more="false" />
		</div>
	</section>
</template>

<style scoped>
	.grid-masonry {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(3, minmax(120px, 1fr));
		grid-template-rows: masonry;
	}
</style>
