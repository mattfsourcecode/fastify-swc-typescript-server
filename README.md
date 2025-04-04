# Fastify SWC TypeScript Serverless Function Boilerplate

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

- [`fastify`](https://www.npmjs.com/package/fastify)

### Development Dependencies

- [`@swc-node/jest`](https://www.npmjs.com/package/@swc-node/jest)
- [`@swc-node/register`](https://www.npmjs.com/package/@swc-node/register)
- [`@swc/cli`](https://www.npmjs.com/package/@swc/cli)
- [`@swc/core`](https://www.npmjs.com/package/@swc/core)
- [`@swc/helpers`](https://www.npmjs.com/package/@swc/helpers)
- [`@types/jest`](https://www.npmjs.com/package/@types/jest)
- [`@types/node`](https://www.npmjs.com/package/@types/node)
- [`jest`](https://www.npmjs.com/package/jest)
- [`nodemon`](https://www.npmjs.com/package/nodemon)
- [`ts-node`](https://www.npmjs.com/package/ts-node)

## Contributions and Issues

Contributions are welcome! If you have ideas or improvements, please open an issue first for discussion before submitting a pull request.  
You can report issues or start discussions here: [Open an issue](https://github.com/mattfsourcecode/fastify-swc-typescript-server/issues)
