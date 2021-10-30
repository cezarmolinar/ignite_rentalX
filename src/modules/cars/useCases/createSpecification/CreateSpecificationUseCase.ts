import { ISepecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISepecificationsRepository) { }

    execute({ name, description }: IRequest): void {

        const AlreadExists = this.specificationsRepository.findByName(name);

        if (AlreadExists) {
            throw new Error("Specification already exists!");
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };