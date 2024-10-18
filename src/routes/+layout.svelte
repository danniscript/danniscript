<script lang="ts">
	import '../app.css'

	let { children } = $props()

	let darkMode = $state(true)

	//$effect(() => )

	function handleToggleTheme() {
		darkMode = !darkMode

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')
	}
</script>

<svelte:head>
	<title>danniscript</title>
</svelte:head>

<header>
	<input type="checkbox" id="toggle" onclick={handleToggleTheme} />
	<label for="toggle"></label>
</header>

{@render children()}
