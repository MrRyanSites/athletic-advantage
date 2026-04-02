<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import About from '$lib/components/About.svelte';
	import Calendar from '$lib/components/Calendar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { config } from '$lib/config';
</script>

<nav>
	<Navbar title={config.TITLE} navs={config.MAINNAV} />
</nav>
<main>
	<Hero title={config.TITLE} cta={config.CTA} description={config.DESCRIPTION} />
	<Calendar calendar={config.GOOGLE_CALENDAR} />
	<About aboutMessage={config.ABOUT_MESSAGE} aboutTitle={config.ABOUT_TITLE} />
	<Contact athleteForm={config.ATHLETE_FORM} tutorForm={config.TUTOR_FORM} mail={config.EMAIL} />
</main>
<footer>
	<Footer title={config.TITLE} instagram={config.INSTAGRAM} email={config.EMAIL} />
</footer>
