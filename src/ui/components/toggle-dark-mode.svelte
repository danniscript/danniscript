<script lang="ts">
	let darkMode = $state(true)

	function handleToggleTheme() {
		darkMode = !darkMode

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')
	}
</script>

<div>
	<input type="checkbox" id="toggle" onclick={handleToggleTheme} />
	<label for="toggle"></label>
</div>
