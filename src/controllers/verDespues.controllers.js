import VerDespues from "../models/verDespues";

export const crearVerDespues = async (req, res) => {
  try {
    const verDespuesNuevo = new VerDespues(req.body);
    await verDespuesNuevo.save();

    res.status(201).json({
      mensaje: "Ver despues :)",
      id: verDespuesNuevo.id,
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al ver mas tarde :(",
    });
  }
};

export const obtenerVerDespuesId = async (req, res) => {
  try {
    const verDespues = await VerDespues.findById(req.params.id);
    res.status(200).json(verDespues);
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al obtener ver despues",
    });
  }
};

export const obtenerVerDespues = async (req, res) => {
  try {
    const idUsuario = req.params.idUsuario

    const verDespues = await VerDespues.find({ idUsuario });
    res.status(200).json(verDespues);
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al obtener ver despues",
    });
  }
};

export const obtenerTodosVerDespues = async (req, res) => {
  try {
    const todosVerDesp = await VerDespues.find();
    res.status(200).json(todosVerDesp);
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al obtener los ver mas tarde",
    });
  }
};

export const borrarVerDespues = async (req, res) => {
  try {
    await VerDespues.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "Ver mas tarde eliminado con exito",
    });
  } catch (e) {
    console.log(e);
    res.status(404).json({
      mensaje: "Error al eliminar el ver mas tarde",
    });
  }
};
