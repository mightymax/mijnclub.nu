<script setup lang="ts">
	withDefaults(defineProps<{
		menuItemClass?: string
	}>(), {
		menuItemClass: 'text-black'
	});
</script>

<template>
	<div class="text-lg lg:flex-grow">
		<a href="#"
		   :class="menuItemClass"
		   class="ibm-plex-sans-regular block mt-4 lg:inline-block lg:mt-0 hover:underline mr-8">
			Seizoen
		</a>
		<a href="" :class="menuItemClass"
		   class="ibm-plex-sans-regular block mt-4 lg:inline-block lg:mt-0 hover:underline mr-8">
			Competities
		</a>
		<a href="/club/directory" :class="menuItemClass"
		   class="ibm-plex-sans-regular block mt-4 lg:inline-block lg:mt-0 hover:underline mr-8">
			Clubs
		</a>
		<a href="" :class="menuItemClass"
		   class="ibm-plex-sans-regular block mt-4 lg:inline-block lg:mt-0 hover:underline mr-8">
			Tereinen en Stadions
		</a>
		<a href="" :class="menuItemClass"
		   class="ibm-plex-sans-regular block mt-4 lg:inline-block lg:mt-0 hover:underline">
			Over ons
		</a>
	</div>
</template>
