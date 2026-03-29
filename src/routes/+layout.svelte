<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { config } from '$lib/config';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{config.TITLE}</title>
	<meta name="description" content={config.DESCRIPTION}>
</svelte:head>
{@render children()}
