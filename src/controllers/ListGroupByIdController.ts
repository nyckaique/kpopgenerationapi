import { FastifyRequest, FastifyReply } from "fastify";
import { ListGroupByIdService } from "../services/ListGroupByIdService";

class ListGroupByIdController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const listGroupByIdService = new ListGroupByIdService();
    const group = await listGroupByIdService.execute({ id });
    reply.send(group);
  }
}
export { ListGroupByIdController };
