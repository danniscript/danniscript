<script lang="ts">
	import { outsideClick } from '$lib/actions'

	let open = $state(false)
	let trigger: HTMLElement | null = $state(null)
</script>

<div class="relative">
	<button
		bind:this={trigger}
		type="button"
		onclick={() => (open = !open)}
		class="flex overflow-hidden rounded-full"
	>
		<span class="hidden">Avatar</span>
		<enhanced:img class="size-[3rem]" src="$lib/assets/avatar.jpg" alt="danniscript" />
	</button>

	{#if open}
		<div
			use:outsideClick={{ handler: () => (open = false), exception: trigger }}
			class="absolute left-[3.75rem] top-0 w-[30rem] rounded-[1rem] bg-neutral-200 p-[1.5rem] text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
		>
			<p class="mb-[1rem]">Hola, I'm Daniel.</p>
			<p class="mb-[1rem]">
				Currently studying
				<span class="font-medium text-blue-800 dark:text-blue-600">
					Computer Engineering
				</span>
				at
				<a class="hover:underline" href="/">ESPOL</a>
				, Ecuador. I find joy exploring and experimenting with
				<span class="font-medium text-green-700 dark:text-green-600">web development</span>
				and
				<span class="font-medium text-purple-800 dark:text-purple-600">design</span>.
			</p>
		</div>
	{/if}
</div>
