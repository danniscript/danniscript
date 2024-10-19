<script lang="ts">
	import { GithubIcon, XTwitterIcon } from '$ui/icons'
	import { ToggleTheme, Avatar } from '$ui/sections'
</script>

<header class="flex items-center justify-between pt-[2rem]">
	<Avatar />

	<div class="flex h-[3.125rem] items-center gap-[0rem]">
		<a class="header-menu-item" href="/#">Blog</a>
		<a class="header-menu-item" href="/#">Workbench</a>

		<span class="header-menu-divider"></span>

		<a class="header-menu-item" href="/"><GithubIcon /></a>
		<a class="header-menu-item" href="/"><XTwitterIcon /></a>

		<ToggleTheme />
	</div>
</header>
