<script lang="ts">
	import 'iconify-icon';
	import Header from './Header.svelte';
	import '$lib/styles/app.scss';
	import Footer from './Footer.svelte';
</script>

<!-- Header : fixed -->
<Header />
<main class="relative flex-1 flex flex-col justify-center">

	<slot />
	<!-- Footer : sticky -->
</main>
<!-- Footer : complete -->
<Footer />
