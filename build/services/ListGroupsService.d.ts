declare class ListGroupsService {
    execute(): Promise<{
        name: string;
        image_url: string;
        id: string;
    }[]>;
}
export { ListGroupsService };
