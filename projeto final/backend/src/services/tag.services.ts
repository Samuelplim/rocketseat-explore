import { TagRepositoryInterface } from "../repositories/repository";

export class TagService {
  tagRepository: TagRepositoryInterface;
  constructor(tagRepository: TagRepositoryInterface) {
    this.tagRepository = tagRepository;
  }

  async create({ name, plate_id }: { name: string; plate_id: number }) {
    const tagId = await this.tagRepository.create({
      name,
      plate_id,
    });
    return tagId;
  }
}
