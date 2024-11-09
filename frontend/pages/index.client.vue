<script setup lang="ts">
	definePageMeta({
		layout: 'default'
	})

	const clubs = [
		{
			name: 'AMVJ',
			id: '1'
		},
		{
			name: 'DRC',
			id: '2'
		},
		{
			name: 'WV-HEDW',
			id: '3'
		}
	]
</script>

<template>
	<MapsComponent />

	<BaseCenter
			headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

	<HighlightWrapper>
		<template v-slot:highlights>
			<HighlightItem
					url="/club/1"
					label="WV-HEDW"
					title="De evolutie van het voetbaltenue: Van wollen truien naar high-tech shirts."
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

			<HighlightItem
					url="/club/2"
					label="DRC"
					title="Voetbal zoals het vroeger was"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

			<HighlightItem
					url="/club/3"
					label="AMVJ"
					title="Juichen om trotse koplopers AMVJ en Sporting Martinus"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

		</template>
	</HighlightWrapper>

	<ClubSelectBlock :clubs="clubs" />

	<ClubHistoryCompare />

	<BaseCenter
			:background="'rgba(0, 51, 217, 0.05)'"
			headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum">
		<template v-slot:callToAction>
			<BaseCallToAction button-text="Voeg zelf je eigen clubhistorie toe" button-link="#" />
		</template>
	</BaseCenter>
</template>

<style scoped>

</style>
