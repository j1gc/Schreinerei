<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	interface Props {
		[key: string]: any;
	}

	let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<h1
	class={cn('sm:text-5xl text-xl font-sans font-medium rounded-bl-3xl rounded-r-3xl', className)}
	{...rest}
>
	{@render children?.()}
</h1>
