<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	interface Props {
		class?: $$Props['class'];
		children?: import('svelte').Snippet;
	}

	let { class: className = undefined, children }: Props = $props();
</script>

<!-- Navigator item component for link-->
<li class={cn('p-2 bg-red-800 text-[lightyellow]', className)}>
	{@render children?.()}
</li>
