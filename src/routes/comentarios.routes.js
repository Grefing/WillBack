import { Router } from "express";
import { borrarComentario, crearComentario, editarFotoComentarios, obtenerComentario, obtenerComentarios } from "../controllers/comentarios.controllers";

const router = Router();

router.route("/").get(obtenerComentarios);
router.route("/nuevoComentario").post(crearComentario);
router.route("/eliminarComentario/:id").delete(borrarComentario);
router.route("/editarFoto").put(editarFotoComentarios);
router.route("/comentario/:idPelicula").get(obtenerComentario);

export default router;