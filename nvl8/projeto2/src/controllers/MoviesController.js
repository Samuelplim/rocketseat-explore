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
}

module.exports = MoviesController;
