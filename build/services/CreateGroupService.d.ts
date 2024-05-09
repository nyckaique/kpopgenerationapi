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
declare class CreateGroupService {
    execute({ name, description, members, generation, debut_date, status, company, spotify, image_url, }: CreateGroupProps): Promise<{
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
    }>;
}
export { CreateGroupService };
