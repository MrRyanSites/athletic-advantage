<script>
    const { form } = $props();
</script>
<div id="contact" class="h-screen bg-[#e5e5e5]">
    <!-- Spacer for nav bar -->
    <div class="h-3/16 md:h-1/9"></div>
    <div class="flex items-center justify-center w-full px-4 rounded h-15/16 border-t">
        <iframe class="rounded-md h-3/4 w-full" loading="lazy" src={form} title="Contact Form"></iframe>
    </div>
</div>