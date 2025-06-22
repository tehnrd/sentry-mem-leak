import { betterAuth } from 'better-auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';

export const auth = betterAuth({});

export async function handle({ event, resolve }) {
	const response = await svelteKitHandler({ event, resolve, auth });
	return response;
}
