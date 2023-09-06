import Comentario from "../models/comentario";

export const crearComentario = async (req, res) => {
  try {
    const comentarioNuevo = new Comentario(req.body);
    await comentarioNuevo.save();

    res.status(201).json({
      mensaje: "Comentario :)",
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al comentar",
    });
  }
};

export const obtenerComentarios = async (req, res) => {
  try {
    const comentarios = await Comentario.find();
    res.status(200).json(comentarios);
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al obtener los comentarios",
    });
  }
};

export const borrarComentario = async (req, res) => {
  try {
    await Comentario.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Comentario eliminado con exito",
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al eliminar el comentario",
    });
  }
};
