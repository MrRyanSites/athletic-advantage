<script>
    import background from '$lib/assets/bg.svg';
	import { onMount } from 'svelte';

    const { aboutMessage,aboutTitle } = $props()

    onMount(() => {
        const about = document.getElementById('about');
        about.style.backgroundImage = `url("${background}")`;
        about.style.backgroundPosition = 'bottom';
        about.style.backgroundRepeat = 'no-repeat';
        about.style.backgroundSize = 'cover'; 
    })
</script>

<div id="about" class="h-screen">
    <!-- Spacer for nav bar -->
    <div class="h-3/16 md:h-1/9"></div>
    <div class="flex items-center justify-center">
        <h1 class="text-3xl font-bold">{aboutTitle}</h1>
    </div>
    <div class="m-2 p-10 rounded-md bg-white/70 h-3/4 w-3/4 mx-auto overflow-auto">
        <p class="text-md md:text-xl font-mono font-light">{aboutMessage}</p>
    </div>
</div>