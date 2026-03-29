<script>
    const { title } = $props();
    const date = new Date();
</script>
<div class="bg-[#181818] h-full p-2">
    <h2 class="text-xl text-white font-mono">{title} &copy;{date.getFullYear()}</h2>
</div>