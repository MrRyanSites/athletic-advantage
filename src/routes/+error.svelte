<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { config } from '$lib/config';
	import Navbar from '$lib/components/Navbar.svelte';
	import bg from '$lib/assets/bg.svg';
	onMount(() => {
		const main = document.getElementById('main');
		if (main) {
			main.style.backgroundImage = `url("${bg}")`;
			main.style.backgroundPosition = 'bottom';
			main.style.backgroundRepeat = 'no-repeat';
			main.style.backgroundSize = 'cover';
		}
	});
</script>

<nav>
	<Navbar title={config.TITLE} navs={config.ERRORNAV} />
</nav>
<main id="main" class="h-screen">
	{#if page.status === 404}
		<div class="flex h-full animate-pop items-center justify-center animate-duration-200">
			<div class="rounded-sm bg-white p-8 shadow">
				<h1 class="text-5xl font-black md:text-7xl">404: Not Found</h1>
				<h2 class="pt-3 text-2xl">The page you asked for cannot be found :(</h2>
			</div>
		</div>
	{:else}
		<div class="flex h-full animate-pop items-center justify-center animate-duration-200">
			<div class="rounded-sm bg-white p-8 shadow">
				<h1 class="text-5xl font-black md:text-7xl">Woops</h1>
				<h2 class="pt-3 text-2xl">Error: {page.status}. An error occured :(</h2>
			</div>
		</div>
	{/if}
</main>
