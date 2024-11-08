<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
	useHead({
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} - Mijn Club` : 'Mijn Club';
		}
	})
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

	.ibm-plex-sans-thin {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 100;
		font-style: normal;
	}

	.ibm-plex-sans-extralight {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 200;
		font-style: normal;
	}

	.ibm-plex-sans-light {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 300;
		font-style: normal;
	}

	.ibm-plex-sans-regular {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	.ibm-plex-sans-medium {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 500;
		font-style: normal;
	}

	.ibm-plex-sans-semibold {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 600;
		font-style: normal;
	}

	.ibm-plex-sans-bold {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 700;
		font-style: normal;
	}

	.ibm-plex-sans-thin-italic {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 100;
		font-style: italic;
	}

	.ibm-plex-sans-extralight-italic {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 200;
		font-style: italic;
	}

	.ibm-plex-sans-light-italic {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 300;
		font-style: italic;
	}

	.ibm-plex-sans-regular-italic {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 400;
		font-style: italic;
	}

	.ibm-plex-sans-medium-italic {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 500;
		font-style: italic;
	}

	.ibm-plex-sans-semibold-italic {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 600;
		font-style: italic;
	}

	.ibm-plex-sans-bold-italic {
		font-family: "IBM Plex Sans", sans-serif;
		font-weight: 700;
		font-style: italic;
	}

	.roboto-thin {
		font-family: "Roboto", serif;
		font-weight: 100;
		font-style: normal;
	}

	.roboto-light {
		font-family: "Roboto", serif;
		font-weight: 300;
		font-style: normal;
	}

	.roboto-regular {
		font-family: "Roboto", serif;
		font-weight: 400;
		font-style: normal;
	}

	.roboto-medium {
		font-family: "Roboto", serif;
		font-weight: 500;
		font-style: normal;
	}

	.roboto-bold {
		font-family: "Roboto", serif;
		font-weight: 700;
		font-style: normal;
	}

	.roboto-black {
		font-family: "Roboto", serif;
		font-weight: 900;
		font-style: normal;
	}

	.roboto-thin-italic {
		font-family: "Roboto", serif;
		font-weight: 100;
		font-style: italic;
	}

	.roboto-light-italic {
		font-family: "Roboto", serif;
		font-weight: 300;
		font-style: italic;
	}

	.roboto-regular-italic {
		font-family: "Roboto", serif;
		font-weight: 400;
		font-style: italic;
	}

	.roboto-medium-italic {
		font-family: "Roboto", serif;
		font-weight: 500;
		font-style: italic;
	}

	.roboto-bold-italic {
		font-family: "Roboto", serif;
		font-weight: 700;
		font-style: italic;
	}

	.roboto-black-italic {
		font-family: "Roboto", serif;
		font-weight: 900;
		font-style: italic;
	}
</style>
