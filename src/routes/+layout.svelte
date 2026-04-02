<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import img from "$lib/assets/hero-img.jpg";
	import { config } from '$lib/config';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{config.TITLE}</title>
	<meta name="description" content={config.DESCRIPTION}>
	<meta name='keywords' content={config.TITLE}>

	<!-- Open Graph -->
	<meta property="og:title" content={config.TITLE} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={config.URL} />
	<meta property="og:image" content={img} />

</svelte:head>
{@render children()}
