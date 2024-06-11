import { Clinica } from "../models/Clinica.js";

export const getClinicas = async (req, res) => {
  try {
    const clinicas = await Clinica.findAll();
    res.json(clinicas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createClinica = async (req, res) => {
  const { nombre, direccion, latitud, longitud } = req.body;

  try {
    const newClinica = await Clinica.create({
      nombre,
      direccion,
      latitud,
      longitud,
    });

    res.json(newClinica);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
