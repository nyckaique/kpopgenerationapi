import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = Fastify({ logger: true });
app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});
const start = async () => {
  await app.register(cors);
  await app.register(routes);
  try {
    await app.listen({
      host: "0.0.0.0",
      port: process.env.PORT ? Number(process.env.port) : 3333,
    });
  } catch (err) {
    process.exit(1);
  }
};

start();
