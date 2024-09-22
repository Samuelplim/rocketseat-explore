import { TagRepositoryInterface } from "./repository";

const knex = require("../database/knex");

export class TagRepository implements TagRepositoryInterface {
  async findByID(id: number) {
    return await knex("tags").where({ id }).first();
  }

  async create({ name, plate_id }: { name: string; plate_id: number }) {
    const tagID = await knex("tags").insert({
      name,
      plate_id,
    });
    return { id: tagID };
  }
}
