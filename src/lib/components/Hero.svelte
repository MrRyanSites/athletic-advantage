<script>
    import heroImg from "$lib/assets/hero-img.jpg"
    const { title, cta, description } = $props();
</script>
<div id="home" class="relative flex items-center justify-center h-screen bg-cover bg-no-repeat" style="background-image: url('{heroImg}');">
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="relative z-10">
        <div>
            <h2 class="px-4 text-xl md:text-2xl lg:text-3xl text-white text-shadow-black/50 text-shadow-lg uppercase font-black">Join The</h2>
            <h1 class="px-4 text-6xl lg:text-7xl font-black text-shadow-lg text-shadow-white text-black uppercase">{title}</h1>
            <h2 class="px-4 pt-2 text-lg md:text-xl lg:text-2xl text-white text-shadow-lg text-shadow-black/50 capitalize">{description}</h2>
        </div>
    </div>
    <div class="absolute left-5 md:left-1/6 bottom-1/9">
        <a class="text-white text-xl md:text-2xl border font-bold uppercase bg-black p-3 rounded-md hover:cursor hover:underline hover:underline-offset-4" href="#contact">{cta}</a>
    </div>
</div>