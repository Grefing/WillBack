import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarUsuario = [
    check("nombreUsuario")
    .notEmpty()
    .isLength({min: 3, max: 16})
    .withMessage("El nombre del usuario debe tener entre 3 y 16 caracteres"),

    check("email")
    .notEmpty()
    .isEmail()
    .withMessage("Correo electrónico no válido"),

    check("password")
    .notEmpty()
    .isLength({min: 8})
    .matches(/\d/)
    .withMessage("La contraseña debe contener al menos un número"),

    (req, res, next) =>{ resultadoValidacion(req, res, next) }
];

export default validarUsuario;