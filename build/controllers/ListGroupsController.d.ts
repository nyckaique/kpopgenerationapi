import { FastifyRequest, FastifyReply } from "fastify";
declare class ListGroupsController {
    handle(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}
export { ListGroupsController };
