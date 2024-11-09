<script setup lang="ts">
	import {hasAnniversaryToday} from '~/utils/anniversary.util';
	import type {HistoryItem} from '~/utils/history-item.type';
	import {haarlemMockSubmittedContent} from '~/utils/hfc-haarlem.mock';
	import {replaceFullSizeImageWithNewSize} from '~/utils/image.util';

	const errorLoadingDate = ref(false);
	const headerImage1: Ref<string> = ref('');
	const headerImage2: Ref<string> = ref('');
	const headerImage1Year: Ref<string> = ref('');
	const headerImage2Year: Ref<string> = ref('');
	const clubDate: Ref<Date | undefined> = ref(undefined);
	const clubName: Ref<string> = ref('');
	const clubDescription: Ref<string> = ref('');
	const clubPreviousName: Ref<string> = ref('');
	const clubFollowingName: Ref<string> = ref('');
	const clubHistory: Ref<HistoryItem[]> = ref([]);
	const clubSubmittedContent: Ref<any> = ref([]);
	const clubLogo: Ref<string> = ref('');
	const clubShirt: Ref<string> = ref('');

	const route = useRoute();
	const endpoint = 'https://api.triplydb.com/datasets/mark-lindeman/Nederlandse-Voetbalclubs/sparql';
	const imageEndpoint = 'https://sparql.mijnclub.nu';
	const clubUrl = `https://www.mijnclub.nu/club/${route.params.id}`;

	const imageQuery = `
		PREFIX sdo: <https://schema.org/>
		SELECT ?source ?iiif_image ?text WHERE {
		  <https://www.mijnclub.nu/club/3736> sdo:subjectOf ?reportage .
		  ?source a sdo:Photograph ;
		        sdo:isPartOf ?reportage ;
		        sdo:image/sdo:contentUrl ?iiif_image .
		  ?reportage sdo:name ?text .
		} order by RAND() limit 10
	`

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

	const clubIdUrl = route.params.id === 'hfc-haarlem' ? 'https://www.mijnclub.nu/club/3736' : `https://www.mijnclub.nu/club/${route.params.id}`;
	const logoQuery = `
		prefix sdo: <https://schema.org/>
		prefix rico: <https://www.ica.org/standards/RiC/ontology#>
		select ?voetbalarchieven_url ?logo where {
		  <${clubIdUrl}> a rico:CorporateBody ;
		     sdo:url ?voetbalarchieven_url ;
		     OPTIONAL { <${clubIdUrl}> sdo:logo ?logo }
		}
	`

	clubName.value = route.params.id as string;

	const {data: clubImages} = await useFetch(imageEndpoint, {
		method: 'GET',
		params: {
			query: imageQuery,
		},
		headers: {
			Accept: 'application/sparql-results+json',
		},
	});

	const {data: logoImages} = await useFetch(endpoint, {
		method: 'GET',
		params: {
			query: logoQuery,
		},
		headers: {
			Accept: 'application/sparql-results+json',
		},
	});

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
	clubLogo.value = errorLoadingDate.value ? undefined : logoImages.value.results.bindings[0].logo.value;
	// @ts-ignore
	clubShirt.value = errorLoadingDate.value ? undefined : logoImages.value.results.bindings[1].logo.value;
	// @ts-ignore
	headerImage1.value = errorLoadingDate.value ? undefined : sortedHeaderImages[0].iiif_image.value;
	headerImage1Year.value = errorLoadingDate.value ? undefined : sortedHeaderImages[0].year.value;
	// @ts-ignore
	headerImage2.value = errorLoadingDate.value ? undefined : sortedHeaderImages[1].iiif_image.value;
	headerImage2Year.value = errorLoadingDate.value ? undefined : sortedHeaderImages[1].year.value

	// @ts-ignore
	clubImages.value.results.bindings.map((historyItem: any) => {
		clubHistory.value.push({
			url: historyItem.source.value,
			image: replaceFullSizeImageWithNewSize(historyItem.iiif_image.value, 600),
			title: historyItem.text.value,
			showReadMore: false
		});
	})

	clubHistory.value.unshift({
		url: 'https://proxy.archieven.nl/46/4345C8C3765B46258E5104E4A5FF2B03',
		image: '/img/hfc-haarlem/hfc-haarlem-3.jpg',
		showReadMore: true
	})

	if (route.params.id === '3736' || route.params.id === 'hfc-haarlem') {
		clubName.value = 'H.F.C. (Haarlemsche Football Club)';
		clubDate.value = new Date('1889-01-01');
		clubDescription.value = 'Haarlemsche Football Club Haarlem was een Nederlandse voetbalclub. De club werd oorspronkelijk opgericht op 1 oktober 1889 en speelde in blauwe shirts, rode broeken en blauwe kousen. Thuiswedstrijden werden in het Haarlemstadion gespeeld. Haarlem stond van oudsher bekend om zijn jeugdopleiding en scouting. Vanaf de eerste jaren van de 20e eeuw was HFC Haarlem succesvol. In 1902 en in 1912 werd de KNVB beker gewonnen. Maar het grootste succes vond plaats in 1946, toen won de club, mede dankzij de legendarische Kick Smit, het landskampioenschap.'
		clubFollowingName.value = 'Haarlem-Kennemerland';
		clubSubmittedContent.value = haarlemMockSubmittedContent;
	} else if (route.params.id === 'slto-amsterdam' || route.params.id === '3700') {
		clubName.value = 'SLTO (Amsterdam)';
		clubDate.value = new Date('1921-01-01');
		clubDescription.value = 'Haarlemsche Football Club Haarlem was een Nederlandse voetbalclub. De club werd oorspronkelijk opgericht op 1 oktober 1889 en speelde in blauwe shirts, rode broeken en blauwe kousen. Thuiswedstrijden werden in het Haarlemstadion gespeeld. Haarlem stond van oudsher bekend om zijn jeugdopleiding en scouting. Vanaf de eerste jaren van de 20e eeuw was HFC Haarlem succesvol. In 1902 en in 1912 werd de KNVB beker gewonnen. Maar het grootste succes vond plaats in 1946, toen won de club, mede dankzij de legendarische Kick Smit, het landskampioenschap.'
		clubPreviousName.value = 'DES (Door Eendracht Sterk)';
		clubFollowingName.value = 'Neerlandia';
		clubSubmittedContent.value = [];
	} else if (route.params.id === 'flinta-football') {
		clubDate.value = new Date('1921-01-01');
		clubSubmittedContent.value = [];
	} else {
		const query = `
			prefix rico: <https://www.ica.org/standards/RiC/ontology#>
			prefix sdo: <https://schema.org/>
			select * where {
			   <${clubUrl}> a sdo:SportsOrganization, rico:CorporateBody ;
			      sdo:name ?name ;
			      rico:hasBeginningDate/rico:normalizedDateValue ?date .
			} order by ?date
		`

		const {data: dates, error} = await useFetch(endpoint, {
			method: 'GET',
			params: {
				query,
			},
			headers: {
				Accept: 'application/sparql-results+json',
			},
		});

		// @ts-ignore
		if (error.value || !dates.value.results.bindings.length) {
			console.error('Error fetching data:', error.value);
			errorLoadingDate.value = true;
		}

		// @ts-ignore
		clubDate.value = errorLoadingDate.value ? undefined : dates.value.results.bindings[0].date.value;
		// @ts-ignore
		clubName.value = errorLoadingDate.value ? undefined : dates.value.results.bindings[0].name.value;

		if (!clubDate.value || !clubName.value) {
			errorLoadingDate.value = true;
		}
	}

	const {years, hasAnniversary} = hasAnniversaryToday(clubDate.value);
</script>

<template>
	<ClubAnniversaryBanner v-if="!errorLoadingDate && hasAnniversary" :club-name="clubName" :years="years" />

	<ClubHistoryCompare :image-left="replaceFullSizeImageWithNewSize(headerImage1, 1280)"
	                    :image-right="replaceFullSizeImageWithNewSize(headerImage2, 1280)"
	                    :image-left-year="headerImage1Year"
	                    :image-right-year="headerImage2Year" />

	<ClubIntro :club-name="clubName"
	           :club-logo="clubLogo"
	           :club-shirt="clubShirt"
	           :club-description="clubDescription"
	           :following-name="clubFollowingName"
	           :previous-name="clubPreviousName" />

	<ClubHistoryMasonry :club-name="clubName" :club-history="clubHistory" />

	<SubmittedContent>
		<template v-slot:submitted>
			<template v-for="(submittedContent, index) in clubSubmittedContent" :key="index">
				<SubmittedContentItem
						:url="submittedContent.url"
						:image="submittedContent.image"
						:label="submittedContent.label"
						:submit-date="submittedContent.submitDate"
						:city="submittedContent.city"
						:title="submittedContent.title"
						:description="submittedContent.description" />
			</template>
		</template>
	</SubmittedContent>

	<BaseCenter :background="'rgba(0, 51, 217, 0.05)'"
	            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum">
		<template v-slot:callToAction>
			<BaseCallToAction button-text="Voeg zelf je eigen clubhistorie toe" button-link="#" />
		</template>
	</BaseCenter>
</template>

<style scoped>

</style>
