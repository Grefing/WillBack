import { Router } from "express";
import { crearUsuario, editarFotoUsuario, login, obtenerUsuario, obtenerUsuarios } from "../controllers/usuarios.controllers";
import validarUsuario from "../helpers/validacionUsuario";

const router = Router();

router.route('/').get(obtenerUsuarios).post(login)
router.route('/usuario/:id').get(obtenerUsuario).put(editarFotoUsuario)
router.route('/nuevo').post(validarUsuario ,crearUsuario)

export default router;