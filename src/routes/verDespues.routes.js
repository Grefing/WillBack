import { Router } from "express";
import { borrarVerDespues, crearVerDespues, obtenerTodosVerDespues, obtenerVerDespues } from "../controllers/verDespues.controllers";

const router = Router();

router.route("/").get(obtenerTodosVerDespues);
router.route("/searchSeeLater/:id").get(obtenerVerDespues).delete(borrarVerDespues);
router.route("/nuevoSeeLater").post(crearVerDespues);

export default router;