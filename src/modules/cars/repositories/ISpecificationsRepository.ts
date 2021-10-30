import { Specification } from "../model/specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISepecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
    list(): Specification[];
}

export { ICreateSpecificationDTO, ISepecificationsRepository };
