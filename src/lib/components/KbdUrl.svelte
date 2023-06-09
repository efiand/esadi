<script lang="ts">
	import { page } from '$app/stores';
</script>

<kbd>{$page.url.hostname}{$page.url.pathname}{$page.url.search}</kbd>
