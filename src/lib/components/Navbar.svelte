<script>
    const { title } = $props();
</script>
<div class="fixed m-1 rounded-lg inset-x-0 z-20 top-0 inset-s-0 border-b sm:border-0 md:border-0 lg:border-0 xl:border-0 bg-black/70 backdrop-blur-md">
    <div class="max-w-8xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
        <a href="#home" class="flex items-center">
            <span class="self-center text-xl lg:text-2xl text-heading text-white font-extrabold uppercase whitespace-nowrap">{title}</span>
        </a>
        <ul class="flex space-x-2 inset-x-0 md:space-x-4 lg:space-x-6 text-white font-mono font-medium text-lg lg:text-xl mx-2">
            <li>
            <a href="#home" class="block py-2 rounded uppercase hover:underline hover:underline-offset-8">Home</a>
            </li>
            <li>
            <a href="#about" class="block py-2 rounded uppercase hover:underline hover:underline-offset-8">About</a>
            </li>
            <li>
            <a href="#contact" class="block py-2 rounded uppercase hover:underline hover:underline-offset-8">Contact</a>
            </li>
        </ul>
    </div>
</div>