import knex from "knex";

export const config = {
  development: {
    client: "mysql2",
    version: "8.0",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      database: "projects",
    },
    pool: { min: 0, max: 7 },
    useNullAsDefault: true,
  },
};

export const connection = knex(config.development);
