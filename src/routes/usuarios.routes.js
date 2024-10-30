import express, { Router } from "express";
import { compararContraseñaUsuario, crearUsuario, editarContraseña, editarFotoUsuario, login, obtenerUsuario, obtenerUsuarios } from "../controllers/usuarios.controllers";
import validarUsuario from "../helpers/validacionUsuario";

const router = Router();

router.route('/').get(obtenerUsuarios).post(login)
router.route('/usuario/:id').get(obtenerUsuario).put(editarFotoUsuario)
router.route('/nuevo').post(validarUsuario ,crearUsuario)
router.route('/passwordUsuario/:id').post(compararContraseñaUsuario)
router.route('/usuario/change-password/:id').put(editarContraseña)

export default router;