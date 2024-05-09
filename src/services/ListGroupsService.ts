import prismaClient from "../prisma";

class ListGroupsService {
  async execute() {
    const groups = await prismaClient.group.findMany({
      select: {
        id: true,
        name: true,
        image_url: true,
      },
    });
    return groups;
  }
}
export { ListGroupsService };
