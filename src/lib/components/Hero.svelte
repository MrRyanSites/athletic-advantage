<script>
    const { title, cta } = $props();
</script>
<div id="home" class="relative flex items-center justify-center h-screen bg-cover bg-no-repeat bg-[#181818]">
    <div>
        <h2 class="px-4 text-xl md:text-2xl lg:text-3xl text-white uppercase font-black">Join The</h2>
        <h1 class="px-4 text-4xl md:text-5xl lg:text-7xl font-black text-shadow-lg text-shadow-white text-black uppercase">{title}</h1>
    </div>
    <div class="absolute left-5 md:left-1/6 bottom-1/9">
        <a class="text-white text-xl md:text-2xl border font-bold uppercase bg-black p-3 rounded-md hover:cursor hover:underline hover:underline-offset-4" href="#contact">{cta}</a>
    </div>
</div>