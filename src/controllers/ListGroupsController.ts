import { FastifyRequest, FastifyReply } from "fastify";
import { ListGroupsService } from "../services/ListGroupsService";

class ListGroupsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listGroupsService = new ListGroupsService();
    const groups = await listGroupsService.execute();
    reply.send(groups);
  }
}
export { ListGroupsController };
