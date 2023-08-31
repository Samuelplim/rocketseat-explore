exports.up = (knex) => {
  return knex.schema.alterTable("users", (table) => {
    table.boolean("isAdmin").default("false");
  });
};

exports.down = (knex) => {
  return knex.schema.table("users", (table) => {
    table.boolean("isAdmin");
  });
};
