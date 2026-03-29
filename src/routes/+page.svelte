<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import About from "$lib/components/About.svelte";
    import Calendar from "$lib/components/Calendar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { config } from "$lib/config";
</script>
<nav>
    <Navbar title={config.TITLE} />
</nav>
<main>
    <Hero title={config.TITLE} cta={config.CTA} />
    <Calendar calendar={config.GOOGLE_CALENDAR} />
    <About />
    <Contact />
</main>
<footer>
    <Footer />
</footer>