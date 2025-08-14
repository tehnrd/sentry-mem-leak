import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';
import { betterAuth } from 'better-auth';
import { customSession } from 'better-auth/plugins';
import type { User, Session } from 'better-auth/types';

export const auth = betterAuth({
	plugins: [
		customSession(async ({ user, session }: { user: User; session: Session }) => {
			return {
				user: {
					...user,
					newField: 'newField'
				},
				session
			};
		})
	]
});

export const handle = async function handle({ event, resolve }) {
	const session = await auth.api.getSession({
		headers: event?.request?.headers
	});

	// Ignore the building ts error on version 1.2.12
	const response = await svelteKitHandler({ event, resolve, auth, building });

	return response;
};
