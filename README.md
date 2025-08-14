# Steps to reproduce

## Memory leak: "better-auth": "1.3.0" or higher

- Run `npm i` to update the dependencies.
- Run `npm build` to build the server code.
- Run `npm start` to start the server.
- Open chrome memory inspector in Chrome Broswer: chrome://inspect/#devices
- Select inspect link to open the inspector for the server.
- Select the Memory tab if not already selected.
- Select "Allocations on Timeline"
- Select the Start button
- Run the `npm ab` command to start a simple Apache Bench GET request loop to the server.
- Monitor the memory usage in the timeline and note it is growing and not being cleared out.

To stop the memory leak, comment out the plugins in the SSO config and rerun the test...or downgrade to 1.2.12

## No memory leak: "better-auth": "1.2.12"

- Stop all running commands, `start` and `ab`.
- Downgrade better-auth to "1.2.12" in package.json
- Run `npm i` to update dependencies.
- Run `npm build` to build the server code.
- Run `npm start` to start the server.
- Open chrome memory inspector in Chrome Broswer: chrome://inspect/#devices
- Select inspect link to open the inspector for the server.
- Select the Memory tab if not already selected.
- Select "Allocations on Timeline".
- Select the Start button.
- Run the `npm ab` command to start a simple Apache Bench get request on loop to the server.
- Monitor the memory usage in the timeline and note it is not being retained.
- Stop the server and ab commands
