<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<h2
	class={cn(
		'flex justify-center text-xl sm:text-3xl font-bold font-[cursive] text-red-700 bg-[LightSalmon] border border-red-800',
		className
	)}
	{...$$restProps}
>
	<slot />
</h2>
