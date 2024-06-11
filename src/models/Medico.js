import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Medico = sequelize.define("Medicos", {
  idMedico: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellidos: {
    type: DataTypes.STRING,
  },
});



