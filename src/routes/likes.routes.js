import { Router } from "express";
import { crearLike, obtenerLikes, obtenerLike, borrarLike, obtenerLikeId } from "../controllers/likes.controllers";

const router = Router();

router.route("/").get(obtenerLikes)
router.route("/searchLike/:id").get(obtenerLikeId).delete(borrarLike);
router.route("/nuevoLike").post(crearLike);
router.route("/:idUsuario").get(obtenerLike)


export default router;