import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Clinica } from "./Clinica.js";
import { Especialidad } from "./Especialidad.js";

export const Enfermedad = sequelize.define("Enfermedades", {
  idEnfermedad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreOriginal: {
    type: DataTypes.STRING,
  },
  nombreEspañol: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  //especialistasTratan
  //clinicaTratante;
  imagen: {
    type: DataTypes.BLOB,
  },
});

Enfermedad.belongsTo(Clinica, {
    foreignKey: 'clinicaTratante',
    targetId: 'idClinica' 
})

Clinica.hasMany(Enfermedad, {
    foreignKey: 'clinicaTratante',
    sourceKey: 'idClinica' 
})

// La enfermedad la tratan muchas especialidades
// Se crea una nueva tabla en la BD para EspecialidadEnfermedad
Enfermedad.belongsToMany(Especialidad, {
    through: "EspecialidadEnfermedad",
    foreignKey: "enfermedadId",
    otherKey: "especialidadId"
})

Especialidad.belongsToMany(Enfermedad, {
    through: "EspecialidadEnfermedad",
    foreignKey: "especialidadId",
    otherKey: "enfermedadId"
})