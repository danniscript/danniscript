<script lang="ts">
	import { Header } from '$ui/sections'
	import '../app.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>danniscript</title>
</svelte:head>

<div class="mx-auto flex h-full min-h-[100dvh] max-w-[1000px] flex-col px-[2rem]">
	<Header />

	<div class="grow">
		{@render children()}
	</div>

	<footer class="mt-auto flex justify-between px-[1rem] py-[2rem]">
		<span class="text-[0.875rem] text-neutral-500">Daniel Rincón Hernández</span>
		<a
			class="text-[0.875rem] text-neutral-600 underline hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300"
			href="https://github.com/danniscript/danniscript"
			target="_blank"
		>
			source code
		</a>
	</footer>
</div>
