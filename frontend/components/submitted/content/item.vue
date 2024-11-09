<script setup lang="ts">
	withDefaults(defineProps<{
		url?: string,
		image?: string,
		label?: string,
		title?: string,
		source?: string,
		submitDate?: string,
		city?: string,
		description?: string,
		readMoreText?: string,
		showReadMore?: boolean
	}>(), {
		url: '#',
		image: 'https://placehold.co/600x400/F1F4FC/FFF?text=Mijn+Club&font=roboto',
		label: undefined,
		title: undefined,
		source: undefined,
		submitDate: undefined,
		city: undefined,
		description: undefined,
		readMoreText: 'Lees meer',
		showReadMore: true
	})

	const isModalOpen = ref(false);
</script>

<template>
	<button @click="isModalOpen = !isModalOpen" class="pb-4 text-left">
		<img class="rounded-md mb-1" alt="image" :src="image" />
		<a v-if="source" :href="source" class="underline">Bron</a>
		<p v-if="submitDate && city">{{ submitDate }} | {{ city }}</p>
		<label v-if="label" class="ibm-plex-sans-medium text-[#0033D9] leading-7 border-b-2 border-b-[#0033D9] mb-4">
			{{ label }}
		</label>
		<h3 v-if="title" class="ibm-plex-sans-medium text-xl mb-2">{{ title }}</h3>
		<p v-if="description" class="ibm-plex-sans-light text-base mb-2">{{ description }}</p>
	</button>

	<UModal v-model="isModalOpen">
		<UCard :ui="{ ring: '' }">
			<template v-slot:header>
				<div class="flex items-center justify-between">
					<h3 class="text-base ibm-plex-sans-semibold leading-6 text-gray-900 dark:text-white"></h3>
					<UButton color="gray"
					         variant="ghost"
					         icon="i-heroicons-x-mark-20-solid"
					         class="-my-1"
					         @click="isModalOpen = false" />
				</div>
			</template>

			<img :src="image" alt="image" class="mb-1" />

			<template v-slot:footer>
				<a v-if="source" :href="source" class="underline">Bron</a>
				<p v-if="submitDate && city">{{ submitDate }} | {{ city }}</p>
				<p class="ibm-plex-sans-light text-base mt-2">{{ description }}</p>
			</template>
		</UCard>
	</UModal>
</template>

<style scoped>

</style>
