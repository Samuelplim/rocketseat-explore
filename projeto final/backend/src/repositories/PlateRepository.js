const knex = require("../database/knex");

class PlateRepository {
  async index() {
    const plates = await knex("plates").select("*");
    return plates;
  }

  async findById(id) {
    const plate = await knex("plates").where({ id }).first();
    return plate;
  }

  async create(name, price, description, category, ingredients) {
    const plateID = await knex("plates").insert({
      name,
      price,
      description,
      category,
      ingredients: JSON.stringify(ingredients),
    });

    return plateID;
  }

  async update(id, name, price, description, category, ingredients) {
    const plate = await knex("plates")
      .where({ id })
      .update({
        name,
        price,
        description,
        category,
        ingredients: JSON.stringify(ingredients),
      });
    return plate;
  }

  async patch({ id, image }) {
    const plate = await knex("plates").where({ id }).patch({ image });
    return plate;
  }
  async delete(id) {
    const response = await knex("plates").where({ id }).del();
    return response;
  }
}

module.exports = PlateRepository;
