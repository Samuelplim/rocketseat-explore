/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.hasTable("tags").then((exists) => {
    if (!exists) {
      return knex.schema.createTable("tags", (table) => {
        table.increments("id");
        table.text("name");
        table.integer("plate_id").references("id").inTable("plates");
      });
    }
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("tags");
