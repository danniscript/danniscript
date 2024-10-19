<script lang="ts">
	import { Header } from '$ui/sections'
	import '../app.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>danniscript</title>
</svelte:head>

<div class="mx-auto max-w-[1000px] px-[2rem]">
	<Header />

	{@render children()}
</div>
