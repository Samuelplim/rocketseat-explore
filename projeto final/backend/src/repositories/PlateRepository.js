const knex = require("../database/knex");

class PlateRepository {
  async findById(id) {
    return await knex("plates").where({ id }).first();
  }

  async create({ name, image, price, description, companies_id }) {
    const plateID = await knex("plates").insert({
      name,
      image,
      description,
      price,
      companies_id,
    });

    return { id: plateID };
  }

  async update({ id, name, price, image, description }) {
    const plate = await knex("plates")
      .where({ id })
      .update({ name, image, description, price });
    return plate;
  }
}

module.exports = PlateRepository;
