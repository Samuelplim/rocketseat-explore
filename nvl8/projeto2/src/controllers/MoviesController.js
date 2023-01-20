const knex = require("../database/knex");

class MoviesController {
  async create(request, response) {
    const { title, description, rating, movies_tags } = request.body;
    const { user_id } = request.params;

    const movies_id = await knex("movies").insert({
      title,
      description,
      rating,
      user_id,
    });

    const movies_tagsInsert = movies_tags.map((movie_tag) => {
      return {
        movies_id,
        user_id,
        name: movie_tag,
      };
    });

    await knex("movies_tags").insert(movies_tagsInsert);

    response.json();
  }
  async show(request, response) {
    const { id } = request.params;

    const movie = await knex("movies").where({ id }).first();
    const tags = await knex("movies_tags")
      .where({ movies_id: id })
      .orderBy("name");

    return response.json({ movie, tags });
  }
  async delete(request, response) {
    const { id } = request.params;
    await knex("movies").where({ id }).delete();
    return response.json();
  }
  async index(request, response) {
    const movies = await knex("movies").limit(10).orderBy("title");

    return response.json(movies);
  }
}

module.exports = MoviesController;
