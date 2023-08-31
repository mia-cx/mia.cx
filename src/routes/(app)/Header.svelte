<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export let height = '4rem';

	onMount(() => {
		if (browser) {
			document.documentElement.style.setProperty('--header-height', height);
		}
	});
</script>

<header
	class="z-10 sticky top-0 flex items-center h-[var(--header-height)] hover:[&_a]:text-primary font-bold bg-neutral"
>
	<div class="container flex gap-8">
		<!-- TODO Hamburger -->
		<span class="flex-1"><a href="/" class="reset">mia.cx</a></span>
		<nav class="flex gap-8">
			<a class="reset" href="/projects">Projects</a>
			<a class="reset" href="/about">About</a>
			<a class="reset" href="/contact">Contact</a>
			<a class="reset" href="https://patchstep.com">Patch</a>
		</nav>
	</div>
</header>

<style lang="scss">
	/* your styles go here */
	:global(html) {
		scroll-padding-top: calc(1rem + var(--header-height));
	}
</style>
