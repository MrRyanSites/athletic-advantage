<script>
    import background from '$lib/assets/bg.svg';
	import { onMount } from 'svelte';
    onMount(() => {
        const about = document.getElementById('about');
        about.style.backgroundImage = `url("${background}")`;
        about.style.backgroundPosition = 'bottom';
        about.style.backgroundRepeat = 'no-repeat';
        about.style.backgroundSize = 'cover'; 
    })
</script>

<div id="about" class="h-screen">
</div>