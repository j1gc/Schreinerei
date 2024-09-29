<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLAnchorElement> & { href?: string };

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<!-- visited:text-purple-600/Link> -->
<a class={cn('underline text-blue-600 hover:text-blue-800 ', className)} {...$$restProps}>
	<slot />
</a>
