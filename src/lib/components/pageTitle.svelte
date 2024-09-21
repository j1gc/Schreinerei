<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<h1
	class={cn(
		'text-3xl max-sm:text-xl font-bold p-4 bg-red-700 text-yellow-50 rounded-bl-3xl rounded-r-3xl',
		className
	)}
	{...$$restProps}
>
	<slot />
</h1>
