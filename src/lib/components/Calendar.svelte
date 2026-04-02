<script>
	import { onMount } from 'svelte';

	const { calendar } = $props();
	/**
	 * @type {string | null}
	 */
	let dnt = $state('1');

	onMount(() => {
		if (typeof navigator.globalPrivacyControl !== 'undefined') {
			dnt = navigator.globalPrivacyControl ? '1' : '0';
		} else if (typeof navigator.doNotTrack !== 'undefined') {
			dnt = navigator.doNotTrack;
		} else {
			dnt = '0';
		}
	});
</script>

<div id="calendar" class="h-screen">
	<div class="flex items-center justify-center">
		<h1
			class="animate-slide-in-top pt-4 text-xl font-light text-black animate-range-entry timeline-view md:text-2xl lg:text-3xl"
		>
			Our <strong class="font-2xl md:font-3xl font-bold">Calendar</strong>
		</h1>
	</div>
	{#if dnt === '0' || dnt === null}
		<div class="inset-x-0 flex h-full items-center justify-center rounded px-4 pb-8">
			<iframe
				sandbox="allow-scripts"
				loading="lazy"
				class="h-4/5 w-full animate-slide-in-top rounded-md animate-range-entry timeline-view"
				src={calendar}
				title="our calendar"
			></iframe>
		</div>
	{:else}
		<div
			class="inset-x-0 flex h-full flex-col items-center justify-center space-y-4 rounded px-4 pb-8"
		>
			<h2 class="text-center text-lg text-gray-700 md:text-xl">
				Your privacy settings have prevented this widget from loading automatically.
			</h2>
			<p class="text-center text-sm text-gray-600">
				We respect your Do Not Track preference. Click below to load the calendar if you wish.
			</p>
			<button
				onclick={() => (dnt = '0')}
				class="focus:ring-opacity-50 rounded-md bg-teal-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-teal-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				>Load Calendar</button
			>
		</div>
	{/if}
</div>
