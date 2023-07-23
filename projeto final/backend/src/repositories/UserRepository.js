const knex = require("../database/knex");

class UserRepository {
  async findById(id) {
    return await knex("users").where({ id }).first();
  }
  async findByEmail(email) {
    const user = await knex("users").where({ email }).first();

    return user;
  }

  async create({ name, email, password }) {
    const userID = await knex("users").insert({ name, email, password });

    return { id: userID };
  }

  async update({ id, name, email, password }) {
    const user = await knex("users")
      .where({ id })
      .update({ name, email, password });
    return user;
  }
}

module.exports = UserRepository;
