import { FastifyRequest, FastifyReply } from "fastify";
import { CreateGroupService } from "../services/CreateGroupService";

class CreateGroupController {
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
    const groupService = new CreateGroupService();
    const group = await groupService.execute({
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

export { CreateGroupController };
