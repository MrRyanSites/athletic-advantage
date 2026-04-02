<script>
    import background from '$lib/assets/bg.svg';
	import { onMount } from 'svelte';

    const { aboutMessage,aboutTitle } = $props()

    onMount(() => {
        const about = document.getElementById('about');
        if (about) {
            about.style.backgroundImage = `url("${background}")`;
            about.style.backgroundPosition = 'bottom';
            about.style.backgroundRepeat = 'no-repeat';
            about.style.backgroundSize = 'cover'; 
        }
    })
</script>

<div id="about" class="h-screen">
    <!-- Spacer for nav bar -->
    <div class="h-3/16 md:h-1/9"></div>
    <div class="flex items-center justify-center">
        <h1 class="text-3xl font-bold timeline-view animate-slide-in-right animate-range-entry">{aboutTitle}</h1>
    </div>
    <div class="m-2 p-10 rounded-4xl bg-white/70 h-3/4 w-3/4 mx-auto overflow-auto timeline-view animate-slide-in-left animate-range-[entry_5%_contain_50%] ">
        <p class="text-md md:text-xl font-mono font-light">{aboutMessage}</p>
    </div>
</div>