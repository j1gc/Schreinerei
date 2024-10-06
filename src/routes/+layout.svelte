<script>
	import Link from '$lib/components/link.svelte';
	import * as Navigator from '$lib/components/navigator/index';
	import Text from '$lib/components/text.svelte';
	import '../app.css';

	const navLinks = [
		{ href: '/', text: 'Startseite' },
		{ href: '/preise', text: 'Unsere Preise' },
		{ href: '/inhalt', text: 'Bilder von unseren Produkten' },
		{ href: '/kontakt', text: 'Kontakt und Impressum' }
	];
</script>

<main class="bg-[#fffff] min-h-screen md:px-[21vw] overflow-scroll max-md:px-4 flex flex-col">
	<header class="flex max-sm:flex-col">
		<div>
			<a class="w-[20px] h-[20px]" href="/" aria-label="Homepage">
				<img src="./img/logo.svg" alt="logo" />
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

	<Navigator.Root class="">
		{#each navLinks as link}
			<Navigator.Item>
				<a href={link.href}>{link.text}</a>
			</Navigator.Item>
		{/each}
	</Navigator.Root>

	<article class=" flex-grow">
		<slot />
	</article>
	<footer class="flex justify-end mt-10">
		<div class="flex flex-col">
			<Link href="/kontakt#Kontakt">Kontakt</Link>
			<Link href="/kontakt">Impressum</Link>
			<Text class="pt-2">{@html '&#xA9;'} 2021 by selfHTML</Text>
		</div>
	</footer>
</main>
