import { Router } from "express";
import { crearLike, obtenerLikes, obtenerLike, borrarLike } from "../controllers/likes.controllers";

const router = Router();

router.route("/").get(obtenerLikes)
router.route("/searchLike/:id").get(obtenerLike).delete(borrarLike);
router.route("/nuevoLike").post(crearLike);


export default router;