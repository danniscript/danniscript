<script lang="ts">
	import { GithubIcon, XTwitterIcon } from '$ui/icons'
	import { ToggleTheme, Avatar } from '$ui/sections'
	import { cn } from '$lib/utils'
	import { page } from '$app/stores'

	let isBlogPage = $derived($page.url.pathname === '/')
</script>

<header class="flex items-center justify-between pt-[2rem]">
	<Avatar />

	<div class="flex h-[3.125rem] items-center gap-[0rem]">
		<a class={cn('header-menu-item', isBlogPage && 'dark:text-neutral-200')} href="/"> Blog </a>
		<a class={cn('header-menu-item', !isBlogPage && 'dark:text-neutral-200')} href="/workbench">
			Workbench
		</a>

		<span class="header-menu-divider"></span>

		<a class="header-menu-item" href="https://github.com/danniscript" target="_blank">
			<GithubIcon />
		</a>
		<a class="header-menu-item" href="https://x.com/danniscript" target="_blank">
			<XTwitterIcon />
		</a>

		<ToggleTheme />
	</div>
</header>
