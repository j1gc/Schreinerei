<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	interface Props { [key: string]: any }

	let { class: className = undefined, children, ...rest }: Props = $props();
	
</script>

<h2 class={cn('flex text-xl sm:text-4xl font-medium', className)} {...rest}>
	{@render children?.()}
</h2>
