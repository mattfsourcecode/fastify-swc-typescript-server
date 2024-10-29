# Fastify SWC TypeScript Server

## Overview

This project leverages Fastify, TypeScript, and SWC to build a high-performance, scalable server. Fastify offers unmatched scalability and speed, TypeScript provides strong typing and advanced features, and SWC handles rapid transpilation. **Notably, the `typescript` package is not a dependency**—SWC transpiles TypeScript independently, providing fast, lightweight builds.

In **development mode**, the server updates instantly to reflect changes in source files or tests. In **production**, it operates on optimized JavaScript for better performance.

This server template can be an ideal foundation for developing [serverless functions](https://en.wikipedia.org/wiki/Serverless_computing), which are advantageous in modern cloud-native applications. Serverless functions, running in cloud environments, allow developers to focus on writing code without managing infrastructure. These functions respond to events such as HTTP requests or database changes and automatically scale with demand.

## Scripts

### `Install`

Installs the project dependencies.

```bash
pnpm i
```

### `Dev`

Runs the server in development mode, with hot reloading to reflect changes made to the source files and tests.

```bash
pnpm dev
```

### `Test`

Runs the Jest test suite using SWC for fast TypeScript transpilation.

```bash
pnpm test
```

### `Build`

Transpiles the TypeScript source files to JavaScript using SWC. The output is saved in the `dist` directory.

```bash
pnpm build
```

### `Start`

Runs the transpiled JavaScript code from the `dist` directory.

```bash
pnpm start
```

## Dependencies

### Main Dependencies

- [`fastify`](https://www.npmjs.com/package/fastify): A fast and low-overhead web framework for Node.js, built for efficiency and scalability.

### Development Dependencies

- [`@swc-node/jest`](https://www.npmjs.com/package/@swc-node/jest): A Jest transformer using SWC for efficient testing with TypeScript.
- [`@swc-node/register`](https://www.npmjs.com/package/@swc-node/register): Allows on-the-fly transpilation of TypeScript to JavaScript using SWC during development.
- [`@swc/cli`](https://www.npmjs.com/package/@swc/cli): The command-line interface for the SWC transpiler.
- [`@swc/core`](https://www.npmjs.com/package/@swc/core): The core library for SWC, used for fast TypeScript and JavaScript transpilation.
- [`@swc/helpers`](https://www.npmjs.com/package/@swc/helpers): Helper functions used by SWC to support advanced JavaScript features.
- [`@types/jest`](https://www.npmjs.com/package/@types/jest): TypeScript definitions for Jest, ensuring strong typing in test files.
- [`@types/node`](https://www.npmjs.com/package/@types/node): TypeScript definitions for Node.js APIs.
- [`jest`](https://www.npmjs.com/package/jest): A comprehensive testing framework for JavaScript and TypeScript.
- [`nodemon`](https://www.npmjs.com/package/nodemon): Monitors for changes in the source and automatically restarts the server in development mode.
- [`ts-node`](https://www.npmjs.com/package/ts-node): A TypeScript execution environment for Node.js, used here for interpreting the TypeScript Jest configuration file.

## Serverless Functions Support (Fastify AWS Lambda)

This project is compatible with AWS Lambda through the [`@fastify/aws-lambda`](https://github.com/fastify/aws-lambda-fastify) package, allowing you to build Fastify applications that can be deployed as serverless functions.

### Installation

Before setting up your AWS Lambda integration, install the necessary package using:

```bash
pnpm i @fastify/aws-lambda
```

**Key Benefits:**

- **Fast Execution:** Fastify's inject function and `@fastify/aws-lambda`'s optimizations result in quicker performance.
- **Modular Architecture:** Easily build and extend Fastify applications as serverless functions.
- **Seamless Integration:** Fastify works smoothly with AWS Lambda and API Gateway, scaling automatically with demand.

### Example Fastify AWS Lambda Setup

To set up a Fastify app for AWS Lambda, modify your `src/index.ts` and create a Lambda handler file (`lambda.ts`).

1. **Fastify App (`src/index.ts`)**:

   ```typescript
   import fastify, { FastifyReply, FastifyRequest } from "fastify";

   const app = fastify();

   app.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
     return { hello: "world" };
   });

   // ES Module alternative to require.main === module
   if (import.meta.url === `file://${process.argv[1]}`) {
     app.listen({ port: 3000 }, (err) => {
       if (err) {
         console.error(err);
         process.exit(1);
       }
       console.log("Server listening on port 3000");
     });
   }

   export default app; // Export the Fastify app for AWS Lambda
   ```

2. **Lambda Handler (`lambda.ts`)**:

   ```typescript
   import awsLambdaFastify from "@fastify/aws-lambda";
   import app from "./src/index.js";

   const proxy = awsLambdaFastify(app);

   export const handler = proxy;
   ```

3. **Deploy**: Deploy your Fastify app using AWS Lambda via a service such as Serverless Framework, AWS SAM, or AWS CDK.

### Using Lambda Arguments in Fastify

Fastify passes the original Lambda event and context in requests by default. Access them like this:

```typescript
app.get("/", (request: FastifyRequest, reply: FastifyReply) => {
  const event = request.awsLambda.event;
  const context = request.awsLambda.context;
  reply.send({ event, context });
});
```

### Optimizing Cold Starts (In `lambda.ts`)

To lower cold start latency with AWS Lambda and Node.js 14+, you can use top-level `await` in combination with `fastify.ready()`:

```typescript
import awsLambdaFastify from "@fastify/aws-lambda";
import app from "./src/index.js";

export const handler = awsLambdaFastify(app);
await app.ready(); // Optimize cold starts
```

<img width="300" alt="logo" src="https://github.com/user-attachments/assets/a6907512-87a4-45de-9188-cdc494dfe5a8">

## Contributions and Issues

Contributions are welcome! If you have ideas or improvements, please open an issue first for discussion before submitting a pull request.  
You can report issues or start discussions here: [Open an issue](https://github.com/mattfsourcecode/fastify-swc-typescript-server/issues)
