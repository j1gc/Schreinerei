<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<h1
	class={cn('sm:text-5xl text-xl font-sans font-medium rounded-bl-3xl rounded-r-3xl', className)}
	{...$$restProps}
>
	<slot />
</h1>
