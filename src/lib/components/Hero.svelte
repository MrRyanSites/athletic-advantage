<script>
	import heroImg from '$lib/assets/hero-img.jpg';
	const { title, cta, description } = $props();
</script>

<div
	id="home"
	class="relative flex h-screen items-center justify-center bg-cover bg-fixed bg-no-repeat"
	style="background-image: url('{heroImg}');"
>
	<div class="absolute inset-0 bg-black/30"></div>
	<div class="relative z-10">
		<div>
			<h2
				class="px-4 text-xl font-black text-white uppercase text-shadow-black text-shadow-lg md:text-2xl lg:text-3xl"
			>
				Join The
			</h2>
			<h1
				class="animate-fade-in-up px-4 text-6xl font-black text-white uppercase text-shadow-black text-shadow-lg lg:text-7xl"
			>
				{title}
			</h1>
			<h2
				class="px-4 pt-2 text-lg text-white capitalize text-shadow-black text-shadow-lg md:text-xl lg:text-2xl"
			>
				{description}
			</h2>
		</div>
	</div>
	<div class="absolute bottom-1/9 left-5 animate-slide-in-left md:left-1/6">
		<a
			class="hover:cursor rounded-md border bg-black p-3 text-xl font-bold text-white uppercase hover:underline hover:underline-offset-4 md:text-2xl"
			href="#contact">{cta}</a
		>
	</div>
</div>
