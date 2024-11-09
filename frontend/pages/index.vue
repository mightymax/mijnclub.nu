<script setup lang="ts">
	import {replaceFullSizeImageWithNewSize} from '~/utils/image.util';

	definePageMeta({
		layout: 'default'
	});

	const imageEndpoint = 'https://sparql.mijnclub.nu';
	const errorLoadingDate = ref(false);
	const headerImage1: Ref<string> = ref('');
	const headerImage2: Ref<string> = ref('');
	const headerImage1Year: Ref<string> = ref('');
	const headerImage2Year: Ref<string> = ref('');
	const headerImageQuery = `
		PREFIX sdo: <https://schema.org/>
		SELECT ?source ?iiif_image ?text ?year WHERE {
		  ?club sdo:subjectOf ?reportage .
		  ?source a sdo:Photograph ;
		        sdo:isPartOf ?reportage ;
		        sdo:image/sdo:contentUrl ?iiif_image .
		  ?reportage sdo:name ?text ;
		             sdo:dateCreated ?date .
		  BIND (YEAR(?date) AS ?year)
		} order by RAND() limit 2
	`
	const {data: headerImages} = await useFetch(imageEndpoint, {
		method: 'GET',
		params: {
			query: headerImageQuery,
		},
		headers: {
			Accept: 'application/sparql-results+json',
		},
	});

	// @ts-ignore
	const sortedHeaderImages = headerImages.value.results.bindings.sort((a, b) => parseInt(b.year.value) - parseInt(a.year.value));
	// @ts-ignore
	headerImage1.value = errorLoadingDate.value ? undefined : sortedHeaderImages[0].iiif_image.value;
	headerImage1Year.value = errorLoadingDate.value ? undefined : sortedHeaderImages[0].year.value;
	// @ts-ignore
	headerImage2.value = errorLoadingDate.value ? undefined : sortedHeaderImages[1].iiif_image.value;
	headerImage2Year.value = errorLoadingDate.value ? undefined : sortedHeaderImages[1].year.value

	const clubs = [
		{
			name: 'HFC Haarlem (Haarlemsche Football Club)',
			id: '3767'
		},
		{
			name: 'SLTO (Amsterdam)',
			id: '3700'
		},
		{
			name: 'Flinta Football',
			id: 'flinta-football'
		}
	]
</script>

<template>
	<MapsComponent />

	<BaseCenter
			headline="Het digitale hart van jouw clubleven."
			text="Mijnclub.nu is je eigen hoekje op het internet waar je clubliefde kan delen met je clubgenoten." />

	<HighlightWrapper>
		<template v-slot:highlights>
			<HighlightItem
					url="/club/1"
					label="HFC Haarlem (Haarlemsche Football Club)"
					title="De evolutie van het voetbaltenue: Van wollen truien naar high-tech shirts."
					description="Ga mee op reis door de evolutie van het tenue" />

			<HighlightItem
					url="/club/2"
					label="SLTO (Amsterdam)"
					title="Voetbal zoals het vroeger was"
					description="Die goede oude tijd" />

			<HighlightItem
					url="/club/3"
					label="Flinta Football"
					title="Juichen om trotse koplopers AMVJ en Sporting Martinus"
					description="Met een hoop blijdschap je team aanmoedigen" />

		</template>
	</HighlightWrapper>

	<ClubSelectBlock :clubs="clubs" />

	<ClubHistoryCompare :image-left="replaceFullSizeImageWithNewSize(headerImage1, 1280)"
	                    :image-right="replaceFullSizeImageWithNewSize(headerImage2, 1280)"
	                    :image-left-year="headerImage1Year"
	                    :image-right-year="headerImage2Year" />

	<BaseCenter
			:background="'rgba(0, 51, 217, 0.05)'"
			headline="Data ligt in jouw handen."
			text="Help mee door jouw verhaal toe te voegen aan je clubpagina. De club, dat ben jij!">
		<template v-slot:callToAction>
			<BaseCallToAction button-text="Voeg zelf je eigen clubhistorie toe" button-link="#" />
		</template>
	</BaseCenter>
</template>

<style scoped>

</style>
