import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	// add delay to simulate quick db query
	await new Promise((resolve) => setTimeout(resolve, 10));

	return json({ message: 'Health check endpoint is operational' });
};
