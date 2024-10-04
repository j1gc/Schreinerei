<script>
	import Link from '$lib/components/link.svelte';
	import Text from '$lib/components/text.svelte';
	import '../app.css';
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

	<!--TODO: Refactor into components-->
	<nav class="pt-5 pb-10 flex max-md:justify-center">
		<ul class="space-y-[0.1rem] md:max-w-64 w-full">
			<li class="p-2 bg-red-800 rounded-t-lg text-[lightyellow]">
				<a href="/">Startseite</a>
			</li>
			<li class="p-2 bg-red-800 text-[lightyellow]">
				<a href="/preise">Unsere Preise</a>
			</li>
			<li class="p-2 bg-red-800 text-[lightyellow]">
				<a href="/inhalt">Bilder von unseren Produkten</a>
			</li>
			<li class="p-2 bg-red-800 rounded-b-lg text-[lightyellow]">
				<a href="/kontakt">Kontakt und Impressum</a>
			</li>
		</ul>
	</nav>
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
