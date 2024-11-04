<script lang="ts">
	import { GithubIcon, XTwitterIcon } from '$ui/icons'
	import { ToggleTheme, Avatar } from '$ui/sections'
	import { page } from '$app/stores'
	import { cn } from '$lib/utils'

	let isBlogPage = $derived($page.url.href === '' || $page.url.href === 'blog')
	let isWorkbenchPage = $derived($page.url.href === '/workbench')
</script>

<header class="flex items-center justify-between pt-[2rem]">
	<Avatar />

	<div class="flex h-[3.125rem] items-center gap-[0rem]">
		<a
			class={cn(
				'flex h-full items-center px-[1rem] font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200',
				isBlogPage && 'text-neutral-800 dark:text-neutral-200'
			)}
			href="/"
		>
			Blog
		</a>
		<a
			class={cn(
				'flex h-full items-center px-[1rem] font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200',
				isWorkbenchPage && 'text-neutral-800 dark:text-neutral-200'
			)}
			href="/workbench"
		>
			Workbench
		</a>

		<span
			class="mx-[0.75rem] inline-block h-[1.5rem] w-[0.0625rem] bg-neutral-400/80 dark:bg-neutral-700"
		></span>

		<a
			class="flex h-full items-center px-[1rem] font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
			href="https://github.com/danniscript"
			target="_blank"
		>
			<GithubIcon />
		</a>
		<a
			class="flex h-full items-center px-[1rem] font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
			href="https://x.com/danniscript"
			target="_blank"
		>
			<XTwitterIcon />
		</a>

		<ToggleTheme />
	</div>
</header>
