const knex = require("../database/knex");

class TagRepository {
  async findByID(id) {
    return await knex("tags").where({ id }).first();
  }

  async create({ name, plate_id }) {
    const tagID = await knex("tags").insert({
      name,
      plate_id,
    });
    return { id: tagID };
  }
}

module.exports = TagRepository;
