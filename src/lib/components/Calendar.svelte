<script>
    import { onMount } from "svelte";

    const { calendar } = $props();
    /**
	 * @type {string | null}
	 */
    let dnt = $state("1");

    onMount(() => {
        // TODO: dnt is deprecated in favor of GPC
        dnt = navigator.doNotTrack;
    })
</script>
<div id="calendar" class="h-screen">
    <div class="flex items-center justify-center">
        <h1 class="text-black font-light text-xl md:text-2xl lg:text-3xl pt-4 timeline-view animate-slide-in-top animate-range-entry">Our <strong class="font-bold font-2xl md:font-3xl">Calendar</strong></h1>
    </div>
    {#if dnt === "0"}
    <div class="flex items-center justify-center h-full inset-x-0 px-4 pb-8 rounded">
        <iframe sandbox="allow-scripts" loading="lazy" class="h-4/5 w-full rounded-md timeline-view animate-slide-in-top animate-range-entry" src={calendar} title="our calendar"></iframe>
    </div>
    {:else}
    <div class="flex flex-col items-center justify-center h-full inset-x-0 px-4 pb-8 rounded space-y-4">
        <h2 class="text-center text-lg md:text-xl text-gray-700">Your privacy settings have prevented this calendar from loading automatically.</h2>
        <p class="text-center text-sm text-gray-600">We respect your Do Not Track preference. Click below to load the calendar if you wish.</p>
        <button onclick={() => dnt = "0"} class="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Load Calendar</button>
    </div>
    {/if}
</div>