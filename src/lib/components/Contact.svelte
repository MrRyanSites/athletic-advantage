<script>
    const { athleteForm, tutorForm, mail } = $props();
</script>
<div id="contact" class="min-h-screen bg-[#e5e5e5] flex flex-col items-center justify-center py-12">
    <div class="h-8"></div>
    <h1 class="text-2xl md:text-4xl lg:text-5xl py-4 font-light">Email us at <strong>{mail}</strong> or:</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl p-4">
        <div class="border-3 border-gray-300 rounded-2xl shadow-lg bg-white p-8 flex flex-col items-start timeline-view animate-slide-up-fade animate-range-[entry_5%_contain_75%] hover:border-blue-300">
            <h3 class="text-2xl font-bold mb-4">I'm an Athlete</h3>
            <p class="mb-6">I want academic help to stay eligible and improve my grades.</p>
            <a class="bg-[#1C3B44] text-white px-4 py-2 rounded" href={athleteForm} rel="external">Apply Now</a>
        </div>
        <div class="border-3 border-gray-300 rounded-2xl shadow-lg bg-white p-8 flex flex-col items-start timeline-view animate-slide-up-fade animate-range-[entry_5%_contain_50%] hover:border-blue-300">
            <h3 class="text-2xl font-bold mb-4">I'm a Tutor</h3>
            <p class="mb-6">I want to help student-athletes succeed in the classroom.</p>
            <a class="bg-[#34535C] text-white px-4 py-2 rounded" href={tutorForm} rel="external">Sign Up</a>
        </div>
    </div>
</div>