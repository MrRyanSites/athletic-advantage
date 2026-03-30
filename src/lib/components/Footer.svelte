<script>
    const { title } = $props();
    const date = new Date();
</script>
<div class="bg-[#181818] h-full p-2 flex justify-between">
    <h2 class="text-xl text-white font-mono">&copy; {date.getFullYear()} <a href="#home" class="hover:underline hover:underline-offset-8">{title}</a></h2>
    <ul>
        <li>thing1</li>
        <li>thing2</li>
    </ul>
</div>