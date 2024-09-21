<script>
	import Text from '$lib/components/text.svelte';
	import '../app.css';
</script>

<main class="bg-[beige] min-h-screen md:px-[15vw] overflow-scroll">
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

	<nav class="p-5 pl-9">
		<ul class="list-disc">
			<li><a href="/">Startseite</a></li>
			<li><a href="/preise">Unsere Preise</a></li>
			<li><a href="/inhalt">Bilder von unseren Produkten</a></li>
			<li><a href="/kontakt">Kontakt und Impressum</a></li>
		</ul>
	</nav>
	<slot />
	<footer class="flex justify-end">
		<div class="flex flex-col">
			<a href="/kontakt#Kontakt">Kontakt</a>
			<a href="/kontakt">Impressum</a>
			<Text>© 2021 by selfHTML</Text>
		</div>
	</footer>
</main>
