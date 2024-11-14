<script>
	import Heading from '$lib/components/heading.svelte';
	import PageTitle from '$lib/components/pageTitle.svelte';
	import Text from '$lib/components/text.svelte';
	import { Entity } from '$lib/entities';

	const products = [
		{ src: 'img/cabinet.svg', alt: 'Kommode' },
		{ src: 'img/dresser.svg', alt: 'Kommode mit Schubladen' },
		{ src: 'img/filing-cabinet.svg', alt: 'Aktenschrank' },
		{ src: 'img/table.svg', alt: 'Tisch' },
		{ src: 'img/cupboard.svg', alt: 'Kleiderschrank' },
		{ src: 'img/chair.svg', alt: 'Schaukelstuhl' },
		{ src: 'img/desk.svg', alt: 'Schreibtisch' }
	];
</script>

<PageTitle>Unsere Produkte</PageTitle>
<Text class="py-8"
	>Hier sehen Sie einen {@html Entity.Ü}berblick {@html Entity.ü}ber unsere Angebote.</Text
>

<div class="flex">
	<div class="sm:columns-4 columns-2 space-y-4">
		{#each products as { src, alt }}
			<article>
				<figure>
					<img class="rounded-lg p-2 lg:w-[12rem] lg:h-[12rem] bg-red-800" {src} {alt} />
				</figure>
			</article>
		{/each}
	</div>
</div>

<div class="pt-11">
	<Heading>Unser Meister am Werk!</Heading>
	<div class="pt-11">
		<video class="rounded-2xl" width="640" height="480" controls>
			<source src="/video/carpentry.mp4" type="video/mp4" />
			<track kind="captions" src="/video/captions.vtt" srclang="de" label="Deutsch" />
			Dieser Film zeigt eine Szene aus unserer Schreinerei.<br />
			Ihr Browser kann dieses Video nicht wiedergeben. Sie können es unter
			<a href="#top">Link-Addresse</a> abrufen.
		</video>
	</div>
</div>
