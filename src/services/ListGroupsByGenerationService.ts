import prismaClient from "../prisma";
interface ListGroupsByGenerationProps {
  generation: string;
}
class ListGroupsByGenerationService {
  async execute({ generation }: ListGroupsByGenerationProps) {
    if (!generation) {
      throw new Error("Solicitação inválida");
    }
    const groups = await prismaClient.group.findMany({
      where: {
        generation: generation,
      },
      select: {
        id: true,
        name: true,
        image_url: true,
      },
    });

    return groups;
  }
}
export { ListGroupsByGenerationService };
