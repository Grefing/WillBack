import Usuario from "../models/usuario";
import { OAuth2Client } from 'google-auth-library';
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    let usuario = await Usuario.findOne({ 
      nombreUsuario: req.body.nombreUsuario,
    });

    if (usuario) {
      return res
        .status(400)
        .json({ mensaje: "Ya existe un usuario con el nombre ingresado" });
    }

    usuario = await Usuario.findOne({
      email: req.body.email,
    });

    if (usuario) {
      return res.status(400).json({
        mensaje:
          "Ya existe un usuario con el mail ingresado, porfavor ingrese otro mail",
      });
    }

    const usuarioNuevo = new Usuario(req.body);
    const salt = bcrypt.genSaltSync(10);

    usuarioNuevo.password = bcrypt.hashSync(req.body.password, salt);
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: `El usuario ${usuarioNuevo.nombreUsuario} ha sido creado!`,
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al crear el usuario",
    });
  }
};

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al obtener los usuarios",
    });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.status(200).json(usuario);
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al obtener el usuario",
    });
  }
};

export const login = async (req, res) => {
  try {
    let usuario = await Usuario.findOne({ email: req.body.email });

    if (!usuario) {
      return res
        .status(404)
        .json({ mensaje: "Correo o contraseña invalidos - correo" });
    }

    const passwordValido = bcrypt.compareSync(
      req.body.password,
      usuario.password
    );

    if (!passwordValido) {
      return res
        .status(400)
        .json({ mensaje: "Correo o contraseña invalidos - contraseña" });
    }

    res.status(200).json({
      mensaje: "El usuario es correcto",
      nombreUsuario: usuario.nombreUsuario,
      id: usuario._id,
    });
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const compararContraseñaUsuario = async (req, res) => {
  try {

    let usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      return res
        .status(400)
        .json({ mensaje: "Usuario no encontrado - ID inválido" });
    }

    const passwordValido = bcrypt.compareSync(req.body.password, usuario.password);

    if (!passwordValido) {
      return res
        .status(400)
        .json({ mensaje: "Contraseña incorrecta" });
    }

    res.status(200).json({
      bool: true,
      mensaje: "La contraseña es correcta",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      mensaje: "Error al verificar la contraseña",
    });
  }
};

export const editarFotoUsuario = async (req, res) => {
  try {
    const nuevaFotoPerfil = await Usuario.findOneAndUpdate(
      { _id: req.params.id },
      { fotoPerfil: req.body.nuevaFotoPerfil },
      { new: true }
    );

    if (!nuevaFotoPerfil) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado",
      });
    }

    return res.status(200).json({
      mensaje: "Foto de perfil actualizada con éxito",
      usuario: nuevaFotoPerfil,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      mensaje: "Error al editar la foto de perfil",
    });
  }
};

export const editarContraseña = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.nuevaContraseña, 10);

    const usuarioActualizado = await Usuario.findOneAndUpdate(
      { _id: req.params.id },
      { password: hashedPassword },
      { new: true }
    );

    if (!usuarioActualizado) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado",
      });
    }

    return res.status(200).json({
      mensaje: "Contraseña actualizada con exito",
      status: 200,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      mensaje: "Error al cambiar la contraseña",
    });
  }
};
