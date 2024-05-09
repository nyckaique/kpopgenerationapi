import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateGroupService } from "../services/UpdateGroupService";

class UpdateGroupController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const {
      name,
      description,
      members,
      generation,
      debut_date,
      status,
      company,
      spotify,
      image_url,
    } = request.body as {
      name: string;
      description: string;
      members: string[];
      generation: string;
      debut_date: Date;
      status: boolean;
      company: string;
      spotify: string;
      image_url: string;
    };
    const { id } = request.query as { id: string };
    const groupService = new UpdateGroupService();
    const group = await groupService.execute({
      id,
      name,
      description,
      members,
      generation,
      debut_date,
      status,
      company,
      spotify,
      image_url,
    });

    reply.send(group);
  }
}

export { UpdateGroupController };
