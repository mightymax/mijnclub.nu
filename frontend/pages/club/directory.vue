<script setup lang="ts">
	import {useVirtualList} from '@vueuse/core';

	type Club = {
		s: { type: string, value: string },
		name: { type: string, value: string },
	};

	let clubList: Ref<Club[] | null> = ref(null);

	const query = `
        prefix rico: <https://www.ica.org/standards/RiC/ontology#>
		prefix sdo: <https://schema.org/>
		select * where {
		  ?s a sdo:SportsOrganization, rico:CorporateBody ;
		     sdo:name ?name .
		} order by ?name
    `;

	const endpoint = 'https://api.triplydb.com/datasets/mark-lindeman/Nederlandse-Voetbalclubs/sparql';

	const {data: clubs, error} = await useFetch(endpoint, {
		method: 'GET',
		params: {
			query,
		},
		headers: {
			Accept: 'application/sparql-results+json',
		},
	});

	if (error.value) {
		console.error('Error fetching data:', error.value);
	} else {
		// @ts-ignore
		clubList.value = clubs.value.results.bindings;
	}

	const {list, containerProps, wrapperProps} = useVirtualList(clubList.value!, { itemHeight: 30})

	const stripIdFromUri = (uri: string) => uri.split('/').pop()!;
</script>

<template>
	<section class="mt-8 p-6">
		<div v-bind="containerProps" class="max-w-5xl m-auto h-full">
			<div v-bind="wrapperProps">
				<div v-for="item in list" :key="item.index" style="height: 30px">
					<a class="ibm-plex-sans-medium text-[#0033D9] leading-7 border-b-2 border-b-[#0033D9] my-4"
					   :href="`/club/${stripIdFromUri(item.data.s.value)}`">
						{{ item.data.name.value }}
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
</style>
