<script lang="ts">
	import '$lib/styles/app.scss';
	import { DEFAULT_REDIRECT } from '$lib/utils/constants.js';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	<meta name="description" content={$page.data.description} />
	<link href={$page.data.redirect || DEFAULT_REDIRECT} rel="canonical" />
</svelte:head>

<div class="page">
	<Header />
	<main>
		<p>
			Проект «{$page.data.description}» интегрирован в
			<a href="https://netbiblio.ru/{DEFAULT_REDIRECT}">Netbiblio</a>.
		</p>

		<slot />
	</main>

	<Footer />
</div>

<style lang="scss">
	.page {
		display: grid;
		grid-template-rows: min-content 1fr min-content;
		gap: 30px;
		box-sizing: border-box;
		min-height: 100vh;
		padding: 30px 15px;
		background-color: $color-white;

		@include desktop {
			max-width: 960px;
			min-height: calc(100vh - 20px);
			margin: 10px auto;
			padding: 30px;
			border-top: $color-black 1px solid;
			border-right: $color-gray 2px outset;
			border-bottom: $color-gray 2px outset;
			border-left: $color-black 1px solid;
		}
	}

	main {
		display: table;
		margin: 0 auto;
	}

	p {
		margin: 0 0 0.5rem;
	}
</style>
