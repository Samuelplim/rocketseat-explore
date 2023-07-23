exports.up = (knex) =>
  knex.schema.createTable("tags", (table) => {
    table.increments("id");
    table.text("name");
    table.integer("plate_id").references("id").inTable("plates");
  });

exports.down = (knex) => knex.schema.createTable("tags");
