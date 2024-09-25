<script>
	import Heading from '$lib/components/heading.svelte';
	import PageTitle from '$lib/components/pageTitle.svelte';
	import Text from '$lib/components/text.svelte';
</script>

<PageTitle>Willkommen bei der Schreinerei Meier im Internet!</PageTitle>
<Text class="pt-4"
	>Wir sind seit vielen Jahren darauf spezialisiert, alle Kundenwünsche zu erfüllen. In unserer
	Werkstatt produzieren wir selbst - mit Holz aus regionaler, nachhaltiger Forstwirtschaft.</Text
>
<section class="py-8">
	<Heading class="col-span-full">Unsere Leistungen:</Heading>

	<div class="flex max-sm:flex-col sm:justify-between mt-8">
		<ul class="list-disc list-inside pl-8 max-sm:pb-8">
			<li>
				Möbel nach Ihren Wünschen
				<ul class="list-disc list-inside pl-8">
					<li>Küchenmöbel</li>
					<li>Regale und Schrankwände</li>
					<li>Badezimmermöbel</li>
				</ul>
			</li>
			<li>Haustüren</li>
			<li>Gartenzäune</li>
			<li>Reparaturen</li>
		</ul>

		<aside
			class=" bg-red-700 text-white max-w-[11em] p-[1em] max-sm:mx-auto flex flex-col items-center text-center"
		>
			<h3 class="py-4 text-2xl font-bold font-serif text-[lightyellow]">Angebot</h3>
			<p>Nächste Woche 10% auf alles!</p>
		</aside>
	</div>
</section>

<section class="py-8">
	<Heading>Unsere Geschichte:</Heading>
	<Text class="pt-7">
		Die Anfänge unserer Firma reichen bis ins Mittelalter zurück, als Horst Holzmann begann seine
		bisher für den Eigenbedarf hergestellten Möbel auch auf dem Markt der nächsten Stadt zu
		verkaufen.
	</Text>
	<Text class="pt-4"
		>Sein Sohn führte diese Tradition fort und nach ihm noch viele weitere Kinder und Kindeskinder.
		Heute führt Schwiegersohn Harry Meier den Betrieb in der 15. Generation weiter und arbeitet
		bereits seinen Enkel als Nachfolger ein.
	</Text>
</section>
