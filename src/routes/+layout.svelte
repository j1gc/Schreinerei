<script>
	import '../app.css';
</script>

<main>
	<div class="flex">
		<a class="min-h-[48px] min-w-[80px]" href="/" aria-label="Homepage">
			<img src="./img/logo.svg" alt="logo">
		</a>
		<p class="text-3xl font-bold text-red-700">Schreinerei Meier</p>
		<p class="pl-10 pt-10 -rotate-[8deg]">Ihre Werkstatt für gutes Wohnen!</p>
	</div>

	<nav class="pl-20">
		<ul class="list-disc">
			<li><a href="./">Startseite</a></li>
			<li><a href="./preise">Unsere Preise</a></li>
			<li><a href="./inhalt">Bilder von unseren Produkten</a></li>
			<li><a href="./kontakt">Kontakt und Impressum</a></li>
		</ul>
	</nav>
	<slot />
</main>
