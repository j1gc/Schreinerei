<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	interface Props {
		[key: string]: any;
	}

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<!-- cannot nest block-level elements like <p> tags within other <p> tags, which violates HTML specifications -->
<!--50 chars per line limit for optimal reading-->
<!--Custom text component with default css and html-->
<div class={cn('max-w-[50ch]', className)} {...rest}>
	{@render children?.()}
</div>
