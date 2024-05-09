import prismaClient from "../prisma";
interface ListGroupByIdProps {
  id: string;
}
class ListGroupByIdService {
  async execute({ id }: ListGroupByIdProps) {
    if (!id) {
      throw new Error("Solicitação inválida");
    }
    const group = await prismaClient.group.findFirst({
      where: {
        id: id,
      },
    });

    return group;
  }
}
export { ListGroupByIdService };
