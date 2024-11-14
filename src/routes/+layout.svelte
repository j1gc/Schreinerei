<script>
	import Link from '$lib/components/link.svelte';
	import * as Navigator from '$lib/components/navigator/index';
	import Text from '$lib/components/text.svelte';
	import { Entity } from '$lib/entities';
	import '../app.css';

	// needed to pass children to the layout
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();

	// Navigation links for the site
	const navLinks = [
		{ href: '/', text: 'Startseite' },
		{ href: '/preise', text: 'Unsere Preise' },
		{ href: '/inhalt', text: 'Bilder von unseren Produkten' },
		{ href: '/kontakt', text: 'Kontakt und Impressum' }
	];
</script>

<!-- inserts elements into the head element-->
<svelte:head>
	<!-- Not needed, SvelteKit should be preloading the logo automatically -->
	<link rel="preload" as="image" href="/img/logo.svg" />
</svelte:head>

<!-- main content of the page -->
<main class="bg-[#fffff] min-h-screen md:px-[21vw] overflow-scroll max-md:px-4 flex flex-col">
	<!-- Anchor for the top of the page. 
	 Svelte Static Adapter is angry when missing-->
	<div id="top"></div>

	<!-- Logo, name and slogan -->
	<header class="flex max-sm:flex-col">
		<div>
			<a href="/" aria-label="Homepage">
				<img class="w-[16rem] h-[10rem]" src="/img/logo.svg" alt="logo" />
			</a>
			<p class="text-3xl font-bold text-red-800">Schreinerei Meier</p>
		</div>
		<div class="">
			<p
				class="sm:ml-10 mt-10 p-2 text-red-800 sm:rotate-[-8deg] border border-red-700 rounded-md max-sm:text-xs"
			>
				ihre Werkstatt für gutes Wohnen!
			</p>
		</div>
	</header>

	<!-- Navigation -->
	<!-- Navigator is a component that wraps the navigation links and is here to register the allready declared routes in the script tag-->
	<Navigator.Root class="">
		{#each navLinks as link}
			<Navigator.Item>
				<a href={link.href} class="block w-full h-full">{link.text}</a>
			</Navigator.Item>
		{/each}
	</Navigator.Root>

	<!-- Content -->
	<article class="flex-grow">
		<!-- New syntax for slots in Svelte 5 -->
		<!-- Inserts children here -->
		{@render children?.()}
	</article>

	<!-- Footer -->
	<footer class="flex justify-end mt-10">
		<div class="flex flex-col">
			<Link href="/kontakt#Kontakt">Kontakt</Link>
			<Link href="/kontakt">Impressum</Link>
			<Text class="pt-2">{@html Entity.Copyright} 2021 by selfHTML</Text>
		</div>
	</footer>
</main>
