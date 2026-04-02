<script>
	import { resolve } from '$app/paths';
	const { title, navs } = $props();
</script>

<div
	class="fixed inset-x-0 inset-s-0 top-0 z-20 m-1 animate-slide-in-top rounded-lg border-b bg-black/70 backdrop-blur-md sm:border-0 md:border-0 lg:border-0 xl:border-0"
>
	<div class="max-w-8xl mx-auto flex flex-wrap items-center justify-between px-4 py-2">
		<a href={resolve('/#home')} class="flex items-center">
			<span
				class="text-heading self-center text-xl font-extrabold whitespace-nowrap text-white uppercase lg:text-2xl"
				>{title}</span
			>
		</a>
		<ul
			class="inset-x-0 mx-2 flex space-x-2 font-mono text-lg font-medium text-white md:space-x-4 lg:space-x-6 lg:text-xl"
		>
			{#each navs as nav (nav.title)}
				<li>
					<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
					<a
						href={resolve(nav.path) + nav.id}
						class="block rounded py-2 uppercase hover:underline hover:underline-offset-8"
						>{nav.title}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
