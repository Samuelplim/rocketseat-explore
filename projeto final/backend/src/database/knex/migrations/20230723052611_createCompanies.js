exports.up = (knex) =>
  knex.schema.hasTable("companies").then((exists) => {
    if (!exists) {
      return knex.schema.createTable("companies", (table) => {
        table.increments("id");
        table.text("name");
        table.integer("user_id").references("id").inTable("users");

        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at").default(knex.fn.now());
      });
    }
  });

exports.down = (knex) => knex.schema.dropTable("companies");
