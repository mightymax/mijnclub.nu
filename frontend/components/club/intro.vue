<script setup lang="ts">
	defineProps<{
		clubName: string,
		clubDescription: string,
		clubLogo?: string,
		clubShirt?: string,
		previousName?: string,
		followingName?: string
	}>()
</script>

<template>
	<section class="max-w-5xl m-auto mt-16">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div>
				<h1 class="ibm-plex-sans-medium text-4xl">{{ clubName }}</h1>
				<div v-if="previousName" class="text-[#0033D9] underline">
					<a :href="`/club/${previousName.toLowerCase()}`">{{ previousName }}</a>
				</div>
				<div v-if="followingName" class="text-[#0033D9] underline">
					<a :href="`/club/${followingName.toLowerCase()}`">{{ followingName }}</a>
				</div>

				<div class="flex flex-row">
					<ClubLogo :logo-image="clubLogo" />
					<ClubShirt :shirt-image="clubShirt" />
				</div>
			</div>

			<div>
				<p class="ibm-plex-sans-light text-base">
					{{ clubDescription }}
				</p>
			</div>
		</div>
	</section>
</template>

<style scoped>

</style>
