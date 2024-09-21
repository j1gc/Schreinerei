<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<!-- cannot nest block-level elements like <p> tags within other <p> tags, which violates HTML specifications -->
<div class={cn('text-red-700', className)} {...$$restProps}>
	<slot />
</div>
