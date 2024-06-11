import Sequelize from "sequelize";

export const sequelize = new Sequelize("healthcare4", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
