<script lang="ts">
	import { outsideClick } from '$lib/actions'

	let open = $state(false)

	$effect(() => {
		if (open) {
			document.body.classList.add('no-scroll')
		} else {
			document.body.classList.remove('no-scroll')
		}
	})
</script>

<button type="button" onclick={() => (open = true)}>
	<span class="hidden">Avatar</span>
	<enhanced:img
		class="size-[3rem] rounded-[0.5rem]"
		src="$lib/assets/avatar.jpg"
		alt="danniscript"
	/>
</button>

{#if open}
	<div
		class="absolute bottom-0 left-0 right-0 top-0 grid place-items-center bg-neutral-800/50 backdrop-blur-[1px] dark:bg-neutral-500/50"
	>
		<div
			use:outsideClick={() => (open = false)}
			class="w-[60rem] rounded-[1rem] bg-neutral-200 px-[4rem] py-[3rem] text-[1.25rem] text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
		>
			<p class="mb-[1rem]">Hola, I'm Daniel.</p>
			<p class="mb-[1rem]">
				Currently studying <span class="font-medium text-blue-800">
					Computer Engineering
				</span>
				at <a class="hover:underline" href="/">ESPOL</a>, Ecuador. I find joy exploring and
				experimenting with
				<span class="font-medium text-green-700">web development</span>
				and <span class="font-medium text-purple-800">design</span>.
			</p>

			<p>I have hands-on experience with:</p>

			<ul class="pl-[2rem]">
				<li class="list-disc">SvelteKit</li>
				<li class="list-disc">Next.js</li>
				<li class="list-disc">Tailwindcss</li>
				<li class="list-disc">Supabase</li>
				<li class="list-disc">Sanity</li>
				<li class="list-disc">Wordpress</li>
				<li class="list-disc">Bootstrap</li>
			</ul>
		</div>
	</div>
{/if}
