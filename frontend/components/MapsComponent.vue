<script setup lang="ts">
	type MarkerInfo = {
		latitude: number;
		longitude: number;
		placename: string;
	};

	type LocationResults = {
		bindings: MarkerInfo[]
	}

	type LocationResponse = {
		head: { vars: { [key: string]: string } },
		results: LocationResults
	}

	const getRandomMarkerImage = () => {
		const images = [
			'/mark_green.png',
			'/mark_red.png',
			'/mark_blue.png'
		];
		return images[Math.floor(Math.random() * images.length)];
	}

	const markers: Ref<MarkerInfo[]> = ref([]);

	const query = `
		prefix rico: <https://www.ica.org/standards/RiC/ontology#>
		prefix sdo: <https://schema.org/>
		prefix gn: <https://sws.geonames.org/ontology#>
		prefix wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
		select distinct ?placename ?lat ?lon
		where {
		    ?club a sdo:SportsOrganization, rico:CorporateBody ;
		     rico:agentHasOrHadLocation/rico:hasOrHadPlaceName ?placename .
		     {
		     SELECT distinct ?placename
		      WHERE {
		      ?place gn:name ?placename ;
		           gn:featureCode gn:P.PPL ;
		           gn:countryCode "NL" ;
		           wgs84:latitude ?lat ;
		           wgs84:longitude ?lon .
		            }
		     }
		} order by ?placename
	`;

	const endpoint = 'https://api.triplydb.com/datasets/mark-lindeman/Nederlandse-Voetbalclubs/sparql';

	const onMapLoad = async () => {
		// Load or fetch your marker data here
		const locations: LocationResponse = await $fetch(endpoint, {
			method: 'GET',
			params: {
				query,
			},
			headers: {
				Accept: 'application/sparql-results+json',
			},
		});

		markers.value = locations.results.bindings.map((location: any) => {
			return {
				latitude: location.lat.value,
				longitude: location.lon.value,
				placename: location.placename.value
			};
		});
	};
</script>

<template>
	<div class="not-prose h-[660px] overflow-hidden">
		<div class="relative w-full h-[660px]">
			<div class="absolute top-[200px] right-[120px] z-10">
				<div class="bg-white rounded-xl max-w-80 shadow-xl">
					<div class="py-4 px-6">
						<h2 class="ibm-plex-sans-semibold text-xl mb-2">Het digitale hart van jouw voetbalvereniging</h2>
						<p class="ibm-plex-sans-light text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

						<BaseCallToAction />
					</div>
				</div>
			</div>
			<div class="w-full">
				<MapboxMap
						map-id="map"
						class="w-full h-[660px]"
						:options="{
                        style: 'mapbox://styles/pvanzadel/cm39lh7lr000r01pn1yrrczsv',
                        center: [6.197070, 52.377956],
                        zoom: 7
                    }"
						@load="onMapLoad"
				>
					<template v-for="(marker, index) in markers">
						<MapboxDefaultMarker
								:marker-id="`custom-marker-${index}`"
								:lnglat="[marker.longitude, marker.latitude]">
							<template v-slot:marker>
								<img :src="getRandomMarkerImage()" alt="marker" width="7" height="7">
							</template>
						</MapboxDefaultMarker>
					</template>
				</MapboxMap>
			</div>
		</div>
	</div>
</template>
