import prismaClient from "../prisma";
interface CreateGroupProps {
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

class CreateGroupService {
  async execute({
    name,
    description,
    members,
    generation,
    debut_date,
    status,
    company,
    spotify,
    image_url,
  }: CreateGroupProps) {
    if (
      !name ||
      !description ||
      !members ||
      !generation ||
      !debut_date ||
      status === null ||
      status === undefined ||
      !company ||
      !spotify ||
      !image_url
    ) {
      throw new Error("Preencha todos os campos");
    }
    const group = await prismaClient.group.create({
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

export { CreateGroupService };
