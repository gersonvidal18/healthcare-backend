import express from "express";
import clinicasRoutes from "./routes/clinicas.routes.js";
import cors from 'cors'

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(clinicasRoutes);

export default app;
