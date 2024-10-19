<script lang="ts">
	import { cn } from '$lib/utils'

	type Props = {
		class?: string
		[key: string]: unknown
	}

	let { class: classes, ...props }: Props = $props()
</script>

<svg
	class={cn('size-[1.5rem] text-inherit', classes)}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	{...props}
>
	<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
</svg>
