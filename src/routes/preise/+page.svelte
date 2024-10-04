<script>
	import PageTitle from '$lib/components/pageTitle.svelte';
</script>

<PageTitle class="mb-8">Unsere nur zu Beispielzwecken erdachten Phantasie-Preise</PageTitle>
<!--TODO: Refactor into components-->
<div class=" rounded-lg border-[1.5px] overflow-hidden max-w-96">
	<table class="min-w-full">
		<thead class="bg-[#e7e2e2] text-[#333] font-semibold"
			><tr class="border-b-[1.5px]">
				<th class="p-3 border-r-[1.5px] font-normal">Produkt</th>
				<th class="p-3 font-normal">Preis</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="p-3 font-normal text-center border-r-[1.5px] border-b-[1.5px]">Tisch</td>
				<td class="p-3 font-normal border-b-[1.5px]">50 {@html '&#x20AC;'}</td>
			</tr>
			<tr>
				<td class="p-3 font-normal text-center border-r-[1.5px] border-b-[1.5px]">Schrank</td>
				<td class="p-3 font-normal border-b-[1.5px]">70 {@html '&#x20AC;'}</td>
			</tr>
			<tr>
				<td class="p-3 font-normal text-center border-r-[1.5px]">Bett</td>
				<td class="p-3 font-normal">100 {@html '&#x20AC;'}</td>
			</tr>
		</tbody>
	</table>
</div>
