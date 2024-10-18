<script lang="ts">
	import '../app.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>danniscript</title>
</svelte:head>

{@render children()}
