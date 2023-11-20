import fastify, { FastifyReply, FastifyRequest } from "fastify";

const server = fastify();

server.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
  return { hello: "world" };
});

if (require.main === module) {
  server.listen({ port: 3000 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
}

export default server;
