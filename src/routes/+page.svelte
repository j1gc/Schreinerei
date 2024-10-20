<script>
	import Heading from '$lib/components/heading.svelte';
	import PageTitle from '$lib/components/pageTitle.svelte';
	import Text from '$lib/components/text.svelte';
</script>

<PageTitle>Willkommen bei der Schreinerei Meier im Internet!</PageTitle>
<Text class="pt-4"
	>Wir sind seit vielen Jahren darauf spezialisiert, alle Kundenw{@html '&#xFC;'}nsche zu erf{@html '&#xFC;'}llen.
	In unserer Werkstatt produzieren wir selbst - mit Holz aus regionaler, nachhaltiger
	Forstwirtschaft.
</Text>

<!-- Services -->
<section class="py-8">
	<Heading class="col-span-full">Unsere Leistungen:</Heading>

	<div class="flex max-sm:flex-col sm:justify-between mt-8">
		<ul class="list-disc list-inside pl-8 max-sm:pb-8">
			<li>
				M{@html '&#xF6;'}bel nach Ihren W{@html '&#xFC;'}nschen
				<ul class="list-disc list-inside pl-8">
					<li>K{@html '&#xFC;'}chenm{@html '&#xF6;'}bel</li>
					<li>Regale und Schrankw{@html '&#xE4;'}nde</li>
					<li>Badezimmerm{@html '&#xF6;'}bel</li>
				</ul>
			</li>
			<li>Haust{@html '&#xFC;'}ren</li>
			<li>Gartenz{@html '&#xE4;'}une</li>
			<li>Reparaturen</li>
		</ul>

		<aside
			class="rounded-2xl bg-red-800 text-white max-w-[11em] p-[1em] max-sm:mx-auto flex flex-col items-center text-center"
		>
			<h3 class="py-4 text-2xl font-bold font-serif text-[lightyellow]">Angebot</h3>
			<p>N{@html '&#xE4;'}chste Woche 10% auf alles!</p>
		</aside>
	</div>
</section>

<!-- Company history -->
<section class="py-8">
	<Heading>Unsere Geschichte:</Heading>
	<Text class="pt-7">
		Die Anf{@html '&#xE4;'}nge unserer Firma reichen bis ins Mittelalter zur{@html '&#xFC;'}ck, als
		Horst Holzmann begann seine bisher f{@html '&#xFC;'}r den Eigenbedarf hergestellten M{@html '&#xF6;'}bel
		auch auf dem Markt der n{@html '&#xE4;'}chsten Stadt zu verkaufen.
	</Text>
	<Text class="pt-4"
		>Sein Sohn f{@html '&#xFC;'}hrte diese Tradition fort und nach ihm noch viele weitere Kinder und
		Kindeskinder. Heute f{@html '&#xFC;'}hrt Schwiegersohn Harry Meier den Betrieb in der 15.
		Generation weiter und arbeitet bereits seinen Enkel als Nachfolger ein.
	</Text>
</section>
