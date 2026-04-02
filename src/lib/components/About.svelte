<script>
	import background from '$lib/assets/bg.svg';
	import { onMount } from 'svelte';

	const { aboutMessage, aboutTitle } = $props();

	onMount(() => {
		const about = document.getElementById('about');
		if (about) {
			about.style.backgroundImage = `url("${background}")`;
			about.style.backgroundPosition = 'bottom';
			about.style.backgroundRepeat = 'no-repeat';
			about.style.backgroundSize = 'cover';
		}
	});
</script>

<div id="about" class="h-screen">
	<!-- Spacer for nav bar -->
	<div class="h-3/16 md:h-1/9"></div>
	<div class="flex items-center justify-center">
		<h1 class="animate-slide-in-right text-3xl font-bold animate-range-entry timeline-view">
			{aboutTitle}
		</h1>
	</div>
	<div
		class="m-2 mx-auto h-3/4 w-3/4 animate-slide-in-left overflow-auto rounded-4xl bg-white/70 p-10 animate-range-[entry_5%_contain_50%] timeline-view"
	>
		<p class="text-md font-mono font-light md:text-xl">{aboutMessage}</p>
	</div>
</div>
