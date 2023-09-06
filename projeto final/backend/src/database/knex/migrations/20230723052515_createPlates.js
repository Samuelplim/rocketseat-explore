exports.up = (knex) =>
  knex.schema.hasTable("plates").then((exists) => {
    if (!exists) {
      return knex.schema.createTable("plates", (table) => {
        table.increments("id");
        table.text("name");
        table.text("image");
        table.text("price");
        table.text("description");
        table.json("ingredients"); // Propriedade para armazenar um array de ingredientes
        table.text("category"); // Propriedade para armazenar a categoria como texto

        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at").default(knex.fn.now());
      });
    }
  });

exports.down = (knex) => knex.schema.dropTable("plates");
