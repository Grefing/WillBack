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
    const comentarios = await Comentario.find().populate("usuario");
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

export const editarFotoComentarios = async (req, res) => {
  try {
    const { ids, nuevaFotoComentario } = req.body;

    if (!ids || !nuevaFotoComentario) {
      return res.status(400).json({
        mensaje: "IDs de comentarios y nueva foto son requeridos",
      });
    }

    const resultado = await Comentario.updateMany(
      { _id: { $in: ids } },
      { fotoPerfil: nuevaFotoComentario }
    );

    if (resultado.nModified === 0) {
      return res.status(404).json({
        mensaje: "Comentarios no encontrados",
      });
    }

    return res.status(200).json({
      mensaje: "Fotos de comentarios actualizadas con éxito",
    });
    
  } catch (e) {
    console.log(e);
    res.status(500).json({
      mensaje: "Error al editar las fotos de comentarios",
    });
  }
};

export const obtenerComentario = async (req, res) => {
  try {
    const idPelicula = req.params.idPelicula;

    // Buscar comentarios relacionados con la película
    const comentarios = await Comentario.find({ idPelicula }).populate("usuario");
    res.status(200).json(comentarios);
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al obtener el comentario",
    });
  }
};