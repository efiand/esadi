import { Domain } from '$lib/utils/constants.js';

export const load = ({ url: { host } }) => ({
	...Domain[host.includes('nodi') ? 'NODI' : 'ESADI']
});
