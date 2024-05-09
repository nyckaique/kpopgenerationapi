interface ListGroupByIdProps {
    id: string;
}
declare class ListGroupByIdService {
    execute({ id }: ListGroupByIdProps): Promise<{
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
        created_at: Date | null;
        updated_at: Date | null;
    } | null>;
}
export { ListGroupByIdService };
