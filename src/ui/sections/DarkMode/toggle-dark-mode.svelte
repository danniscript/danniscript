<script lang="ts">
	import { MoonIcon, SunIcon } from '$ui/icons'
	import { getDarkMode } from '$ui/sections'

	let darkMode = getDarkMode()

	function handleClick() {
		darkMode.toggle()
	}
</script>

<button
	class="flex h-full items-center px-[1rem] font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
	type="button"
	onclick={handleClick}
>
	{#if darkMode.value}
		<SunIcon />
	{:else}
		<MoonIcon />
	{/if}
</button>
