import { connection } from "../database";
import { TagRepositoryInterface } from "./repository";

export class TagRepository implements TagRepositoryInterface {
  async findByID(id: number) {
    return await connection("tags").where({ id }).first();
  }

  async create({ name, plate_id }: { name: string; plate_id: number }) {
    const tagID = await connection("tags").insert({
      name,
      plate_id,
    });
    return { id: tagID };
  }
}
