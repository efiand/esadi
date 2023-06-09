<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<h1>{$page.data.title}</h1>
</header>

<style lang="scss">
	h1 {
		margin: 0;
		padding: 10px;
		font-weight: 700;
		font-size: 14pt;
		font-family: $font-accent;
		text-align: center;
		background-color: $color-wheat-light;
		border-top: $color-gray 1px solid;
		border-bottom: $color-gray 1px solid;
	}
</style>
