import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
// import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { CreateGroupController } from "./controllers/CreateGroupController";
import { ListGroupsController } from "./controllers/ListGroupsController";
import { DeleteGroupController } from "./controllers/DeleteGroupController";
import { UpdateGroupController } from "./controllers/UpdateGroupController";
import { ListGroupByIdController } from "./controllers/ListGroupByIdController";
import { ListGroupsByGenerationController } from "./controllers/ListGroupsByGenerationController";
export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post(
    "/group",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateGroupController().handle(request, reply);
    }
  );
  fastify.get(
    "/groups",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListGroupsController().handle(request, reply);
    }
  );
  fastify.get(
    "/groups/generation",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListGroupsByGenerationController().handle(request, reply);
    }
  );
  fastify.get(
    "/group",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListGroupByIdController().handle(request, reply);
    }
  );
  fastify.delete(
    "/group",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteGroupController().handle(request, reply);
    }
  );
  fastify.put(
    "/group",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateGroupController().handle(request, reply);
    }
  );
}
