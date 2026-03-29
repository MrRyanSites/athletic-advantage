<script>
    const { form } = $props();
</script>
<div id="contact" class="h-screen bg-[#e5e5e5]">
    <!-- Spacer for nav bar -->
    <div class="h-3/16 md:h-1/9"></div>
    <div class="flex items-center justify-center w-full px-4 rounded h-7/8">
        <iframe class="rounded-md h-1/2 md:h-3/4 w-full" src={form} title="Contact Form"></iframe>
    </div>
</div>