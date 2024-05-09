import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteGroupService } from "../services/DeleteGroupService";

class DeleteGroupController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const groupService = new DeleteGroupService();
    const group = await groupService.execute({ id });
    reply.send(group);
  }
}
export { DeleteGroupController };
