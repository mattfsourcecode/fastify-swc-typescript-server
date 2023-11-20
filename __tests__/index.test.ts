import server from "../src/index";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

const fastifyServer: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  server;

describe("GET /", () => {
  afterAll(() => {
    fastifyServer.close();
  });

  it("should respond with a status code of 200", async () => {
    const response = await fastifyServer.inject({
      method: "GET",
      url: "/",
    });
    expect(response.statusCode).toBe(200);
  });
});
