# Steps to reproduce

Update `dsn` value in the `src/sentry-instrumentation.mjs` file with valid dsn url.

## No memory leak: "@sentry/sveltekit": "9.28.0"

- Run `npm i` to install dependencies.
- Run `npm build` to build the server code.
- Run `npm start` to start the custom express server
- Open chrome memory inspector in Chrome Broswer: chrome://inspect/#devices
- Select inspect link to open the inspector for the server.
- Select the Memory tab if not already selected.
- Select "Allocations on Timeline".
- Select the Start button.
- Run the `npm ab` command to start a simple Apache Bench get request on loop to the server.
- Monitor the memory usage in the timeline and note it is not being retained.
- Stop the server and ab commands

## Memory leak: "@sentry/sveltekit": "9.28.1"

- Update @sentry/sveltekit to "9.28.1" in package.json
- Run `npm i` to update the dependencies.
- Run `npm build` to build the server code.
- Run `npm start` to start the custom express server
- Open chrome memory inspector in Chrome Broswer: chrome://inspect/#devices
- Select inspect link to open the inspector for the server.
- Select the Memory tab if not already selected.
- Select "Allocations on Timeline"
- Select the Start button
- Run the `npm ab` command to start a simple Apache Bench GET request loop to the server.
- Monitor the memory usage in the timeline and note it is growing and not being cleared out.
