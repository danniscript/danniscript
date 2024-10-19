<script lang="ts">
	import { MoonIcon, SunIcon } from '$ui/icons'
	import { setDarkMode } from '$ui/sections'

	let darkMode = setDarkMode(true)

	$effect(() => {
		darkMode.value
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')
	})
</script>

<div class="flex h-full items-center">
	<input
		type="checkbox"
		id="toggle"
		class="hidden"
		onclick={() => (darkMode.value = !darkMode.value)}
	/>
	<label for="toggle" class="header-menu-item">
		{#if darkMode.value}
			<SunIcon />
		{:else}
			<MoonIcon />
		{/if}
	</label>
</div>
