<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<nav class="pt-5 pb-10 flex max-md:justify-center">
	<ul class={cn('space-y-[0.1rem] md:max-w-64 w-full slot-wrapper', className)}>
		<slot />
	</ul>
</nav>

<!--Needed because sveltes slot element cant be givin styles-->
<style>
	.slot-wrapper :global(> :first-child) {
		border-top-left-radius: 0.5rem /* 8px */;
		border-top-right-radius: 0.5rem /* 8px */;
	}
	.slot-wrapper :global(> :last-child) {
		border-bottom-right-radius: 0.5rem /* 8px */;
		border-bottom-left-radius: 0.5rem /* 8px */;
	}
</style>
