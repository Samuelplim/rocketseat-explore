const knex = require("../database/knex");

class CompanyRepository {
  async findById(id) {
    return await knex("companies").where({ id }).first();
  }

  async create({ name, user_id }) {
    const companyId = await knex("companies").insert({ name, user_id });

    return { id: companyId };
  }
}

module.exports = CompanyRepository;
