import { FastifyRequest, FastifyReply } from "fastify";
import { ListGroupsByGenerationService } from "../services/ListGroupsByGenerationService";

class ListGroupsByGenerationController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { generation } = request.query as { generation: string };
    const listGroupsByGenerationService = new ListGroupsByGenerationService();
    const groups = await listGroupsByGenerationService.execute({ generation });
    reply.send(groups);
  }
}
export { ListGroupsByGenerationController };
