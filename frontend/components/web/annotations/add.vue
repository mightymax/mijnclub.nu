<script setup lang="ts">
	const {data} = useFetch('http://localhost:3000/annotation', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({
			club: 1,
			media: 123,
			author: 'John Doe',
			content: 'Dit is een test'
		})
	});
</script>

<template>
	<div class="p-6 bg-white rounded-lg shadow-md">
		<form action="#" class="space-y-6">
			<div>
				<label for="file" class="block text-sm font-medium text-gray-700">Bestand uploaden</label>
				<input type="file"
				       id="file"
				       class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
			</div>
			<div>
				<label for="date" class="block text-sm font-medium text-gray-700">Datum</label>
				<input type="date"
				       id="date"
				       class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
			</div>
			<div>
				<label for="place" class="block text-sm font-medium text-gray-700">Plaats</label>
				<input type="text"
				       id="place"
				       class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
			</div>
			<div>
				<label for="club" class="block text-sm font-medium text-gray-700">Club</label>
				<select id="club"
				        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
					<option value="option1">H.F.C. (Haarlemsche Football Club)</option>
					<option value="option2">SLTO (Amsterdam)</option>
					<option value="option3">Flinta Football</option>
				</select>
			</div>
			<div>
				<label for="description" class="block text-sm font-medium text-gray-700">Omschrijving</label>
				<textarea id="description"
				          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
			</div>

			<button type="submit"
			        class="rounded-full bg-blue-600 text-white w-full py-2 px-6 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
				Toevoegen
			</button>
		</form>
	</div>
</template>

<style scoped>

</style>
