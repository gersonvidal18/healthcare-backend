import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Medico } from "./Medico.js";

export const Especialidad = sequelize.define('Especialidades', {
    idEspecialidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    }
})

Especialidad.hasMany(Medico, {
    foreignKey: 'especialidadId',
    sourceKey: 'idEspecialidad'
})

Medico.belongsTo(Especialidad,  {
    foreignKey: 'especialidadId',
    targetId: 'idEspecialidad'
})