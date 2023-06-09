import { DEFAULT_REDIRECT } from '$lib/utils/constants.js';
import db from '$lib/server/db';

export const load = async ({ url }) => {
	let redirect = DEFAULT_REDIRECT;

	const domain = await db.domain.findUnique({
		where: { host: url.host }
	});

	if (url.search) {
		let { search } = url;

		// Because vercel sorts search params
		const searchInversionMatches = search.match(/^\?y=(.*?)&x=(.*?)$/);
		if (searchInversionMatches) {
			const [, paramY, paramX] = searchInversionMatches;
			search = `?x=${paramX}&y=${paramY}`;
		}

		const page = await db.page.findUnique({
			where: { search }
		});

		if (page) {
			redirect = page.redirect;

			await db.page.update({
				data: { count: page.count + 1 },
				where: { search }
			});
		}
	} else if (domain) {
		redirect = domain.redirect;

		await db.domain.update({
			data: { count: domain.count + 1 },
			where: { host: url.host }
		});
	}

	return {
		redirect
	};
};
