<script>
	import Heading from '$lib/components/heading.svelte';
	import PageTitle from '$lib/components/pageTitle.svelte';
	import Text from '$lib/components/text.svelte';
	import { Entity } from '$lib/entities';
</script>

<PageTitle>Willkommen bei der Schreinerei Meier im Internet!</PageTitle>
<Text class="pt-4"
	>Wir sind seit vielen Jahren darauf spezialisiert, alle Kundenw{@html Entity.ü}nsche zu erf{@html Entity.ü}llen.
	In unserer Werkstatt produzieren wir selbst - mit Holz aus regionaler, nachhaltiger
	Forstwirtschaft.
</Text>

<!-- Services -->
<section class="py-8">
	<Heading class="col-span-full">Unsere Leistungen:</Heading>

	<div class="flex max-sm:flex-col sm:justify-between mt-8">
		<!-- Services in unorderd list-->
		<ul class="list-disc list-inside pl-8 max-sm:pb-8">
			<li>
				M{@html Entity.ö}bel nach Ihren W{@html Entity.ü}nschen
				<ul class="list-disc list-inside pl-8">
					<li>K{@html Entity.ü}chenm{@html Entity.ö}bel</li>
					<li>Regale und Schrankw{@html Entity.ü}nde</li>
					<li>Badezimmerm{@html Entity.ö}bel</li>
				</ul>
			</li>
			<li>Haust{@html Entity.ü}ren</li>
			<li>Gartenz{@html Entity.ä}une</li>
			<li>Reparaturen</li>
		</ul>

		<!-- Advert in aside component cus content of page is vaguely related-->
		<aside
			class="rounded-2xl bg-red-800 text-white max-w-[11em] p-[1em] max-sm:mx-auto flex flex-col items-center text-center"
		>
			<h3 class="py-4 text-2xl font-bold font-serif text-[lightyellow]">Angebot</h3>
			<p>N{@html Entity.ä}chste Woche 10% auf alles!</p>
		</aside>
	</div>
</section>

<!-- Company history -->
<section class="py-8">
	<Heading>Unsere Geschichte:</Heading>
	<Text class="pt-7">
		Die Anf{@html Entity.ä}nge unserer Firma reichen bis ins Mittelalter zur{@html Entity.ü}ck, als
		Horst Holzmann begann seine bisher f{@html Entity.ü}r den Eigenbedarf hergestellten M{@html Entity.ö}bel
		auch auf dem Markt der n{@html Entity.ä}chsten Stadt zu verkaufen.
	</Text>
	<Text class="pt-4"
		>Sein Sohn f{@html Entity.ü}hrte diese Tradition fort und nach ihm noch viele weitere Kinder und
		Kindeskinder. Heute f{@html Entity.ü}hrt Schwiegersohn Harry Meier den Betrieb in der 15.
		Generation weiter und arbeitet bereits seinen Enkel als Nachfolger ein.
	</Text>
</section>
