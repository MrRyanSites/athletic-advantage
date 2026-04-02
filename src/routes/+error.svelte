<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { config } from "$lib/config";
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
})

</script>
<nav>
    <Navbar title={config.TITLE} navs={config.ERRORNAV} />
</nav>
<main id="main" class="h-screen">
    {#if page.status === 404}
    <div class="flex h-full justify-center items-center animate-pop animate-duration-200">
        <div class="p-8 bg-white rounded-sm shadow">
            <h1 class="text-5xl md:text-7xl font-black ">404: Not Found</h1>
            <h2 class="text-2xl pt-3">The page you asked for cannot be found :( </h2>
        </div>
    </div>
    {:else}
    <div class="flex h-full justify-center items-center animate-pop animate-duration-200">
        <div class="p-8 bg-white rounded-sm shadow">
            <h1 class="text-5xl md:text-7xl font-black ">Woops</h1>
            <h2 class="text-2xl pt-3">Error: {page.status}. An error occured :( </h2>
        </div>
    </div>

    {/if}
</main>
