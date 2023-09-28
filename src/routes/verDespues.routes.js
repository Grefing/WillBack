import { Router } from "express";
import { borrarVerDespues, crearVerDespues, obtenerTodosVerDespues, obtenerVerDespues, obtenerVerDespuesId } from "../controllers/verDespues.controllers";

const router = Router();

router.route("/").get(obtenerTodosVerDespues);
router.route("/searchSeeLater/:id").get(obtenerVerDespuesId).delete(borrarVerDespues);
router.route("/nuevoSeeLater").post(crearVerDespues);
router.route("/:idUsuario").get(obtenerVerDespues)

export default router;