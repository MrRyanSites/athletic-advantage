<script>
    const { calendar } = $props();
</script>
<div id="calendar" class="h-screen">
    <div class="flex items-center justify-center">
        <h1 class="text-black font-light text-xl md:text-2xl lg:text-3xl pt-4 timeline-view animate-slide-in-top animate-range-entry">Our <strong class="font-bold font-2xl md:font-3xl">Calendar</strong></h1>
    </div>
    <div class="flex items-center justify-center h-full inset-x-0 px-4 pb-8 rounded">
        <iframe loading="lazy" class="h-7/8 w-full rounded-md timeline-view animate-slide-in-top animate-range-entry" src={calendar} title="our calendar"></iframe>
    </div>
</div>