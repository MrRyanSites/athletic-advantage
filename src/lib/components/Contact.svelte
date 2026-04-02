<script>
    import { onMount } from "svelte";
    import bg from "$lib/assets/bg-about.svg";
    const { athleteForm, tutorForm, mail } = $props();

    onMount(() => {
        const contact = document.getElementById('contact');
        if (contact) {
            contact.style.backgroundImage = `url("${bg}")`;
            contact.style.backgroundPosition = 'bottom';
            contact.style.backgroundRepeat = 'no-repeat';
            contact.style.backgroundSize = 'cover'; 
        }
    })
</script>
<div id="contact" class="min-h-screen bg-[#e5e5e5] flex flex-col items-center justify-center py-12">
    <div class="h-8"></div>
    <h2 class="text-2xl md:text-4xl lg:text-5xl py-4 font-light">Email us at <strong>{mail}</strong> or:</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl p-4">
        <div class="border-3 border-gray-300 rounded-2xl shadow-lg bg-white p-8 flex flex-col items-start timeline-view animate-slide-up-fade animate-range-[entry_5%_contain_75%] transition delay-100 duration-300 ease-in-out hover:shadow-xl hover:border-gray-50">
            <div class="bg-gray-200 p-2 my-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#181818"><path d="M481.33-481.33ZM368-190.67l-178-178Q183.67-328 185.5-278t9.17 80q27 7.67 79.83 10.67t93.5-3.34Zm81.33-12.66q61-12.34 113-39 52-26.67 90.39-65.05 37.28-37.29 63.61-87.79 26.34-50.5 40.34-114.83L510-756.67q-61 14-112.67 40.5Q345.67-689.67 308-652t-63.5 89.5q-25.83 51.83-41.17 113.17l246 246Zm-72-127.34-46.66-46.66 252-252 46.66 46.66-252 252Zm392.67-260q6.67-41 4.83-91.33-1.83-50.33-9.5-80-27-8-79.83-11t-93.5 3.67l178 178.66ZM300.67-120q-55 0-99-7.83-44-7.84-55-18.52-11-11.65-18.84-55.98Q120-246.67 120-302q0-123 36-228.5T258-702q66-66 171.95-102 105.95-36 229.38-36 55.34 0 99.17 7.83 43.83 7.84 54.83 18.52 11 11.65 18.84 55.98Q840-713.33 840-657.33 840-535 804-429.5 768-324 702-258q-65.67 65.67-171.67 101.83Q424.33-120 300.67-120Z"/></svg>
            </div>
            <h3 class="text-2xl font-light mb-4">I'm an <strong class="font-bold">Athlete</strong></h3>
            <p class="mb-6">I want academic help to stay eligible and improve my grades.</p>
            <a class="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800" href={athleteForm} rel="external">Apply Now</a>
        </div>
        <div class="border-3 border-gray-300 rounded-2xl shadow-lg bg-white p-8 flex flex-col items-start timeline-view animate-slide-up-fade animate-range-[entry_5%_contain_50%] transition delay-150 duration-300 ease-in-out hover:shadow-xl hover:border-gray-50">
            <div class="bg-gray-200 p-2 my-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#181818"><path d="M479.33-120 192.67-276.67v-240L40-600l439.33-240L920-600v318h-66.67v-280L766-516.67v240L479.33-120Zm0-316 301.34-164-301.34-162-300 162 300 164Zm0 240.33 220-120.66v-162.34L479.33-360l-220-120v163.67l220 120.66ZM480-436Zm-.67 79.33Zm0 0Z"/></svg>
            </div>

            <h3 class="text-2xl font-light mb-4">I'm a <strong class="font-bold">Tutor</strong></h3>
            <p class="mb-6">I want to help student-athletes succeed in the classroom.</p>
            <a class="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-900" href={tutorForm} rel="external">Sign Up</a>
        </div>
    </div>
</div>