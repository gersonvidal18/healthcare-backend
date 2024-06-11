import { Router } from "express";
import {
  getClinicas,
  createClinica,
} from "../controllers/clinicas.controller.js";

const router = Router();

router.get("/clinicas", getClinicas);
router.post("/clinicas", createClinica);
router.put("/clinicas/:id");
router.delete("/clinicas/:id");
router.get("/clinicas/:id");

export default router;
