<script lang="ts">
	let posts = $state([
		{
			slug: 'foo1',
			title: 'Title of the post here',
			date: 'August 12, 2024'
		},
		{
			slug: 'foo2',
			title: 'Title of the post here',
			date: 'August 12, 2024'
		},
		{
			slug: 'foo3',
			title: 'Title of the post here',
			date: 'August 12, 2024'
		},
		{
			slug: 'foo4',
			title: 'Title of the post here',
			date: 'August 12, 2024'
		},
		{
			slug: 'foo5',
			title: 'Title of the post here',
			date: 'August 12, 2024'
		},
		{
			slug: 'foo6',
			title: 'Title of the post here',
			date: 'August 12, 2024'
		},
		{
			slug: 'foo7',
			title: 'Title of the post here',
			date: 'August 12, 2024'
		},
		{
			slug: 'foo8',
			title: 'Title of the post here',
			date: 'August 12, 2024'
		},
		{
			slug: 'foo9',
			title: 'Title of the post here',
			date: 'August 12, 2024'
		},
		{
			slug: 'foo10',
			title: 'Title of the post here',
			date: 'August 12, 2024'
		}
	])
</script>

<div
	class="mb-[2rem] flex flex-col border-b-[0.0625rem] border-neutral-300 pt-[2rem] dark:border-neutral-800"
>
	{#each posts as post (post.slug)}
		<a
			href="/blog/{post.slug}"
			class="flex h-[5rem] items-center justify-between border-t-[0.0625rem] border-neutral-300 px-[1rem] hover:bg-neutral-300/30 dark:border-neutral-800 dark:hover:bg-neutral-800/20"
		>
			<h3 class="text-[1.125rem] font-medium text-neutral-600 dark:text-neutral-400">
				{post.title}
			</h3>
			<span class="text-[0.875rem] text-neutral-500">{post.date}</span>
		</a>
	{/each}
</div>
