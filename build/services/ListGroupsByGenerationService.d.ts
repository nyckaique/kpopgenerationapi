interface ListGroupsByGenerationProps {
    generation: string;
}
declare class ListGroupsByGenerationService {
    execute({ generation }: ListGroupsByGenerationProps): Promise<{
        name: string;
        image_url: string;
        id: string;
    }[]>;
}
export { ListGroupsByGenerationService };
