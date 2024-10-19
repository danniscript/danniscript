<script lang="ts">
	import { cn } from '$lib/utils'

	type Props = {
		class?: string
		[key: string]: unknown
	}

	let { class: classes, ...props }: Props = $props()
</script>

<svg class={cn('size-[1.5rem] text-inherit', classes)} viewBox="0 0 24 24" fill="none" {...props}>
	<path
		d="M17.751 3H20.818L14.118 10.625L22 21H15.828L10.995 14.707L5.464 21H2.394L9.561 12.845L2 3H8.328L12.698 8.752L17.751 3ZM16.675 19.172H18.375L7.404 4.732H5.58L16.675 19.172Z"
		fill="currentColor"
	/>
</svg>
