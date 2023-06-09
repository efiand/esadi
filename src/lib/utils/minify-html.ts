import htmlnano, { type HtmlnanoOptions } from 'htmlnano';

const minificationConfig: HtmlnanoOptions = {
	collapseWhitespace: 'aggressive',
	minifyCss: {
		preset: [
			'default',
			{
				cssDeclarationSorter: false,
				discardComments: { removeAll: true }
			}
		]
	},
	minifyJs: true,
	minifySvg: false
};

export default async (html: string) => (await htmlnano.process(html, minificationConfig)).html;
