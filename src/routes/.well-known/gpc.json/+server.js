import { json } from '@sveltejs/kit';

export const prerender = true

export const GET = () => {
	const data = {
		gpc: true,
		lastUpdate: new Date().toISOString().split('T')[0]
	};
	
	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Type': 'application/json',
	}
	return json(data, {
		status: 200,
		headers,
	})

}
