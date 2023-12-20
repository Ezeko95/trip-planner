import { Sequelize } from "sequelize";

const databaseURL = process.env.DB_URL;

const sequelize = new Sequelize(`${databaseURL}`, {
  logging: false,
  native: false,
});

export default sequelize;
