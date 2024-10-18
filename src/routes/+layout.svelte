<script lang="ts">
	import { ToggleTheme } from '$ui/components'
	import '../app.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>danniscript</title>
</svelte:head>

<header class="bg-test">
	<div>
		<button type="button">
			<enhanced:img src="./path/to/your/image.jpg" alt="danniscript" />
		</button>
	</div>

	<ToggleTheme />
</header>

{@render children()}
