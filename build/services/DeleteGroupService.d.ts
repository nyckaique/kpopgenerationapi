interface DeleteGroupProps {
    id: string;
}
declare class DeleteGroupService {
    execute({ id }: DeleteGroupProps): Promise<{
        message: string;
    }>;
}
export { DeleteGroupService };
