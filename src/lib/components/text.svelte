<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<!-- cannot nest block-level elements like <p> tags within other <p> tags, which violates HTML specifications -->
<!--50 chars per line for optimal reading-->
<div class={cn('max-w-[50ch]', className)} {...$$restProps}>
	<slot />
</div>
