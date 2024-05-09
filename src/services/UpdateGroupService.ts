import prismaClient from "../prisma";
interface UpdateGroupProps {
  id: string;
  name: string;
  description: string;
  members: string[];
  generation: string;
  debut_date: Date;
  status: boolean;
  company: string;
  spotify: string;
  image_url: string;
}
class UpdateGroupService {
  async execute({
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
  }: UpdateGroupProps) {
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

    const group = await prismaClient.group.update({
      where: {
        id: findGroup.id,
      },
      data: {
        name,
        description,
        members,
        generation,
        debut_date,
        status,
        company,
        spotify,
        image_url,
      },
    });

    return group;
  }
}
export { UpdateGroupService };
