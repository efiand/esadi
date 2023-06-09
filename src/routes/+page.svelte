<script lang="ts">
	import KbdUrl from '$lib/components/KbdUrl.svelte';
	import { page } from '$app/stores';
</script>

<p>
	Страница <KbdUrl />, которую Вы искали, доступна по
	<a href="https://netbiblio.ru/{$page.data.redirect}">ссылке</a>.
</p>
