import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Medico } from "./Medico.js";

export const Clinica = sequelize.define("Clinicas", {
  idClinica: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  direccion: {
    type: DataTypes.STRING,
  },
  latitud: {
    type: DataTypes.FLOAT,
  },
  longitud: {
    type: DataTypes.FLOAT,
  },
});

Clinica.hasMany(Medico, {
  foreignKey: "clinicaId",
  sourceKey: "idClinica",
});

Medico.belongsTo(Clinica, {
  foreignKey: "clinicaId",
  targetId: "idClinica",
});
