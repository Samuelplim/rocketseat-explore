const knex = require("../database/knex");

class UserRepository {
  async findByEmail(email) {
    const user = await knex("users").where({ email }).first();

    return user;
  }

  async create({ name, email, password }) {
    const userID = await knex("users").insert({ name, email, password });

    return { id: userID };
  }
}

module.exports = UserRepository;
