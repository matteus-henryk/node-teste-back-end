require('dotenv/config');

const postgre = {
  name: process.env.POSTGRES_DB_NAME,
  type: 'postgres',
  host: process.env.POSTGRES_DB_HOST,
  port: process.env.POSTGRES_DB_PORT,
  username: process.env.POSTGRES_DB_USERNAME,
  password: process.env.POSTGRES_DB_PASSWORD,
  database: process.env.POSTGRES_DB_DATABASE,
  entities: [
    './src/models/*{.ts,.js}',
  ],
  migrations: [
    './src/database/migrations/*{.ts,.js}',
  ],
  cli: {
    migrationsDir:
      './src/database/migrations/',
  },
};

module.exports = [
  postgre,
];
