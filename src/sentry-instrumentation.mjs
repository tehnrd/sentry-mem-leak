import * as Sentry from '@sentry/sveltekit';

Sentry.init({
	dsn: 'https://xxxxxxx.ingest.us.sentry.io/xxxxx',
	tracesSampleRate: 1
});
