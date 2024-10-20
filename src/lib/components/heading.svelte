<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<h2 class={cn('flex text-xl sm:text-4xl font-medium', className)} {...$$restProps}>
	<slot />
</h2>
