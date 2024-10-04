<script>
	import Heading from '$lib/components/heading.svelte';
	import Link from '$lib/components/link.svelte';
	import PageTitle from '$lib/components/pageTitle.svelte';
	import Text from '$lib/components/text.svelte';
</script>

<article>
	<PageTitle>Impressum</PageTitle>

	<Text class="py-4">Angaben gem. {@html '&#xA7;'} 5 TMG</Text>

	<dl>
		<dt>Betreiber und Kontakt:</dt>
		<dd class="pl-8">Schreinerei Meier</dd>
		<dd class="pl-8">M{@html '&#xF6;'}belstr. 1</dd>
		<dt></dt>
		<dd class="pl-8">D-12345</dd>
		<dt></dt>
		<dd class="pl-8">Musterstadt</dd>
		<dt></dt>
		<dd class="pl-8">Germany</dd>
		<dt>Tel:</dt>
		<dd class="pl-8">+49 1234 5678</dd>
		<dt>Fax:</dt>
		<dd class="pl-8">+49 1234 5679</dd>
		<dt>E-Mail-Adresse:</dt>
		<dd class="pl-8"><Link href="mailto:test@example.com">test@example.com</Link></dd>
	</dl>
	<dl>
		<dt>Vertretung:</dt>
		<dd class="pl-8">Die Schreinerei Meier wird rechtlich vertreten durch Herrn Harry Meier</dd>
	</dl>

	<h3 class="py-4 text-xl font-bold">Berufsspezifische Angaben:</h3>
	<Text class="py-2">Berufsbezeichnung: k. A.</Text>
	<Text class="py-2">Zust{@html '&#xE4;'}ndige Kammer: IHK Bayern</Text>
	<Text class="py-2">Verliehen in/durch: k. A.</Text>
	<Text class="py-2"
		><Text>Folgende berufsrechtliche Regelungen finden Anwendung: k. A.</Text><Text
			>Diese Regelungen k{@html '&#xF6;'}nnen Sie einsehen unter: k. A.</Text
		></Text
	>
	<Text class="py-2"
		>Zust{@html '&#xE4;'}ndige Aufsichtsbeh{@html '&#xF6;'}rde: Finanzamt Musterstadt</Text
	>
	<Text class="py-2">Register und Registernummer: 999999 999999</Text>
	<Text class="py-2">Umsatzsteuer-ID: 999999 999999</Text>
	<Text class="py-2"
		><Text
			>Verantwortlicher f{@html '&#xFC;'}r journalistisch-redaktionelle Inhalte gem. {@html '&#xA7;'}
			55 II RstV:</Text
		><Text>Hans J{@html '&#xF6;'}rgen Mustermann</Text></Text
	>
	<Text class="py-2"
		>Quelle: <Link
			href="http://www.deutsche-anwaltshotline.de/recht-auf-ihrer-website/impressum-generator"
		>
			Impressum-Generator</Link
		> der Deutschen Anwaltshotline AG</Text
	>
</article>
<aside class="py-8" id="Kontakt">
	<Heading>Kontakt</Heading>
	<dl class="py-8">
		<dt>E-Mail-Adresse:</dt>
		<dd class="pl-8">test@example.com</dd>
		<dt>Tel:</dt>
		<dd class="pl-8">+49 1234 5678</dd>
		<dt>Fax:</dt>
		<dd class="pl-8">+49 1234 5679</dd>
	</dl>
</aside>
