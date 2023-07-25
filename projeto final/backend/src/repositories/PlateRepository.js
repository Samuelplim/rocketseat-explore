const knex = require("../database/knex");

class PlateRepository {
  async index() {
    const plates = await knex("plates").select("*").limit(2);
    return plates;
  }

  async findById(id) {
    const plate = await knex("plates").where({ id }).first();
    return plate;
  }

  async create({ companies_id, name, description, price }) {
    try {
      const plateID = await knex("plates").insert({
        companies_id,
        name,
        description,
        price,
      });
    } catch (error) {
      console.log("", error);
    }

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
    return plate;
  }
}

module.exports = PlateRepository;
