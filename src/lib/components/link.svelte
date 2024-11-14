<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLAnchorElement> & { href?: string };

	interface Props {
		[key: string]: any;
	}

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<!-- visited:text-purple-600 underline text-blue-600 hover:text-blue-800 /Link> -->
<a class={cn('underline text-red-900 ', className)} {...rest}>
	{@render children?.()}
</a>
