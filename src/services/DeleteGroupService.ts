import prismaClient from "../prisma";
interface DeleteGroupProps {
  id: string;
}
class DeleteGroupService {
  async execute({ id }: DeleteGroupProps) {
    if (!id) {
      throw new Error("Solicitação inválida");
    }
    const findGroup = await prismaClient.group.findFirst({
      where: {
        id: id,
      },
    });

    if (!findGroup) {
      throw new Error("Grupo não existe");
    }

    await prismaClient.group.delete({
      where: {
        id: findGroup.id,
      },
    });

    return { message: "Deletado com sucesso" };
  }
}
export { DeleteGroupService };
