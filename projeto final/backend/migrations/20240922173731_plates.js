/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.hasTable("plates").then((exists) => {
    if (!exists) {
      return knex.schema.createTable("plates", (table) => {
        table.increments("id");
        table.text("name");
        table.text("image");
        table.text("price");
        table.text("description");
        table.integer("merchant_id").references("id").inTable("merchant");
        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at").default(knex.fn.now());
      });
    }
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("plates");
