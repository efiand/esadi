import { dev } from '$app/environment';
import minifyHtml from '$lib/utils/minify-html';

export const handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	if (!dev && response.headers.get('Content-Type') === 'text/html') {
		const html = await response.text();
		const minifiedHtml = await minifyHtml(html);

		const newResponse = new Response(minifiedHtml);
		newResponse.headers.set('Content-Type', 'text/html');
		return newResponse;
	}

	return response;
};
