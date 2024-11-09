<script setup lang="ts">

</script>

<template>
	<ClubHistoryCompare />

	<ClubIntro />

	<ClubHistoryMasonry />

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
