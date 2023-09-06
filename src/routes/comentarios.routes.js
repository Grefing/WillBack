import { Router } from "express";
import { borrarComentario, crearComentario, obtenerComentarios } from "../controllers/comentarios.controllers";

const router = Router();

router.route("/").get(obtenerComentarios);
router.route("/nuevoComentario").post(crearComentario);
router.route("/eliminarComentario/:id").delete(borrarComentario);


export default router;