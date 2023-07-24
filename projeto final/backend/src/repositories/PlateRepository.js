const knex = require("../database/knex");

class PlateRepository {
  async findById(id) {
    return await knex("plates").where({ id }).first();
  }

  async create({ name, price, description, companies_id }) {
    const plateID = await knex("plates").insert({
      name,
      description,
      price,
      companies_id,
    });

    return { id: plateID };
  }

  async update({ id, name, price, description }) {
    const plate = await knex("plates")
      .where({ id })
      .update({ name, description, price });
    return plate;
  }

  async patch({ id, image }) {
    const plate = await knex("plates").where({ id }).patch({ image });
  }
}

module.exports = PlateRepository;
