import Fastify, { FastifyRequest } from "fastify";
import cors from "@fastify/cors";

let qrCodeTriggered = false;

const server = Fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

server.register(function (instance, _options, done) {
  instance.get("/scanQr", {}, async (request: FastifyRequest, reply) => {
    qrCodeTriggered = true;
    reply.type("text/html");
    reply.send(`
            <h4>Sent data to server</h4>`);
  });

  instance.get("/", {}, async (request: FastifyRequest, reply) => {
    reply.type("text/html");

    if (qrCodeTriggered) {
      reply.send(`
        <h3>Name</h3> Parker
        <h3>Email</h3> johnparkerpearson@gmail.com
        <h3>Phone</h3> 862-579-5130 
    `);
    } else {
      reply.send(`
            <h4>Scan Qr Code</h4>`);
    }
  });

  done();
});

export const startServer = async () => {
  const port: number = 8080;
  // You must listen on all IPV4 addresses in Cloud Run
  // const host = IS_GOOGLE_CLOUD_RUN ? "0.0.0.0" : undefined;

  const host = "0.0.0.0";
  try {
    if (host == null) {
      await server.listen({ port });
    } else {
      await server.listen({ port, host });
    }
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
