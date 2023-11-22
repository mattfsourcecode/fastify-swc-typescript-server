# Fastify SWC TypeScript Server

## Overview

This project utilizes Fastify, TypeScript, and SWC to create a robust and efficient server. Fastify's scalability, TypeScript's strong typing and advanced features, and SWC's transpilation contribute to the server's performance. Notably, the `typescript` package is not a dependency, as SWC handles the transpilation independently. In development mode, the server updates quickly to reflect changes in source files or tests. In production, it operates on optimized JavaScript.

## Scripts

### `Install`

Installs the project dependencies.

```bash
pnpm i
```

### `Dev`

Runs the server in development mode. The server immediately updates to reflect changes made to the source files and tests.

```bash
pnpm run dev
```

### `Test`

Runs the Jest test suite.

```bash
pnpm run test
```

### `Build`

Transpiles the TypeScript source files to JavaScript using SWC. The output is saved in the `dist` directory.

```bash
pnpm run build
```

### `Start`

Runs the transpiled JavaScript code in the `dist` directory.

```bash
pnpm run start
```

## Dependencies

### Main Dependencies

- [`fastify`](https://www.npmjs.com/package/fastify): The Fastify web framework for building efficient and scalable Node.js server-side applications.

### Development Dependencies

- [`@swc-node/jest`](https://www.npmjs.com/package/@swc-node/jest): A Jest transformer using SWC, used for running the Jest test suite.
- [`@swc-node/register`](https://www.npmjs.com/package/@swc-node/register): Allows on-the-fly transpilation of TypeScript to JavaScript using SWC in development mode.
- [`@swc/cli`](https://www.npmjs.com/package/@swc/cli): The command-line interface for SWC.
- [`@swc/core`](https://www.npmjs.com/package/@swc/core): The core SWC library.
- [`@swc/helpers`](https://www.npmjs.com/package/@swc/helpers): A set of helper functions used by SWC.
- [`@types/jest`](https://www.npmjs.com/package/@types/jest): TypeScript definitions for Jest.
- [`@types/node`](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js.
- [`jest`](https://www.npmjs.com/package/jest): A JavaScript testing framework.
- [`nodemon`](https://www.npmjs.com/package/nodemon): A utility that monitors for any changes in your source and automatically restarts your server.
- [`ts-node`](https://www.npmjs.com/package/ts-node): A TypeScript execution environment and REPL for Node.js, used for interpreting the TypeScript Jest configuration file.
