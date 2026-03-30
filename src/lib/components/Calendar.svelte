<script>
    const { calendar, calendarTitle } = $props();
</script>
<div id="calendar" class="h-screen">
    <div class="flex items-center justify-center">
        <h1 class="text-black font-bold text-xl md:text-2xl lg:text-3xl pt-4 timeline-view animate-slide-in-top animate-range-entry">{calendarTitle}</h1>
    </div>
    <div class="flex items-center justify-center h-full inset-x-0 px-4 pb-8 pt-4 rounded">
        <iframe loading="lazy" class="h-full w-full rounded-md" src={calendar} title={calendarTitle}></iframe>
    </div>
</div>